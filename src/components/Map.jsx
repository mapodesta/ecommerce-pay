import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

export default function Map({ lat, lon }) {
  const defaultCenter = [lat, lon];
  return (
    <MapContainer center={defaultCenter} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={defaultCenter} />
    </MapContainer>
  );
}
