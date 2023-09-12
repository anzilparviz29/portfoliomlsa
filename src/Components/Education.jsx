import React from "react";
//education information of me
const Education = () => {
  return (
    <section id="education">
      <h2 className="numbered-heading">Education</h2>
      <div className="education-block">
        <div className="education-block__header">
          <h3 className="education-block__header-school">
            <a href="https://www.queensu.ca/">Queen University</a>
          </h3>
          <p className="education-block__header-date">2016 - 2021</p>
        </div>
        <div className="education-block__body">
          <div className="education-block__body-degree">
            <p className="education-block__body-degree-name">Bachelor of Science (Honours)</p>
            <p className="education-block__body-degree-field">Computing (Software Design)</p>
          </div>
          <div className="education-block__body-description">
            <p>
              I am currently a fourth year student at Queen University, pursuing a Bachelor of
              Science in Computing (Software Design) with a minor in Film and Media.
            </p>
          </div>
        </div>
      </div>
      <div className="education-block">
        <div className="education-block__header">
          <h3 className="education-block__header-school">
            <a href="https://www.queensu.ca/"> Quee University</a>
          </h3>
          <p className="education-block__header-date">2016 - 2021</p>
        </div>
        <div className="education-block__body">
          <div className="education-block__body-degree">
            <p className="education-block__body-degree-name">Bachelor of Science (Honours)</p>
            <p className="education-block__body-degree-field">Computing (Software Design)</p>
          </div>
          <div className="education-block__body-description">
            <p>
              I am currently a fourth year student at Queen University, pursuing a Bachelor of
              Science in Computing (Software Design) with a minor in Film and Media.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
//how do i include in the App.jsx