// src/services/itinerary/saveItinerary.js
import { db } from '../../firebase'; // Adjust path if needed
import { collection, addDoc } from 'firebase/firestore';

const saveItinerary = async (itinerary) => {
  try {
    const docRef = await addDoc(collection(db, 'itineraries'), itinerary);
    console.log('Itinerary saved with ID:', docRef.id);
  } catch (error) {
    console.error('Error saving itinerary:', error);
  }
};

export default saveItinerary;
