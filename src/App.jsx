import React from "react";
import button_logo from "./images/pattern-divider-mobile.svg";
import icon_dice from "./images/icon-dice.svg";
import { useEffect, useState } from "react";
import ethereum from "./images/icon-ethereum.svg";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getApi = async () => {
    setLoading(true);
    const url = "https://api.adviceslip.com/advice";
    const res = await fetch(url);
    const { slip } = await res.json();
    setData(slip);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  useEffect(() => {
    getApi();
  }, []);

  const { id, advice } = data;

  return (
    <div className="container">
      <div className="container__section">
        {loading ? (
          <img src={ethereum} alt="Loading" className="loading" />
        ) : (
          <>
            <p className="container__title">Advice #{id}</p>
            <p className="container__paragraph">"{advice}"</p>
          </>
        )}
        <img src={button_logo} alt="Button logo" className="image" />
        <div className="container__logo" onClick={getApi}>
          <img src={icon_dice} alt="Button logo" />
        </div>
      </div>
    </div>
  );
};

export default App;
