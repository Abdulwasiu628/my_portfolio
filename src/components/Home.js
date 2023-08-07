import React, { useState, useEffect } from "react";
import "../stylesheets/home.css";

export const Home = () => {
  const [text, setText] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [fullText, setFullText] = useState("Shittu Wasiu Damilare");
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 400);
    }
  }, [fullText, index, text]);

  return (
    <header id="home">
      <div className="intro">
        <div className="overlay">
          <div className="homeContainer">
            <div className="nameIntro">
              <h1>Hello My name is</h1>
            </div>
            <div className="fullName">
              <p>{text}</p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
