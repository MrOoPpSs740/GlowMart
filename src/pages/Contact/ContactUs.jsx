import React from "react";
import { contactContent } from "../../data/content";
import "./ContactUs.css";

const ContactUs = () => (
  <section className="contact-section">
    <div className="contact-wrapper">
      <div className="contact-left">
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!..."
          width="100%" height="250" style={{ border: 0, borderRadius: "10px" }}
          allowFullScreen="" loading="lazy"
        ></iframe>

        <div className="contact-info">
          <h2>{contactContent.message.heading}</h2>
          <p>{contactContent.message.body}</p>
          <ul className="contact-details">
            <li><strong>Email:</strong> {contactContent.location.email}</li>
            <li><strong>Phone:</strong> {contactContent.location.phone}</li>
            <li><strong>Location:</strong> {contactContent.location.address}</li>
          </ul>
        </div>
      </div>

      <div className="contact-right">
        <h3>Contact Us</h3>
        <form className="contact-form" onSubmit={e => e.preventDefault()}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  </section>
);

export default ContactUs;
