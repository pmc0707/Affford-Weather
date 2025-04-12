import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import axios from 'axios';

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
        <Header/>
        <Navbar />
        
        <div style={{ textAlign: 'center', marginTop: 15 }}>
          <h1 style={{color:'#3498db'}}>Weather Dashboard 🌤️</h1>
          <SearchBar onSearch={handleSearch} />
          {weather && <WeatherCard data={weather} />}
        </div>
      </div>
    );
    
}

export default App;
