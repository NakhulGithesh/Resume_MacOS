import React, { useState, useEffect } from "react";
import { useStore } from "~/stores";

type Location = {
  name: string;
  coordinates: { lat: number; lon: number };
};

// Location configuration
const locations: Location[] = [
  { name: 'Abu Dhabi, UAE', coordinates: { lat: 24.4539, lon: 54.3773 } },
  { name: 'Dubai, UAE', coordinates: { lat: 25.2048, lon: 55.2708 } },
  { name: 'Kottayam, India', coordinates: { lat: 9.5916, lon: 76.5222 } }
];

// Simplified weather components for integration
const WeatherBoard = ({ selectedLocation, dark }: { selectedLocation: Location, dark: boolean }) => {
  return (
    <div className={`weather-board p-4 ${dark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
      <h2 className="text-xl font-bold mb-4">Weather for {selectedLocation.name}</h2>
      <div className="text-center">
        <div className={`inline-block p-4 rounded-lg ${dark ? 'bg-gray-700' : 'bg-gray-100'}`}>
          <div className="text-4xl mb-2">☀️</div>
          <div className="text-lg">Sunny</div>
          <div className="text-2xl font-bold">32°C</div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {['Mon', 'Tue', 'Wed'].map((day, i) => (
          <div key={day} className={`p-2 rounded text-center ${dark ? 'bg-gray-700' : 'bg-gray-100'}`}>
            <div>{day}</div>
            <div>☀️</div>
            <div>30°C</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const QueryBoard = ({
  selectedLocation,
  setSelectedLocation,
  locations,
  dark
}: {
  selectedLocation: Location,
  setSelectedLocation: (location: Location) => void,
  locations: Location[],
  dark: boolean
}) => {
  return (
    <div className={`query-board p-4 border-b ${dark ? 'bg-gray-800 border-gray-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'}`}>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Weather</h1>
        <select
          value={selectedLocation.name}
          onChange={(e) => {
            const location = locations.find((l: Location) => l.name === e.target.value);
            if (location) setSelectedLocation(location);
          }}
          className={`px-3 py-1 rounded border ${dark ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
        >
          {locations.map((location: Location) => (
            <option key={location.name} value={location.name}>
              {location.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

const Weather = () => {
  const { dark } = useStore((state) => ({ dark: state.dark }));
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  return (
    <div className={`weather-app h-full flex flex-col ${dark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
      <QueryBoard
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        locations={locations}
        dark={dark}
      />
      <div className="flex-1 overflow-auto">
        <WeatherBoard selectedLocation={selectedLocation} dark={dark} />
      </div>
    </div>
  );
};

export default Weather;
