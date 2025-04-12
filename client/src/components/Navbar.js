
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloud, faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons';

function WeatherCarousel() {
  return (
    <div
      id="weatherCarousel"
      className="carousel slide m-5"
      data-bs-ride="carousel"
      style={{ height: '230px', backgroundColor: 'rgba(125, 119, 119, 0.01)', borderRadius: '1rem' }}

    >
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#weatherCarousel" data-bs-slide-to="0" className="active bg-secondary" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#weatherCarousel" data-bs-slide-to="1" className="bg-secondary" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#weatherCarousel" data-bs-slide-to="2" className="bg-secondary" aria-label="Slide 3"></button>
      </div>

      <div className="carousel-inner rounded-5">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <div className="d-flex justify-content-between align-items-center px-5" style={{ height: '230px', backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '1rem' }}>
            <div>
              <h2 className="text-light display-2"><strong>23°C</strong></h2>
              <p className="text-light mb-0">Mathura, Uttar Pradesh</p>
            </div>
            <div>
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu3.webp" alt="weather" width="150px" />
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <div className="d-flex justify-content-around text-center align-items-center px-5" style={{ height: '230px', backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '1rem' }}>
            {[
              { temp: '21°C', icon: faSun, time: '12:00', meridiem: 'PM' },
              { temp: '2°C', icon: faSun, time: '1:00', meridiem: 'PM' },
              { temp: '20°C', icon: faCloud, time: '2:00', meridiem: 'PM' },
              { temp: '19°C', icon: faCloud, time: '3:00', meridiem: 'PM' },
              { temp: '18°C', icon: faCloudShowersHeavy, time: '4:00', meridiem: 'PM' },
            ].map((item, idx) => (
              <div key={idx} className="flex-column text-light">
                <p className="small"><strong>{item.temp}</strong></p>
                <FontAwesomeIcon icon={item.icon} size="2x" style={{ color: '#fff', marginBottom: '10px' }} />
                <p className="mb-0"><strong>{item.time}</strong></p>
                <p className="mb-0 text-muted" style={{ fontSize: '.65rem' }}>{item.meridiem}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <div className="d-flex justify-content-around text-center align-items-center px-5" style={{ height: '230px', backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '1rem' }}>
            {[
              { temp: '21°C', icon: faSun, day: 'Mon' },
              { temp: '20°C', icon: faSun, day: 'Tue' },
              { temp: '16°C', icon: faCloud, day: 'Wed' },
              { temp: '17°C', icon: faCloud, day: 'Thu' },
              { temp: '18°C', icon: faCloudShowersHeavy, day: 'Fri' },
            ].map((item, idx) => (
              <div key={idx} className="flex-column text-light">
                <p className="small"><strong>{item.temp}</strong></p>
                <FontAwesomeIcon icon={item.icon} size="2x" style={{ color: '#fff', marginBottom: '10px' }} />
                <p className="mb-0"><strong>{item.day}</strong></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCarousel;
