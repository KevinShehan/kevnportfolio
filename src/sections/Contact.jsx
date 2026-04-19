import React from 'react';
import Button from '../components/Button';

const Contact = () => {
  return (
    <section id="contact" className="section-container" style={{ textAlign: 'center' }}>
      <h2 className="section-heading text-gradient">Get In Touch</h2>
      <div className="glass styled-card" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
          Interested in collaborating or just want to say hi? I'd love to hear from you.
        </p>
        <Button onClick={() => alert('Message Sent!')}>Send Message</Button>
      </div>
    </section>
  );
};

export default Contact;
