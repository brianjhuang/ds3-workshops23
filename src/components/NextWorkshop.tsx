import React from "react";
import { useEffect, useState } from "react";
import logo from "./logo.svg";

import { Card, Embed, Dropdown, Button, Icon } from "semantic-ui-react";

type NextWorkshopProps = {
  title: string;
  date: string;
  sign_up: string;
};

function NextWorkshop(props: NextWorkshopProps) {
  return (
    <Card.Content>
      <h4>Next Up:</h4>
      <p>
        <b>{props.title}</b>
        <br></br>
        <i>{props.date}</i>
      </p>
      <a href={props.sign_up}>Sign Up Here!</a>
    </Card.Content>
  );
}

export default NextWorkshop;
