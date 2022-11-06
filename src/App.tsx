import React from "react";
import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "semantic-ui-css/semantic.min.css";

import { Card, Embed, Dropdown, Button, Icon } from "semantic-ui-react";

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
              <Embed id="dQw4w9WgXcQ" placeholder="" source="youtube"></Embed>
              <br></br>
              <a href = "https://github.com/KeaganBenson/DS3-Python-Pandas-Workshop">Slides</a>
              <Card.Description>
                The most important tools in a data scientist's toolkit. Join DS3
                for the first workshop of the year and learn the fundamentals of
                Python and Pandas.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <h4>Hosts</h4>
              <Button
                href="https://www.linkedin.com/in/keagan-benson-694395188"
                compact
                color="linkedin"
                size="mini"
              >
                <Icon name="linkedin" /> Keagan Benson
              </Button>
              <Button
                href="https://www.linkedin.com/in/radumanea"
                compact
                color="linkedin"
                size="mini"
              >
                <Icon name="linkedin" /> Radu Manea
              </Button>
            </Card.Content>
            <Card.Content>
              <h4>Next Up:</h4>
              <p>
                <b>Natural Language Processing </b>
                <br></br>
                <i>November 9th, 2022</i>
              </p>
              <a href="https://ds3.ucsd.edu/events.html">Sign Up Here!</a>
              <h4>Hosts</h4>
              <Button
                href="https://www.linkedin.com/in/koosha-jadbabaei/"
                compact
                color="linkedin"
                size="mini"
              >
                <Icon name="linkedin" /> Koosha Jadbabaei
              </Button>
              <Button
                href="https://www.linkedin.com/in/kylenero/"
                compact
                color="linkedin"
                size="mini"
              >
                <Icon name="linkedin" /> Kyle Nero
              </Button>
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
