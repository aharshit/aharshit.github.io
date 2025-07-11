import React from 'react';
import { personalInfo } from '../../data/personalInfo';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-left">
        <p className="text-lg text-gray-500 dark:text-gray-500 light:text-gray-600">
          © {personalInfo.name} • updated whenever i remember
        </p>
      </div>
    </section>
  );
};

export default Contact;