import React from "react";
import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "semantic-ui-css/semantic.min.css";

import { Card, Dropdown } from "semantic-ui-react";
import LastWorkshop from "./components/LastWorkshop";
import Host from "./components/Host";
import NextWorkshop from "./components/NextWorkshop";
import workshops from "./workshops.json";
import options from "./options.json";
import { CURRENT_WORKSHOP } from "./constants";

function App() {
  const [selectedWorkshop, setSelectedWorkshop] =
    useState<any>(CURRENT_WORKSHOP);
  const [data, setData] = useState<any>(workshops);
  const [workshop, setWorkshop] = useState<any>(data[selectedWorkshop]);
  const [nextWorkshop, setNextWorkshop] = useState<any>(
    data[workshop.next_workshop]
  );

  // Update data on re-render
  useEffect(() => {
    setWorkshop(data[selectedWorkshop]);
    setNextWorkshop(data[data[selectedWorkshop].next_workshop]);
  }, [selectedWorkshop]);

  return (
    <div>
      <div className="parent-div">
        <div className="child-div">
          <Card>
            <LastWorkshop
              title={workshop.title}
              date={workshop.date}
              link_id={workshop.link_id}
              image_placeholder={workshop.image_placeholder}
              slide_links={workshop.slide_links}
              embed_desc={workshop.embed_desc}
            ></LastWorkshop>

            {nextWorkshop.hosts.length === 0 ? (
              <></>
            ) : (
              <Card.Content extra>
                {nextWorkshop.hosts.length === 0 ? <></> : <h4>Hosts</h4>}
                {workshop.hosts.map((value: any) => {
                  return (
                    <Host
                      button_type={value.button_type}
                      url={value.url}
                      host_name={value.host_name}
                    ></Host>
                  );
                })}
              </Card.Content>
            )}

            <NextWorkshop
              title={nextWorkshop.title}
              date={nextWorkshop.date}
              sign_up="https://ds3.ucsd.edu/events.html"
            ></NextWorkshop>

            {nextWorkshop.hosts.length === 0 ? (
              <></>
            ) : (
              <Card.Content extra>
                <h4>Hosts</h4>
                {nextWorkshop.hosts.map((value: any) => {
                  return (
                    <Host
                      button_type={value.button_type}
                      url={value.url}
                      host_name={value.host_name}
                    ></Host>
                  );
                })}
              </Card.Content>
            )}
          </Card>

          <Dropdown
            placeholder="Find another workshop"
            closeOnEscape
            selection
            clearable
            defaultValue={selectedWorkshop}
            options={options}
            style={{ width: "100%" }}
            onChange={(e: any, { value }: any) => setSelectedWorkshop(value)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
