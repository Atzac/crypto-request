import React, { useEffect, useState } from "react";
import { getNomicData } from "./api/api";
import { getAwesomeData } from "./api/api_awesome";
import "./App.css";

function App() {
  const [cont, setCont] = useState([]);
  const [seconds, setSeconds] = useState(true);
  const [cotation, setCotation] = useState([]);

  const loadNomicData = async () => {
    try {
      const response = await getNomicData();
      console.log(response)
      setCont(response);
    } catch (e) {
      console.log(e);
    }
  };

  const loadAwesomeData = async () => {
    try {
      const response = await getAwesomeData();
      let parsed = [];

      Object.keys(response).map((key) => {
        return parsed.push(response[key]);
      });
      console.log(parsed);
      setCotation(parsed);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadNomicData();
    loadAwesomeData();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setSeconds(!seconds);
    }, 30000);
  }, [seconds]);

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {cont &&
          cont.map((item) => {
            return (
              <div className="card" key={item.currency}>
                <img src={item.logo_url} alt="a" className="a" />
                <p>
                  {item.currency} - {item.price}
                </p>
              </div>
            );
          })}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {cotation &&
          cotation.map((item) => {
            return (
              <div className="card2">
                <p>
                  {item.ask} - {item.code}
                </p>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default App;
