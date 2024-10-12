// src/components/ItineraryList.js
import { useEffect, useState } from 'react';
import fetchItineraries from '../services/itinerary/fetchItineraries';

const ItineraryList = () => {
  const [itineraries, setItineraries] = useState([]);

  useEffect(() => {
    const getItineraries = async () => {
      const data = await fetchItineraries();
      setItineraries(data);
    };
    getItineraries();
  }, []);

  return (
    <div>
      <h2>Saved Itineraries</h2>
      <ul>
        {itineraries.map((itinerary, index) => (
          <li key={index}>
            <h3>{itinerary.destination}</h3>
            <p>{itinerary.activities.join(', ')}</p>
            <p>Date: {itinerary.date}</p>
            <p>Type: {itinerary.type}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItineraryList;
