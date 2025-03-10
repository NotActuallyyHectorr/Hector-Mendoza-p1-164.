import React, { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  padding: 50px;
  text-align: center;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactPage = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send to email)
    alert('Form submitted');
  };

  return (
    <ContactContainer>
      <h1>Contact Me</h1>
      <ContactForm onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </ContactForm>
    </ContactContainer>
  );
};

export default ContactPage;
