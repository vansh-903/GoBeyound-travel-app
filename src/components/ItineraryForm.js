// src/components/ItineraryForm.js
import { useState } from 'react';
import './ItineraryForm.css'; 
import saveItinerary from '../services/itinerary/saveItinerary';  // Import the service to save itineraries

const ItineraryForm = () => {
  const [destination, setDestination] = useState('');
  const [activities, setActivities] = useState('');
  const [date, setDate] = useState('');
  const [tripType, setTripType] = useState('adventure');

  const handleSave = async (e) => {
    e.preventDefault();
    const itinerary = {
      destination,
      activities: activities.split(',').map(item => item.trim()), // Split activities by commas
      date,
      type: tripType,
    };
    await saveItinerary(itinerary);  // Save the itinerary to Firebase
    alert('Itinerary saved successfully!');
    setDestination('');
    setActivities('');
    setDate('');
    setTripType('adventure');
  };

  return (
    <form onSubmit={handleSave}>
      <input
        type="text"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        placeholder="Destination"
        required
      />
      <input
        type="text"
        value={activities}
        onChange={(e) => setActivities(e.target.value)}
        placeholder="Activities (comma-separated)"
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <select value={tripType} onChange={(e) => setTripType(e.target.value)}>
        <option value="adventure">Adventure</option>
        <option value="leisure">Leisure</option>
        <option value="work">Work</option>
      </select>
      <button type="submit">Save Itinerary</button>
    </form>
  );
};

export default ItineraryForm;
