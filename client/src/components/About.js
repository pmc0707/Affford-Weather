import React from 'react';

function About() {
  return (
    <div style={{
      padding: '40px',
      maxWidth: '800px',
      margin: '60px auto',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '12px',
      color: '#fff',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      backdropFilter: 'blur(5px)',
    }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>About Weather Dashboard</h2>
      <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
        The Weather Dashboard is a simple and elegant application that allows you to quickly get up-to-date weather information for any city around the world.
        Powered by the OpenWeatherMap API, it provides details like temperature, humidity, wind speed, and cloud conditions.
      </p>
      <p style={{ fontSize: '1.1rem', marginTop: '20px' }}>
        This app is built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and serves as a practical example of integrating APIs into modern web applications.
      </p>
      <p style={{ fontSize: '1.1rem', marginTop: '20px' }}>
        Whether you're planning your next trip or just curious about the weather in another city, this dashboard gives you the answers in an easy-to-use interface.
      </p>
    </div>
  );
}

export default About;
