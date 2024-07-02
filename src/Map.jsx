import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ initialCoords }) => {
  const [coords, setCoords] = useState(initialCoords);
  const [zoomLevel, setZoomLevel] = useState(8); // Default zoom level

  // Update marker position and map center when coords change
  useEffect(() => {
    setCoords(initialCoords);
  }, [initialCoords]);

  // Update map viewport to center on the marker
  const mapRef = React.useRef();
  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView(coords, zoomLevel);
    }
  }, [coords, zoomLevel]);

  return (
    <div>
      <MapContainer center={coords} zoom={zoomLevel} style={{ height: '400px', width: '100%' }} ref={mapRef}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coords}>
          <Popup>
            A pointer here.
          </Popup>
        </Marker>
      </MapContainer>
      <div style={{ marginTop: '10px' }}>
        <strong>Coordinates:</strong> {coords[0]}, {coords[1]}
      </div>
    </div>
  );
};

export default Map;
