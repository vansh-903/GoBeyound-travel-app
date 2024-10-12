// src/components/SearchItineraries.js
import { useState } from 'react';
import searchItineraries from '../services/itinerary/searchItineraries';

const SearchItineraries = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const data = await searchItineraries(searchTerm);
    setResults(data);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by destination or activity"
        />
        <button type="submit">Search</button>
      </form>

      <ul>
        {results.map((itinerary, index) => (
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

export default SearchItineraries;
