import React from "react";

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <i className="about__icon icon-fire"></i>

        <div>
          <h3 className="about__title">A+</h3>
          <span className="about__subtile">Responsive Design</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-cup"></i>

        <div>
          <h3 className="about__title">S</h3>
          <span className="about__subtile">Simplicity</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-people"></i>

        <div>
          <h3 className="about__title">B</h3>
          <span className="about__subtile">Performance</span>
        </div>
      </div>

      <div className="about__box">
        <i className="about__icon icon-badge"></i>

        <div>
          <h3 className="about__title">A+</h3>
          <span className="about__subtile">Accessibility</span>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
