
import React, { useState } from 'react';
import './Waitlist.css'; // Updated CSS

const Waitlist = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to an API
    console.log('Form submitted', { name, email });
    setMessage('Thank you for joining KnownAfrique waitlist!');
    setName('');
    setEmail('');
  };

  return (
    <div className="waitlist-container">
      <div className="waitlist-header">
        <h1>Join Our Exclusive Waitlist</h1>
        <p>Be the first to know when we launch. Sign up now and stay updated!</p>
      </div>
      <form onSubmit={handleSubmit} className="waitlist-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Join KnownAfrique</button>
      </form>
      {message && <p className="thank-you-message">{message}</p>}
    </div>
  );
};

export default Waitlist;