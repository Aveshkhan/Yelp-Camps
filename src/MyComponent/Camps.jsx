import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import searchIcon from "../assets/Search Icon.svg";
import Card from "./Card";
import Navbar from "./Navbar";
import Logo from "../assets/Logo.svg";
import campsData from "../mock_data/camps.json";

const Camps = () => {
  const [camps, setCamps] = useState(null);
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    setCamps(campsData);
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      });
  }, []);

  return (
    <div>
      <div className="container2">
        <Navbar />
        <div className="Content4">
          <h2>Welcome to YelpCamp!</h2>
          <div className="text">
            View our hand-picked campgrounds from all over the world, or add
            your own.
          </div>
          <div className="searchBar-content">
            <div className="searchBar">
              <img src={searchIcon} alt="" />
              <input
                type="text"
                onChange={(event) => {
                  console.log(event.target.value);
                }}
                placeholder="Search for camps"
              />
            </div>
            <button className="btn">Search</button>
          </div>
          <NavLink className="U-link" to="#">
            Or add your own campground
          </NavLink>
        </div>

        {/* <div style={{ marginBottom: "30px" }}>
          <h4>API Data</h4>
          {apiData === null ? (
            <div>No data avaiable.... </div>
          ) : (
            apiData.map((data) => (
              <div
                key={data.id}
                style={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  marginBottom: "10px",
                }}
              >
                {data.title}
                <span
                  style={{
                    color: data.completed ? "green" : "red",
                    marginLeft: "10px",
                    display: "block",
                  }}
                >
                  {data.completed ? "Task Completed" : "Task Incomplete"}
                </span>
              </div>
            ))
          )}
        </div> */}

        <div className="cards">
          {camps === null ? (
            <div>No data avaiable.... </div>
          ) : (
            camps.map((camp) => (
              <Card
                key={camp.id}
                cardImg={camp.cardImg}
                title={camp.title}
                para={camp.para}
                btn="View Campground"
              />
            ))
          )}
        </div>

        <footer>
          <NavLink to="/">
            <img src={Logo} alt="" />
          </NavLink>
        </footer>
      </div>
    </div>
  );
};

export default Camps;
