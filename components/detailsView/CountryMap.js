import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
const CountryMap = ({ latLong, countryName }) => {
  const icon = L.icon({ iconUrl: "/mapAssets/marker-icon.png" });

  const [zoom, setZoom] = useState(5);
  const position = latLong;
  useEffect(() => {}, [zoom]);
  return (
    <MapContainer
      center={position}
      zoom={zoom}
      scrollWheelZoom={false}
      className="rounded-2xl"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={icon}>
        <Popup>{countryName}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default CountryMap;
