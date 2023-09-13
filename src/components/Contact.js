import React, { useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Configure Email.js with your service ID, template ID, and user ID
    emailjs.init('YOUR_USER_ID');

    const emailData = {
      to_email: 'bjgoddard21@gmail.com', // The recipient email address
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    // Send the email using Email.js
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', emailData)
      .then((response) => {
        console.log('Email sent successfully!', response);
        // You can add code here to display a success message or redirect to a thank you page.
      })
      .catch((error) => {
        console.error('Email error:', error);
        // You can add code here to handle the error and display an error message.
      });
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p>Feel free to reach out!</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;

