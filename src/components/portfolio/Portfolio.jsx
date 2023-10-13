import React, { useState } from "react";
import "./portfolio.css";
import Menu from "./Menu";

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const fillterItem = (categoryItem) => {
    const updateItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });
    setItems(updateItems);
  };
  return (
    <div className="work container section" id="work">
      <h2 className="section___title">Recent Works</h2>

      <div className="work__filters">
        <span className="work__item" onClick={() => setItems(Menu)}>
          Everything
        </span>
        <span className="work__item" onClick={() => fillterItem("Team")}>
          Team
        </span>
        <span className="work__item" onClick={() => fillterItem("Personal")}>
          Personal
        </span>
        {/* <span className="work__item" onClick={() => fillterItem("Design")}>
          Design
        </span>
        <span className="work__item" onClick={() => fillterItem("Branding")}>
          Branding
        </span> */}
      </div>

      <div className="work__container grid">
        {items.map((elem) => {
          const { id, image, title, category, link } = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a href={link} className="work__button" target="_blank">
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
