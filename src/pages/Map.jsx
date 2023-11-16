import React, { useState } from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';

const Map = () => {
  const mapContainerStyle = {
    width: '80%',
    height: '400px',
    borderRadius: '20px'
  };

  const locations = [
    { name: 'Seneca Newnham Campus', position: { lat: 43.796064317162404, lng: -79.34858433530803 }, address: '1750 Finch Ave E, North York, ON M2J 2X5' },
    { name: 'Seneca Markham Campus', position: { lat: 43.850033105714054, lng: -79.36710996197064 }, address: '8 The Seneca Way, Markham, ON L3R 5Y1' },
    { name: 'Seneca King Campus', position: { lat: 43.95435741446387, lng: -79.51980213157469 }, address: '13990 Dufferin St, King City, ON L7B 1B3' },
  ];

  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationClick = (index) => {
    const location = locations[index];
    setSelectedLocation(location);
  };

  const handleShowAllClick = () => {
    setSelectedLocation(null);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        paddingBottom: "20px",
      }}
    >
      <h1 className='font-bold pt-4 text-2xl font-serif'>Select The Location</h1>
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={selectedLocation ? 15 : 10}
          center={selectedLocation ? selectedLocation.position : { lat: 43.850033105714054, lng: -79.36710996197064 }}
        >
          {locations.map((location, index) => (
            <MarkerF
              key={index}
              position={location.position}
              onClick={() => handleLocationClick(index)}
            />
          ))}
        </GoogleMap>
      </LoadScript>

      <div className="grid grid-rows-4 grid-flow-col gap-4">
        {locations.map((location, index) => (
          <button
            key={index}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg'
            onClick={() => handleLocationClick(index)}
          >
            {location.name}
          </button>
        ))}
        
        {/* Button to show all locations */}
        <button
          className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg'
          onClick={handleShowAllClick}
        >
          Show All
        </button>
      </div>

      {selectedLocation && (
        <div>
          <div style={{ backgroundColor: 'Red', padding: '10px', borderRadius: '8px' }}>
            <p className='text-white font-bold'>{selectedLocation.address}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Map;
