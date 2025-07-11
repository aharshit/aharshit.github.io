import React from 'react';
import { personalInfo } from '../../data/personalInfo';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-lg text-muted">
          © {personalInfo.name} • updated whenever i remember
        </p>
      </div>
    </section>
  );
};

export default Contact;