import "semantic-ui-css/semantic.min.css";

import { Card, Placeholder } from "semantic-ui-react";

function UnderConstruction() {
  return (
    <>
      <Card>
        {" "}
        <Card.Content>
          <Placeholder>
            <h1>Coming Soon!</h1>
          </Placeholder>
          <img
            src="https://media.tenor.com/d0VNnBZkSUkAAAAC/bongocat-banhammer.gif"
            style={{ width: "100%", maxWidth: "100%", maxHeight: "100%" }}
          ></img>
        </Card.Content>
      </Card>
    </>
  );
}

export default UnderConstruction;
