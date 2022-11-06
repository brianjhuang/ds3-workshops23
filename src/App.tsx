import React from "react";
import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "semantic-ui-css/semantic.min.css";

import { Card, Embed, Dropdown } from "semantic-ui-react";

function App() {
  const options = [
    { key: "IntroToPP", text: "Intro to Python/Pandas", value: "IntroToPP" },
    { key: "NLP", text: "Natural Language Processing", value: "NLP" },
  ];

  return (
    <div>
      <div className="parent-div">
        <div>
          <Card>
            <Card fluid color="orange" header="Missed the last workshop?" />
            <Card.Content>
              <Card.Header>Introduction to Python and Pandas</Card.Header>
              <Card.Meta>
                <span className="date">Hosted on November 4th, 2022</span>
              </Card.Meta>
              <Embed
                id="dQw4w9WgXcQ"
                placeholder="\images\thumbnail.jpg"
                source="youtube"
              ></Embed>
              <Card.Description>
                Copy description from Notion later...
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <p>Next Up: Natural Language Processing November 9th, 2022</p>
              <a href = "https://ds3.ucsd.edu/events.html">Sign Up Here!</a>
            </Card.Content>
          </Card>

          <Dropdown
            placeholder="Find another workshop"
            closeOnEscape
            selection
            clearable
            options={options}
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
