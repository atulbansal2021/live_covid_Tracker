import React, { useEffect, useState } from "react";
import "./covid.css";
const Covid = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      const actualData = await res.json();
      console.log(actualData.statewise[0]);
      setData(actualData.statewise[0]);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <div className="div__main">
        <section>
          <h1>🔴 LIVE</h1>
          <h2>COVID-19 CORONAVIRUS TRACKER</h2>
          <div className="box">
            {/* fisrt Card */}
            <div className="mainContainer">
              <ul>
                <li className="card">
                  <div className="card__main">
                    <div className="card__inner">
                      <p className="card_name">
                        <span> OUR </span>COUNTRY
                      </p>
                      <p className="card__total card__small">INDIA</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* second Card */}
            <div className="mainContainer">
              <ul>
                <li className="card">
                  <div className="card__main">
                    <div className="card__inner">
                      <p className="card_name">
                        <span> TOTAL </span>RECOVERED
                      </p>
                      <p className="card__total card__small">{data.recovered}</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* third Card */}
            <div className="mainContainer">
              <ul>
                <li className="card">
                  <div className="card__main">
                    <div className="card__inner">
                      <p className="card_name">
                        <span> TOTAL </span>CONFIRMED
                      </p>
                      <p className="card__total card__small">{data.confirmed}</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* forth Card */}
            <div className="mainContainer">
              <ul>
                <li className="card">
                  <div className="card__main">
                    <div className="card__inner">
                      <p className="card_name">
                        <span> TOTAL </span>DEATHS
                      </p>
                      <p className="card__total card__small">{data.deaths}</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* fifth Card */}
            <div className="mainContainer">
              <ul>
                <li className="card">
                  <div className="card__main">
                    <div className="card__inner">
                      <p className="card_name">
                        <span> TOTAL </span>ACTIVE
                      </p>
                      <p className="card__total card__small">{data.active}</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* sixth Card */}
            <div className="mainContainer">
              <ul>
                <li className="card">
                  <div className="card__main">
                    <div className="card__inner">
                      <p className="card_name">
                        <span> LAST </span>UPDATED
                      </p>
                      <p className="card__total card__small">{data.lastupdatedtime}</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* End Card */}
          </div>
        </section>
      </div>
    </>
  );
};
export default Covid;
