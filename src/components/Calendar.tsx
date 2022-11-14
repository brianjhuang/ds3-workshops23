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
    <UnderConstruction></UnderConstruction>
  );
}

export default Calendar;
