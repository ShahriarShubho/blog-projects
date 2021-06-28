import React from "react";
import Blogs from "../Blogs/Blogs";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="feature-image">
        <div className="feature-text">
          <h1 className="heading">Welcome to the blog site </h1>
        </div>
      </div>
      <Blogs />
    </div>
  );
};

export default Home;
