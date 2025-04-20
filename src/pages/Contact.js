import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send the data to a server here
    console.log("Form data submitted:", formData);
    setFormSubmitted(true);
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    // Reset the submission status after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-header">
          <h1 className="page-title">Contact Us</h1>
          <p className="contact-subtitle">
            Have questions about our platform? Looking for support? We're here
            to help!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <h3>Our Location</h3>
              <p>123 AI Avenue</p>
              <p>San Francisco, CA 94105</p>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaPhone />
              </div>
              <h3>Phone Number</h3>
              <p>+1 (555) 123-4567</p>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <h3>Email Address</h3>
              <p>support@videogenai.com</p>
              <p>info@videogenai.com</p>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaClock />
              </div>
              <h3>Working Hours</h3>
              <p>Monday - Friday: 9AM - 6PM</p>
              <p>Weekend: 10AM - 4PM</p>
            </div>
          </div>

          <div className="contact-form-container">
            <h2>Send Us a Message</h2>
            {formSubmitted ? (
              <div className="form-success">
                <p>
                  Thank you for your message! We'll get back to you shortly.
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.50764017948633!3d37.75781499602704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1587293756196!5m2!1sen!2s"
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="Our location"
          ></iframe>
        </div>

        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How quickly do you respond to inquiries?</h3>
              <p>
                We aim to respond to all inquiries within 24 hours during
                business days.
              </p>
            </div>
            <div className="faq-item">
              <h3>Do you offer technical support?</h3>
              <p>
                Yes, we provide technical support to all our customers. Basic
                support is included in all plans, while priority support is
                available for Professional and Enterprise plans.
              </p>
            </div>
            <div className="faq-item">
              <h3>Can I request a demo?</h3>
              <p>
                Absolutely! Fill out the contact form and mention that you'd
                like a demo, and our team will schedule one with you.
              </p>
            </div>
            <div className="faq-item">
              <h3>Do you have an affiliate program?</h3>
              <p>
                Yes, we do have an affiliate program. Please contact us for more
                details on how to join.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
