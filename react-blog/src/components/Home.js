import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <h1 className="home-heading">Home</h1>

      <hr/>

      <div className="introduction">

        <h3 className="intro">Introduction</h3>

        <p>
          Hello, and welcome to my site!
          My name is Carter, and I am a student in computer science,<br/> but this page isn't <Link to="/about">about me</Link>.
          This page is an overview of different things that<br/> you can click on to try out 
          new things that I find interesting.
        </p>  

        <hr/>
      </div>

      <div className="social-media-container"> 

        <h3 className="social-media">Social Media</h3>

        <div className="social-media">
          <h4 className="social-heads">LinkedIn</h4>
          <a href="https://www.linkedin.com/in/carter-maloney-32715924b/">My LinkedIn</a>

          <h4 className="social-heads">GitHub</h4>
          <a href="https://github.com/DrOneMaloney">My GitHub</a>

          <h4 className="social-heads">X</h4>
          <a href="https://twitter.com/The_Dr_One">My X Profile</a>

          <h4 className="social-heads">Youtube</h4>
          <a href="https://www.youtube.com/@TheDrOneCarter">My Youtube</a>

        </div>

        <hr/>


      </div>
    </div>
  );
}

export default Home;

