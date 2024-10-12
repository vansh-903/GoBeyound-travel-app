// src/services/itinerary/searchItineraries.js
import fetchItineraries from './fetchItineraries';

const searchItineraries = async (searchTerm) => {
  try {
    const itineraries = await fetchItineraries();
    return itineraries.filter((itinerary) =>
      itinerary.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
      itinerary.activities.some((activity) =>
        activity.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  } catch (error) {
    console.error('Error searching itineraries:', error);
    return [];
  }
};

export default searchItineraries;
