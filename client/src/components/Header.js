import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        🌦️ Weatherify
      </div>
      <ul style={styles.navLinks}>
        <li>
          <Link to="/" style={styles.link}>Home</Link>
        </li>
        <li>
          <Link to="/about" style={styles.link}>About</Link>
        </li>
        <li>
          <Link to="/contact" style={styles.link}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    background: 'rgba(0, 0, 0, 0.75)',
    color: '#fff',
    padding: '15px 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'sans-serif',
    boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
    margin: 0,
    padding: 0,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'color 0.3s',
  }
};

export default Header;
