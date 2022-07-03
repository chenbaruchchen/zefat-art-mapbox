import React, { useRef, useEffect, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";

import mapboxgl from "mapbox-gl";

import "./map.css";
import MyPopUp from "./Popup";
import Map, { Marker, Popup } from "react-map-gl";

export default function App2() {
  const [popUpdData, setPopUpdData] = useState(null);

  let points = [1, 2, 3];
  return (
    //   const [lng, setLng] = useState(35.5109071343652);
    //   const [lat, setLat] = useState(32.96565066532857);
    //
    <Map
      initialViewState={{
        longitude: 35.50077022102684,
        latitude: 32.96614971634972,
        zoom: 14
      }}
      style={{ width: "100vw", height: "100vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken="pk.eyJ1IjoibWFwYm94Zm9yemVmYXQiLCJhIjoiY2w1MjlqbmwwMGRnbDNrbXlyZGViczNueSJ9.mZaIyeiaByvxFy44nq3gOg"
    >
      {points.map((point) => {
        return (
          <Marker
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              setPopUpdData(point);
            }}
            longitude={35.50077022102684 + point * 0.002}
            latitude={32.96614971634972}
            anchor="bottom"
          ></Marker>
        );
      })}

      {popUpdData && (
        <MyPopUp popUpdData={popUpdData} setPopUpdData={setPopUpdData} />
      )}
    </Map>
  );
}
