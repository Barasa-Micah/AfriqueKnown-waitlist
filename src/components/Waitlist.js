import React, { useState } from 'react';
import './Waitlist.css'; // Updated CSS

const Waitlist = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Handle form submission, e.g., send data to an API
      console.log('Form submitted', formData);
      setMessage('Thank you for joining KnownAfrique waitlist!');
      setFormData({ name: '', email: '' });
      setErrors({});
    }
  };

  return (
    <div className="waitlist-container">
      <div className="waitlist-header">
        <h1>Join Our Exclusive Waitlist</h1>
        <p>Be the first to know when we launch. Sign up now and stay updated!</p>
      </div>
      <form onSubmit={handleSubmit} className="waitlist-form" aria-label="Waitlist Form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            aria-invalid={errors.name ? 'true' : 'false'}
            required
          />
          {errors.name && <span className="error-message" role="alert">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={errors.email ? 'true' : 'false'}
            required
          />
          {errors.email && <span className="error-message" role="alert">{errors.email}</span>}
        </div>
        <button type="submit" className="submit-btn">Join KnownAfrique</button>
      </form>
      {message && <p className="thank-you-message" role="alert">{message}</p>}
    </div>
  );
};

export default Waitlist;