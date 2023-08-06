// App.js
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { ClockData } from "./new ";

const getTimeByTimeZone = (timeZone) => {
  const options = {
    timeZone: timeZone,
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  return new Date().toLocaleString("en-US", options);
};

const WorldMap = ({
  latitude,
  longitude,
  zoomLevel,
  location,
  currentTime,
}) => {
  useEffect(() => {
  }, [location]);
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={zoomLevel}
      style={{ height: "500px" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[latitude, longitude]}>
        <Popup>
          <storng>{location}</storng>
          <p>{currentTime}</p>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

const Clock = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [location, setLocation] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const ZoomLevel = 10;
  useEffect(() => {
    const CurrentLocation =
      location === "" || undefined ? "Asia/Kolkata" : location;
    console.log(CurrentLocation);
    const interval = setInterval(() => {
      setCurrentTime(getTimeByTimeZone(CurrentLocation));
    }, 1000);

    return () => clearInterval(interval);
  }, [location]);
  //   const latitude = 40.7128; // New York City latitude
  //   const longitude = -74.006; // New York City longitude
    // const zoomLevel = 10;
  const handleChange = (e) => {
    const { value } = e.target;
    setLocation(value);
    ClockData &&
      ClockData?.map((item) => {
        if (item.location === location) {
          setLatitude(item.latitude);
          setLongitude(item.longitude);
        }
        return null;
      });
  };
  return (
    <div>
      <h1>World Map Clock</h1>
      <select name="location" onChange={(e) => handleChange(e)}>
        {ClockData &&
          ClockData?.map((item, index) => {
            return (
              <option key={index} value={item.location}>
                {item.Name}
              </option>
            );
          })}
      </select>

      <>
        <strong>{Location}</strong>
        <br />
        Current Time: {currentTime}
      </>
      <WorldMap
        location={location}
        latitude={latitude}
        longitude={longitude}
        zoomLevel={ZoomLevel}
        currentTime={currentTime}
      />
    </div>
  );
};

export default Clock;
