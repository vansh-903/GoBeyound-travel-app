
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home'; 
import Header from './components/common/header/header';
import Footer from './components/common/footer/footer';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
