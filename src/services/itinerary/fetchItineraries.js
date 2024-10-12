// src/services/itinerary/fetchItineraries.js
import { db } from '../../firebase'; // Adjust path if needed
import { collection, getDocs } from 'firebase/firestore';

const fetchItineraries = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'itineraries'));
    const itineraries = querySnapshot.docs.map((doc) => doc.data());
    return itineraries;
  } catch (error) {
    console.error('Error fetching itineraries:', error);
    return [];
  }
};

export default fetchItineraries;
