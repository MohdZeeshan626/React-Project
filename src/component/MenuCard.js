import React from "react";
import Menu from "./menuApi";

const MenuCard = ({ menuData }) => {

  return (
    <section className="main-card--cointainer">
      <>
        {menuData.map((curElem) => {
          return (
            <>
              <div className="card-container">
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">
                      {curElem.id}
                    </span>
                    <span className="card-author subtle">{curElem.name}</span>
                    <h1 className="card-title">{curElem.name}</h1>
                    <span className="card-description subtle">
                      {curElem.description}
                    </span>
                    <div className="card-read">{curElem.price}</div>
                  </div>
                  <img
                    src={curElem.image}
                    alt="images"
                    className="card-media"
                  />
                  <span className="card-tag subtle">
                    Designed By Mohd Xeeshan
                  </span>
                </div>
              </div>
            </>
          );
        })}
      </>
    </section>
  );
};

export default MenuCard;
