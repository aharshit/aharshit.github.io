import React from 'react';
import Navigation from '../components/common/Navigation';
import Contact from '../components/sections/Contact';

const Matrix = () => {
  return (
    <>
      <Navigation />
      <section id="matrix" className="py-20 px-6 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-light mb-8 text-secondary">
            Matrix Project
          </h2>
        </div>
      </section>
      <Contact />
    </>
  );
};

export default Matrix;
