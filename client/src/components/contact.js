import React from 'react';

function Contact() {
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
          Contact Us
        </h2>

        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '20px', color: '#3498db' }}>
          We’d love to hear from you! Whether you have a question, feedback, or just want to say hello, don’t hesitate to reach out.
        </p>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px', color: '#3498db' }}>
          ✉️ Email us at: <strong>contact@weatherify.com</strong>
        </p>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px', color: '#3498db' }}>
          📞 Call us: <strong>+91 98881111</strong>
        </p>

        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#3498db' }}>
          📍 Address: 123 GLA University, Mathura
        </p>
      </div>
    </div>
  );
}

export default Contact;
