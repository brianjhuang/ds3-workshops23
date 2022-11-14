import React from "react";
import { useEffect, useState } from "react";
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
      <Card.Header>{props.title === "" ? "Select a Workshop!" : props.title}</Card.Header>
      <br></br>
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
            src="https://c.tenor.com/E2iOZHiKrfAAAAAC/it-hasnt-happened-yet-not-yet.gif"
            style={{width: "100%", maxWidth: "100%", maxHeight: "100%" }}
          ></img>
        </Placeholder>
      ) : props.link_id === "lost" ? (
        <div style = {{textAlign:"center"}}>
          <Placeholder>
            <img
              src="https://thumbs.gfycat.com/AdoredPerfectHousefly-size_restricted.gif"
              style={{ width: "100%", maxWidth: "100%", maxHeight: "100%" }}
            ></img>
          </Placeholder>
          <i >You're a little lost</i>
        </div>
      ): props.link_id === "uploading" ? (
        <div>
          <Placeholder>
            <img
              src="https://media.tenor.com/pOv7SnZx7xAAAAAM/upload-cat.gif"
              style={{ width: "100%", maxWidth: "100%", maxHeight: "100%" }}
            ></img>
          </Placeholder>
          <i>We're still uploading! Check back later :D</i>
        </div>
      ) : (
        <Embed
          id={props.link_id}
          placeholder={process.env.PUBLIC_URL + props.image_placeholder}
          source="youtube"
        ></Embed>
      )}
      <Card.Description>{props.embed_desc}</Card.Description>
      <br></br>
      {props.slide_links !== "" ? (
        <a href={props.slide_links}>Slides</a>
      ) : (
        <></>
      )}
    </Card.Content>
  );
}

export default LastWorkshop;
