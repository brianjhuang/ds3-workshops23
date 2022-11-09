import React from "react";
import { useEffect, useState } from "react";
import logo from "./logo.svg";

import { Card, Embed, Dropdown, Button, Icon } from "semantic-ui-react";

type HostProps = {
  button_type: any;
  url: string;
  host_name: string;
};

function Host(props: HostProps) {
  return (
    <Button
      href={props.url}
      compact
      color={props.button_type}
      size="mini"
    >
      <Icon name={props.button_type} /> {props.host_name}
    </Button>
  );
}

export default Host;