import { useEffect, useState } from "react";
import "semantic-ui-css/semantic.min.css";

import { Card, Dropdown } from "semantic-ui-react";
import LastWorkshop from "./LastWorkshop";
import Host from "./Host";
import NextWorkshop from "./NextWorkshop";
import workshops from "../workshops.json";
import options from "../options.json";
import { CURRENT_WORKSHOP } from "../constants";

function Home() {
  // States for what the workshop card holds
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
    <>
      {/* Our current workshop */}
      <Card>
        <LastWorkshop
          title={workshop.title}
          date={workshop.date}
          link_id={workshop.link_id}
          image_placeholder={workshop.image_placeholder}
          slide_links={workshop.slide_links}
          embed_desc={workshop.embed_desc}
        ></LastWorkshop>

        {/*If we have a next workshop render the card, otherwise we render nothing*/}
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

        {/*If we have a next workshop hosts render the card, otherwise we render nothing*/}
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
        style={{ width: "61.5%" }}
        onChange={(e: any, { value }: any) => setSelectedWorkshop(value)}
      />
    </>
  );
}

export default Home;
