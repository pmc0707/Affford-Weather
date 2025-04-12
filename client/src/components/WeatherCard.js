import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureHigh, faTint, faWind, faCloudSun, faCloudRain } from '@fortawesome/free-solid-svg-icons';

function WeatherCard({ data }) {
  return (
    <div style={{
      background: 'rgba(255, 255, 255, 0.9)',
      borderRadius: '16px',
      padding: '30px 20px',
      width: '80%',
      maxWidth: '1000px',
      margin: '30px auto',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      color: '#333'
    }}>
      <h2>{data.name}</h2>
      <p>{data.weather[0].description}</p>

      {/* Using Flexbox for row-wise layout */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '20px', 
        padding: '20px 0',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {/* Temperature */}
        <div style={{
          background: '#f0f8ff',
          padding: '15px',
          borderRadius: '10px',
          width: '150px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          textAlign: 'center'
        }}>
          <FontAwesomeIcon icon={faTemperatureHigh} style={{ color: '#e67e22', fontSize: '28px' }} />
          <p style={{ marginTop: '10px' }}>{data.main.temp}°C</p>
        </div>

        {/* Humidity */}
        <div style={{
          background: '#e6f7ff',
          padding: '15px',
          borderRadius: '10px',
          width: '150px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          textAlign: 'center'
        }}>
          <FontAwesomeIcon icon={faTint} style={{ color: '#3498db', fontSize: '28px' }} />
          <p style={{ marginTop: '10px' }}>{data.main.humidity}%</p>
        </div>

        {/* Wind Speed */}
        <div style={{
          background: '#f7f7f7',
          padding: '15px',
          borderRadius: '10px',
          width: '150px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          textAlign: 'center'
        }}>
          <FontAwesomeIcon icon={faWind} style={{ color: '#95a5a6', fontSize: '28px' }} />
          <p style={{ marginTop: '10px' }}>{data.wind.speed} m/s</p>
        </div>

        {/* Cloud Coverage */}
        <div style={{
          background: '#fff3e6',
          padding: '15px',
          borderRadius: '10px',
          width: '150px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          textAlign: 'center'
        }}>
          <FontAwesomeIcon icon={faCloudSun} style={{ color: '#f39c12', fontSize: '28px' }} />
          <p style={{ marginTop: '10px' }}>{data.clouds.all}% Cloud </p>
        </div>

        {/* Rain */}
        <div style={{
          background: '#e6ffed',
          padding: '15px',
          borderRadius: '10px',
          width: '150px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          textAlign: 'center'
        }}>
          <FontAwesomeIcon icon={faCloudRain} style={{ color: '#16a085', fontSize: '28px' }} />
          <p style={{ marginTop: '10px' }}>{data.rain ? `${data.rain['1h']} mm` : 'No Rain'}</p>
        </div>

        {/* Pressure */}
        <div style={{
          background: '#f7f7f7',
          padding: '15px',
          borderRadius: '10px',
          width: '150px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          textAlign: 'center'
        }}>
          <FontAwesomeIcon icon={faCloudSun} style={{ color: '#9b59b6', fontSize: '28px' }} />
          <p style={{ marginTop: '10px' }}>{data.main.pressure} hPa</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
