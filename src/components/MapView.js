import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./MapView.css";
import { IconLocation } from "../components/iconLocation";

const MapView = () => {
  return (
    <>
      <h1>Acercate a nuestra oficina</h1>
      <div className="ubicacion">
        <MapContainer
          center={{ lat: "-32.94731", lng: "-68.859846" }}
          zoom={14}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker
            position={{ lat: "-32.94731", lng: "-68.859846" }}
            icon={IconLocation}
          />
        </MapContainer>
      </div>
    </>
  );
};

export default MapView;
