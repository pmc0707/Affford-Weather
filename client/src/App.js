import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/contact';
import axios from 'axios';

function Home({ weather, handleSearch }) {
  return (
    <div style={{ textAlign: 'center', marginTop: 15 }}>
      <h1 style={{ color: '#3498db' }}>Weather Dashboard 🌤️</h1>
      <SearchBar onSearch={handleSearch} />
      {weather && <WeatherCard data={weather} />}
    </div>
  );
}

function App() {
  const [weather, setWeather] = useState(null);

  const handleSearch = async (city) => {
    try {
      const res = await axios.get(`http://localhost:5000/weather/${city}`);
      setWeather(res.data);
    } catch (err) {
      alert("City not found!");
    }
  };

  return (
    <Router>
      <div
        className="App"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1501973801540-537f08ccae7b?auto=format&fit=crop&w=1350&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          color: 'white',
        }}
      >
        <Header />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home weather={weather} handleSearch={handleSearch} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
