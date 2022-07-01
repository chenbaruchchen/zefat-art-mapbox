import React, { useRef, useEffect, useState } from "react";

import mapboxgl from "mapbox-gl";

import "./map.css";
// eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  "pk.eyJ1IjoibWFwYm94Zm9yemVmYXQiLCJhIjoiY2w1MjlqbmwwMGRnbDNrbXlyZGViczNueSJ9.mZaIyeiaByvxFy44nq3gOg";

export default function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(35.5109071343652);
  const [lat, setLat] = useState(32.96565066532857);
  const [zoom, setZoom] = useState(13);

  // 32.96565066532857, 35.5109071343652
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}
