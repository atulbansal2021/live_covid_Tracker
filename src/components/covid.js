import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";


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

    <Container maxWidth="lg" >



      <Grid sx={{ p: 2 }}
        container
        flexDirection="row"
        justifyContent="center"
        alignItems="center"

      >
        <Grid item xs={12} md={6}>
          <Typography variant="h4" className="">🔴 LIVE</Typography>
        </Grid>
        <Grid item xs={12} md={6} container flexDirection="row"
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          <Typography variant="h5">COVID-19 CORONAVIRUS TRACKER</Typography>
        </Grid>
      </Grid>
      <Grid sx={{ boxShadow: "0px 0px 20px 2px #ADD8E6", borderRadius: "8px", p: 2 }}
        container
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"


      >
        <Grid item xs={12} md={4} sx={{ border: '1px solid #ADD8E6' }}>
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
        </Grid>
        <Grid item xs={12} md={4} sx={{ border: '1px solid #ADD8E6' }}>

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
        </Grid>
        <Grid item xs={12} md={4} sx={{ border: '1px solid #ADD8E6' }}>

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
        </Grid>
        <Grid item xs={12} md={4} sx={{ border: '1px solid #ADD8E6' }}>
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
        </Grid>
        <Grid item xs={12} md={4} >

          <Typography variant="h3" align="center"    >India</Typography>
        </Grid>
        <Grid item xs={12} md={4} sx={{ border: '1px solid #ADD8E6' }}>

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
        </Grid>













      </Grid>

    </Container>



  );
};
export default Covid;
