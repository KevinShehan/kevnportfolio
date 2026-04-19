import React from 'react';
import Button from '../components/Button';

const Contact = () => {
  return (
    <section id="contact" style={{ padding: '4rem 2rem' }}>
      <h2>Contact Me</h2>
      <p>Feel free to reach out!</p>
      <Button onClick={() => alert('Message Sent!')}>Send Message</Button>
    </section>
  );
};

export default Contact;
