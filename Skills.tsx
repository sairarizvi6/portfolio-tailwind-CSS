import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="container pt-32">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div data-aos="zoom-in-up">
          <h2 className="text-4xl md:text-5xl">Knowledges I work with</h2>
          <p className="text-rose-100">
          I am skilled in web development, specializing in HTML, CSS, and JavaScript, with experience in frameworks 
          like React and Next.js for building responsive, user-centered applications. 
          Proficient in Tailwind CSS, I focus on creating efficient, modern designs. 
          Driven by a passion for learning, I continually explore new technologies to refine my expertise and add value to every project.
          </p>
        </div>

        <div>
          <div className="grid grid-cols-2 text-accent text-3xl sm:text-4xl">
            <div className="space-y-2">
              <h3 data-aos="zoom-in-up">Next.js</h3>
              <h3 data-aos="zoom-in-up">Typescript</h3>
              <h3 data-aos="zoom-in-up">React.js</h3>
            </div>
            <div className="space-y-2">
              <h3 data-aos="zoom-in-up">Tailwind</h3>
              <h3 data-aos="zoom-in-up">CSS</h3>
              <h3 data-aos="zoom-in-up">Node.js</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;