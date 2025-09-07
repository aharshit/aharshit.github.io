import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const kernelData = [
  { kernel: "Kernel 1", time: 10119557 },
  { kernel: "Kernel 2", time: 2413587 },
  { kernel: "Kernel 3", time: 1081071 },
  { kernel: "Kernel 4", time: 810417 },
  { kernel: "Kernel 5", time: 665077 },
  { kernel: "Kernel 6", time: 641653 },
  { kernel: "Kernel 7", time: 508792 },
  { kernel: "Kernel 8", time: 546840 },
  { kernel: "cuBLAS", time: 218876 },
];
const Matrix = () => {
  return (
    <section id="matrix" className="py-20 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-light mb-8 text-secondary">
          GEMM Optimization on NVIDIA GPU
        </h2>

        <p className="mb-6 text-base leading-relaxed">
          To optimize GEMM on CUDA, I developed eight kernels, each building on
          the previous one. The process started with a naive implementation and
          gradually introduced optimizations such as memory coalescing, shared
          memory tiling, register reuse, vectorized loads, warp-level tiling, and
          autotuning. Finally, I compared the TFLOPS achieved by each kernel against
          the baseline and cuBLAS to understand the impact of each optimization.
        </p>

        <div className="space-y-6">
          {/* Kernel 1 */}
          <div>
            <h3 className="text-xl font-semibold text-primary mb-2">Kernel 1 – Naive</h3>
            <p className="text-base leading-relaxed">
              <strong>What we did:</strong> Each thread computes a single output
              element with a direct mapping of thread IDs to matrix indices.
            </p>
            <p className="text-base leading-relaxed">
              <strong>Bottleneck:</strong> Global memory accesses are strided and
              uncoalesced. Threads in a warp access scattered rows/columns, leading
              to inefficient memory bandwidth usage.
            </p>
          </div>

          {/* Kernel 2 */}
          <div>
            <h3 className="text-xl font-semibold text-primary mb-2">Kernel 2 – Global Memory Coalescing</h3>
            <p className="text-base leading-relaxed">
              <strong>What we did:</strong> Adjusted row/column mapping so that threads
              in a warp access consecutive elements of <code>B</code> and the same rows of <code>A</code>,
              enabling coalesced memory access.
            </p>
            <p className="text-base leading-relaxed">
              <strong>Bottleneck:</strong> Memory latency is still high. Data is repeatedly
              loaded from global memory, so shared memory is needed to reduce traffic.
            </p>
          </div>

          {/* Kernel 3 */}
          <div>
            <h3 className="text-xl font-semibold text-primary mb-2">Kernel 3 – Shared Memory</h3>
            <p className="text-base leading-relaxed">
              <strong>What we did:</strong> Computed <code>C</code> tile-by-tile using shared memory.
              Each tile of size <code>BN×BK</code> is loaded into <code>As</code> and <code>Bs</code>,
              allowing threads to reuse the same data multiple times.
            </p>
            <p className="text-base leading-relaxed">
              <strong>Bottleneck:</strong> Each thread still computes a single output element, limiting
              register reuse and arithmetic intensity.
            </p>
          </div>

          {/* Kernel 4 */}
          <div>
            <h3 className="text-xl font-semibold text-primary mb-2">Kernel 4 – 1D Block Tiling</h3>
            <p className="text-base leading-relaxed">
              <strong>What we did:</strong> Each thread now computes <code>TM × 1</code> elements,
              increasing arithmetic intensity. Shared memory tiles are sized <code>BM×BN</code> for <code>A</code>
              and <code>BN×BK</code> for <code>B</code>.
            </p>
            <p className="text-base leading-relaxed">
              <strong>Bottleneck:</strong> Still limited by computation per memory access. Moving to
              2D block tiling can further increase reuse and parallelism.
            </p>
          </div>

          {/* Kernel 5 */}
          <div>
            <h3 className="text-xl font-semibold text-primary mb-2">Kernel 5 – 2D Block Tiling</h3>
            <p className="text-base leading-relaxed">
              <strong>What we did:</strong> Threads compute <code>TM×TK</code> subtiles in each
              block tile of <code>BM×BK</code>. Shared memory now holds larger tiles of <code>A</code> and
              <code>B</code>, enabling higher data reuse and improved arithmetic intensity.
            </p>
            <p className="text-base leading-relaxed">
              <strong>Bottleneck:</strong> Memory bank conflicts and non-optimal load patterns
              for <code>A</code> limit performance. Transposing <code>A</code> in shared memory could help.
            </p>
          </div>

          {/* Kernel 6 */}
          <div>
            <h3 className="text-xl font-semibold text-primary mb-2">Kernel 6 – Vectorized GEMM</h3>
            <p className="text-base leading-relaxed">
              <strong>What we did:</strong> Introduced <code>int4</code> vectorized loads/stores
              for both <code>A</code> and <code>B</code>. Threads process 4 elements at once in
              shared memory and registers, performing multiply-accumulate and writing back 4 results
              together.
            </p>
            <p className="text-base leading-relaxed">
              <strong>Bottleneck:</strong> Still constrained by shared memory and register usage.
              Further improvement requires better tiling or warp-level intrinsics.
            </p>
          </div>

          {/* Kernel 7 */}
          <div>
            <h3 className="text-xl font-semibold text-primary mb-2">Kernel 7 – Warp-Level Tiling</h3>
            <p className="text-base leading-relaxed">
              <strong>What we did:</strong> Each warp computes a submatrix of size <code>WM×WK</code>.
              Register blocking and shared memory tiling are combined for multiple output elements
              per thread, reducing global memory traffic and increasing parallelism.
            </p>
            <p className="text-base leading-relaxed">
              <strong>Bottleneck:</strong> Register pressure increases with tile size. Optimal parameters
              depend on GPU architecture.
            </p>
          </div>

          {/* Kernel 8 */}
          <div>
            <h3 className="text-xl font-semibold text-primary mb-2">Kernel 8 – Warp-Tiled Autotuned GEMM</h3>
            <p className="text-base leading-relaxed">
              <strong>What we did:</strong> Final kernel with autotuning and warp-level tiling.
              Each warp computes a tile with vectorized loads, register blocking, and shared memory tiling.
              Template parameters <code>BM, BN, BK, WM, WK, TM, TK, WKITER</code> are autotuned for
              maximum TFLOPS.
            </p>
            <p className="text-base leading-relaxed">
              <strong>Bottleneck:</strong> Limited by shared memory, registers, and global memory bandwidth.
              Future improvements could use tensor cores or warp shuffles for intra-warp reductions.
            </p>
          </div>
            <div className="mt-10">
            <h3 className="text-xl font-semibold text-primary mb-4">
              Kernel Execution Times (ns)
            </h3>
            <div style={{ width: "100%", height: 500 }}>
              <ResponsiveContainer>
                <BarChart
                  data={kernelData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="kernel"
                    angle={-45}
                    textAnchor="end"
                    interval={0}
                  />
                  <YAxis
                    label={{
                      value: "Time (ns)",
                      angle: -90,
                      position: "insideLeft",
                      offset: -10  
                    }}
                     domain={['dataMin', 'dataMax']}
                  />
                  <Tooltip />
                  <Legend   wrapperStyle={{ marginBottom: -100 }}/>
                  <Bar dataKey="time" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Matrix;
