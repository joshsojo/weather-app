import React from "react";
import Row from "react-bootstrap/Row";
import WeatherBadge from "../weather-badge/weather-badge.component";
import { Tabs } from "@yazanaabed/react-tabs";
import SwitchMetric from "../../components/switch-metric/switch-metric.component";
import { extractTime, getDay, getTime } from "../../utils";

const Tab = ({ children, number }) => (
  <Tabs.Tab id={`tab${number}`} title={`${number}`}>
    <Row style={{ marginTop: 20 }}>{children}</Row>
  </Tabs.Tab>
);

const WeatherDetails = ({ data }) => {
  const numbers = [];
  let index = 0;
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
      <Row>
        <SwitchMetric />
      </Row>
      <Tabs
        activeTab={{
          id: `tab${getDay(index)}`
        }}
      >
        {tags.map(tag => (
          <Tab key={tag.day} number={getDay(index)} title={getDay()}>
            {(index = index + 1)}
            {data.map(list => {
              const { day, hour, min } = extractTime(list.dt_txt);
              if (tag.day === day) {
                return (
                  <WeatherBadge
                    key={list.dt}
                    day={getTime(hour)}
                    weatherIcon={list.weather[0].icon}
                    description={list.weather[0].description}
                    high_temp={list.main.temp_max}
                    low_temp={list.main.temp_min}
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
