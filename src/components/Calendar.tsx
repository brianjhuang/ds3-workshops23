import { useEffect, useState } from "react";
import "semantic-ui-css/semantic.min.css";

import { Card, Dropdown, Placeholder } from "semantic-ui-react";
import LastWorkshop from "./LastWorkshop";
import Host from "./Host";
import NextWorkshop from "./NextWorkshop";
import workshops from "../workshops.json";
import options from "../options.json";
import { CURRENT_WORKSHOP } from "../constants";
import UnderConstruction from "./UnderConstruction";

function Calendar() {
  return (
    <>
      {" "}
      <h3>Register for winter workshops <a href = "https://oq2voqd6dmx.typeform.com/to/IUBZn0O7">here!</a></h3>
      <iframe
        src="https://calendar.google.com/calendar/embed?src=c_6a154893689d6a0906f6311d88adf4ca5c125aa6de0dc09e95375593071ff40b%40group.calendar.google.com&ctz=America%2FLos_Angeles"
        width="800"
        height="600"
        scrolling="no"
      ></iframe>
    </>
  );
}

export default Calendar;
