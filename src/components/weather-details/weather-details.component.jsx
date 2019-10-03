import React from "react";
import Row from "react-bootstrap/Row";
import WeatherBadge from "../weather-badge/weather-badge.component";
import { Tabs } from "@yazanaabed/react-tabs";
import { extractTime, kelvinToFehrenheit } from "../../utils";

const Tab = ({ children, number }) => (
  <Tabs.Tab id={`tab${number}`} title={`${number}`}>
    <Row style={{ marginTop: 20 }}>{children}</Row>
  </Tabs.Tab>
);

const WeatherDetails = ({ data }) => {
  const numbers = [];
  const { day } = extractTime(data[0].dt_txt);
  let prev = 0;
  data.map(list => {
    const { day } = extractTime(list.dt_txt);
    if (prev !== day) {
      numbers.push({ day });
    }
    prev = day;
  });
  const tags = numbers;
  console.log(tags);
  return (
    <Row>
      <Tabs
        activeTab={{
          id: `tab${day}`
        }}
      >
        {tags.map(tag => (
          <Tab number={tag.day} title={tag.day}>
            {data.map(list => {
              const { day } = extractTime(list.dt_txt);

              if (tag.day === day) {
                return (
                  <WeatherBadge
                    key={list.dt}
                    day={day}
                    weatherIcon={list.weather[0].icon}
                    high_temp={kelvinToFehrenheit(list.main.temp_max)}
                    low_temp={kelvinToFehrenheit(list.main.temp_min)}
                  />
                );
              }
            })}
          </Tab>
        ))}
      </Tabs>
    </Row>
  );
};

export default WeatherDetails;
