export const experienceData = [
    {
      id: 1,
      position: "Graduate Research Assistant",
      company: "Purdue University",
      location: "West Lafayette, IN",
      duration: "Feb 2025 - Present",
      responsibilities: [
        "Developed a cross-platform desktop application using React and Electron.js, integrating C++ and Python-based multi-physics simulation scripts for real-time configuration and execution of hydraulic pump/motor models.",
        "Accelerated simulation time by 30% by migrating deformation influence matrix calculations from CPU to GPU using CUDA.",
        "Implemented real-time plotting of simulation results and VTK-based animations to display deformation and operational changes.",
        "Engineered a thread-safe time profiler to diagnose performance bottlenecks, reporting total wall-clock time and call frequency for functions executed concurrently in a large-scale simulation."
      ],
    },
    {
      id: 2,
      position: " Data Science Researcher",
      company: "Microsoft (Corporate Collaboration with Purdue University",
      location: "West Lafayette, IN",
      duration: "Jan 2025 - May 2025",
      responsibilities: [
        "Architected and deployed an end-to-end question-answering application, leveraging a RAG model with Mistral LLM to provide nuanced insights from a large-scale Minecraft YouTube dataset.",
        "Engineered a data pipeline to scrape, process, and store YouTube video transcripts and comments in Spark Delta tables, implementing rigorous text cleaning and filtering to ensure data quality.",
        "Applied VADER and BERT models, to perform sentiment analysis on transcripts and comments."
      ],
    },
    {
      id: 3,
      position: "Research Assistant",
      company: " JNTUH College of Engineering",
      location: "Hyderabad, India",
      duration: "Aug 2023 - May 2024",
      responsibilities: [
      "Boosted baseline CNN accuracy by 15% by implementing Patch-Based architecture, training on 550k images to learn granular features from 9 distinct local patches.",
      "Achieved a 3.67% EER on the CelebA-Spoof dataset and 75% accuracy in a cross-dataset validation against the NUAA Impostor dataset.",
      "Deployed the model into a real-time application, enabling immediate, on-the-fly analysis of potential spoofing attacks."
      ],
    },
    {
      id: 4,
      position: " Software Programmer Intern",
      company: "Sivive Enterprises",
      location: "Hyderabad,IN",
      duration: "may 2023 - aug 2023",
      responsibilities: [
      "Engineered a backend system to retrieve uploaded documents from AWS S3, process them using AWS Textract to extract key-value pairs and tables, and generate a CSV file containing the extracted data, saving the file back to the S3 bucket.",
      "Implemented a React front-end with a document upload feature, displaying the processed document in a panel, and providing a button to download the generated CSV file, supporting multi-page document processing."
      ]
    }
  ];