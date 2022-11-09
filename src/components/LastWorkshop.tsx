import React from "react";
import { useEffect, useState } from "react";
import logo from "./logo.svg";

import {
  Card,
  Embed,
  Dropdown,
  Button,
  Icon,
  Placeholder,
} from "semantic-ui-react";

type LastWorkshopProps = {
  title: string;
  date: string;
  link_id: string;
  image_placeholder: string;
  slide_links: string;
  embed_desc: string;
};

function LastWorkshop(props: LastWorkshopProps) {
  return (
    <Card.Content>
      <Card.Header>{props.title}</Card.Header>
      <Card.Meta>
        {props.date !== "" ? (
          <span className="date">Hosted on {props.date}</span>
        ) : (
          <></>
        )}
      </Card.Meta>
      {props.link_id === "" ? (
        <Placeholder>
          <img
            src="https://seranking.com/blog/wp-content/uploads/2021/01/404_01-min.jpg"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          ></img>
        </Placeholder>
      ) : props.link_id === "uploading" ? (
        <Placeholder>
          <img
            src="https://i.imgflip.com/12pstx.jpg"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          ></img>
        </Placeholder>
      ) : (
        <Embed
          id={props.link_id}
          placeholder={process.env.PUBLIC_URL + props.image_placeholder}
          source="youtube"
        ></Embed>
      )}
      <br></br>
      {props.slide_links !== "" ? (
        <a href={props.slide_links}>Slides</a>
      ) : (
        <></>
      )}
      <Card.Description>{props.embed_desc}</Card.Description>
    </Card.Content>
  );
}

export default LastWorkshop;
