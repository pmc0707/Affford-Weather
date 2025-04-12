import React from 'react';

function About() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '40px',
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.12)',
        borderRadius: '16px',
        padding: '40px',
        maxWidth: '900px',
        width: '100%',
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'Segoe UI, sans-serif',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.18)',
      }}>
        <h2 style={{
          fontSize: '2.8rem',
          marginBottom: '25px',
          color: '#00d4ff',
          fontWeight: 'bold',
          letterSpacing: '1px'
        }}>
          About Weatherify
        </h2>

        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '20px' ,color:'red'}}>
          Weatherify is a modern, responsive weather dashboard that delivers real-time weather data for cities across the globe.
        </p>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px',color:'red' }}>
          🔍 Powered by the <strong>OpenWeatherMap API</strong>, it shows you temperature, humidity, wind, and cloud coverage in a sleek, intuitive UI.
        </p>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px',color:'red' }}>
          💻 Built using the <strong>MERN stack</strong> (MongoDB, Express, React, Node), it's a practical example of combining modern technologies with third-party API integration.
        </p>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.8',color:'red' }}>
          ✈️ Whether you're planning a trip, dressing for the day, or just checking on your hometown — Weatherify gives you the info you need, beautifully and fast.
        </p>
      </div>
    </div>
  );
}

export default About;
