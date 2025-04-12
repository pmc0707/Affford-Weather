import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '30px' }}>
      <input
        type="text"
        value={city}
        placeholder="Enter city name"
        onChange={(e) => setCity(e.target.value)}
        style={{
          padding: '12px 20px',
          borderRadius: '30px',
          border: '1px solid #ccc',
          width: '250px',
          marginRight: '10px',
          fontSize: '16px',
          outline: 'none',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}
      />
      <button
        type="submit"
        style={{
          padding: '12px 20px',
          borderRadius: '30px',
          border: 'none',
          backgroundColor: '#3498db',
          color: '#fff',
          fontSize: '16px',
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          transition: 'background 0.3s ease'
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#2980b9')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#3498db')}
      >
        Get Weather
      </button>
    </form>
  );
}

export default SearchBar;
