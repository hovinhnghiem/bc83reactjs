import React, { useState } from "react";
import data from "./data.json";
import "./Glasses.css";

export default function Glasses() {
  const [glasses, setGlasses] = useState(data[0]);

  const renderListGlass = () => {
    return data.map((item) => (
      <img
        key={item.id}
        src={item.url}
        alt={item.name}
        className="thumbnail"
        onClick={() => setGlasses(item)}
      />
    ));
  };

  return (
    <div className="app">
      <h1>TRY GLASSES APP ONLINE</h1>

      {/* Model Section */}
      <div className="model-section">
        <div className="model-box">
          <img
            src="images/model.jpg"
            alt="model"
            className="model-img"
          />
          <img 
            src={glasses.url}
            alt="glasses"
            className="glasses-overlay"
          />
          <div className="glass-info">
            <h4>{glasses.name}</h4>
            <p>{glasses.desc}</p>
            <p>Giá: {glasses.price} $</p>
          </div>
        </div>
        <div className="model-box">
          <img
            src="images/model.jpg"
            alt="model"
            className="model-img"
          />
        </div>
      </div>

      {/* Glasses List */}
      <div className="glasses-list">{renderListGlass()}</div>
    </div>
  );
}
