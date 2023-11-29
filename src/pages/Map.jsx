import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
  const mapContainerStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '20px'
  };

  const locations = [
    { name: 'Seneca Newnham Campus', position: { lat: 43.796064317162404, lng: -79.34858433530803 }, address: '1750 Finch Ave E, North York, ON M2J 2X5' },
    { name: 'Seneca Markham Campus', position: { lat: 43.850033105714054, lng: -79.36710996197064 }, address: '8 The Seneca Way, Markham, ON L3R 5Y1' },
    { name: 'Seneca King Campus', position: { lat: 43.95435741446387, lng: -79.51980213157469 }, address: '13990 Dufferin St, King City, ON L7B 1B3' },
  ];

  const [selectedLocation, setSelectedLocation] = useState(null);
  const [currentPosition, setCurrentPosition] = useState(null);

  useEffect(() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentPosition({ lat: latitude, lng: longitude });
      },
      (error) => {
        console.error('Error getting current location:', error);
      }
    );
  } else {
    alert('Geolocation is not supported by your browser');
  }
}, []);

  const calculateDistance = (coord1, coord2) => {
    const R = 6371; // Earth radius in kilometers
    const dLat = (coord2.lat - coord1.lat) * (Math.PI / 180);
    const dLon = (coord2.lng - coord1.lng) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(coord1.lat * (Math.PI / 180)) * Math.cos(coord2.lat * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance.toFixed(2); // Round to 2 decimal places
  };

  const [selectedSpot, setSelectedSpot] = useState(null);
  const [isLocationConfirmed, setIsLocationConfirmed] = useState(false);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);

  const handleSelectSpot = (index) => {
    const location = locations[index];
    setSelectedSpot(location);
    setIsLocationConfirmed(false); // Reset confirmation when selecting a new spot
  };

  const handleSelectLocation = () => {
    setIsLocationConfirmed(true);
  };
  const handleConfirmLocation = () => {
    setIsLocationConfirmed(true);
    window.location.href = "/cart";
  };

  const resetButtonStyles = () => {
    setSelectedSpot(null);
    setSelectedButtonIndex(null);
  };

  return (
    <div className="flex h-screen">
      <div className="w-2/3 h-full relative">
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={selectedLocation ? 15 : 10}
            center={selectedLocation ? selectedLocation.position : (currentPosition || { lat: 43.850033105714054, lng: -79.36710996197064 })}
          >
            {locations.map((location, index) => (
              <Marker
                key={index}
                position={location.position}
                onClick={() => setSelectedLocation(location)}
              />
            ))}
            {currentPosition && (
              <Marker
                position={currentPosition}
                icon={{
                  path: window.google.maps.SymbolPath.CIRCLE,
                  scale: 8,
                  fillColor: '#4285F4',
                  fillOpacity: 1,
                  strokeWeight: 1,
                }}
              />
            )}
          </GoogleMap>
        </LoadScript>
      </div>
      <div className='w-1/3 h-full p-4 bg-gray-100'>
        <div className="grid grid-rows-6 grid-flow-col gap-4">
          {locations.map((location, index) => (
            <button
              key={index}
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg ${selectedSpot === location ? 'border-2 border-yellow-500' : ''} ${selectedButtonIndex === index ? 'bg-green-500' : ''}`}
              onClick={() => {
                handleSelectSpot(index);
                setSelectedLocation(location);
                setSelectedButtonIndex(index);
              }}
            >
              {location.name} - {currentPosition && calculateDistance(currentPosition, location.position)} km
            </button>
          ))}

          {/* Button to show all locations */}
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg'
            onClick={() => {
              setSelectedLocation(null);
              setSelectedSpot(null);
              resetButtonStyles(); // Reset styles for all buttons
            }}
          >
            Show All
          </button>

          {/* Select Spot Button */}
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg ${selectedSpot ? '' : 'cursor-not-allowed'}`}
            onClick={handleSelectLocation}
            disabled={!selectedSpot || isLocationConfirmed}
          >
            Select Spot
          </button>

          {/* Confirm Location Button */}
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg ${isLocationConfirmed ? '' : 'cursor-not-allowed'}`}
            onClick={handleConfirmLocation}
            disabled={!isLocationConfirmed}
          >
            Confirm Location
          </button>
        </div>

        {selectedSpot && (
          <div className='py-2'>
            <div style={{ backgroundColor: 'Red', padding: '10px', borderRadius: '8px' }}>
              <p className='text-white font-bold'>{selectedSpot.address}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Map;
