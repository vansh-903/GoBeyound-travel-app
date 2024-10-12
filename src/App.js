
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home'; 
import Header from './components/common/header/header';
import Footer from './components/common/footer/footer';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import ItineraryForm from './components/ItineraryForm';
import Navbar from './components/Navbar';
import { getDatabase,set, ref } from 'firebase/database';
import {app} from "./firebase"

const aa = getDatabase(app);

function App() {

  const putData = () =>{
    set(ref(aa,"users/Vansh"),{
      id: 1,
      name: "Vansh",
      age: 21
    });
  };

  return (
    <div>
      <div>
      {/* <Navbar/> */}
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-itinerary" element={<ItineraryForm />} />
      </Routes>
      <Footer />
    </div>
    <div>
      <button onClick={putData} >PutData</button>
    </div>
    </div>
  );
}

export default App;
