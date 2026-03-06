import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState({
        submitted: false,
        error: false,
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to your backend
        setFormStatus({
            submitted: true,
            error: false,
            message: 'Thank you for your message! We will get back to you soon.'
        });
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className="contact">
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="contact-hero-content">
                    <h1 className="contact-hero-title">Get in Touch</h1>
                    <p className="contact-hero-subtitle">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="contact-section">
                <div className="contact-container">
                    <div className="contact-info">
                        <h2 className="info-title">Let's Connect</h2>
                        <p className="info-text">
                            Have questions about Indian forts? Want to collaborate? Or just want to say hello? We're here for you!
                        </p>

                        <div className="info-details">
                            <div className="info-item">
                                <div className="info-icon">📍</div>
                                <div>
                                    <h3>Visit Us</h3>
                                    <p>123 Heritage Street, New Delhi, India - 110001</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">📞</div>
                                <div>
                                    <h3>Call Us</h3>
                                    <p>+91 123 456 7890</p>
                                    <p>+91 987 654 3210</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">✉️</div>
                                <div>
                                    <h3>Email Us</h3>
                                    <p>info@indianforts.com</p>
                                    <p>support@indianforts.com</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">🕒</div>
                                <div>
                                    <h3>Working Hours</h3>
                                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="#" className="social-link">📘</a>
                            <a href="#" className="social-link">📷</a>
                            <a href="#" className="social-link">🐦</a>
                            <a href="#" className="social-link">📌</a>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            {formStatus.submitted && (
                                <div className={`form-message ${formStatus.error ? 'error' : 'success'}`}>
                                    {formStatus.message}
                                </div>
                            )}

                            <div className="form-group">
                                <label htmlFor="name">Full Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your full name"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your email address"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject *</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    placeholder="What would you like to talk about?"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Write your message here..."
                                    rows="6"
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-btn">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="map-section">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448181.163742937!2d76.81306771991275!3d28.64727993526243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1625142258497!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Location Map"
                ></iframe>
            </section>

            {/* FAQ Section */}
            <section className="faq-section">
                <h2 className="faq-title">Frequently Asked Questions</h2>
                <div className="faq-container">
                    <div className="faq-item">
                        <h3 className="faq-question">How can I contribute to your website?</h3>
                        <p className="faq-answer">We welcome contributions from history enthusiasts! You can submit articles, photos, or historical information through our contact form.</p>
                    </div>
                    <div className="faq-item">
                        <h3 className="faq-question">Do you offer guided tours?</h3>
                        <p className="faq-answer">While we don't conduct tours directly, we collaborate with local guides and can recommend trusted tour operators.</p>
                    </div>
                    <div className="faq-item">
                        <h3 className="faq-question">How can I support your preservation efforts?</h3>
                        <p className="faq-answer">You can support us by donating, volunteering, or spreading awareness about Indian heritage conservation.</p>
                    </div>
                    <div className="faq-item">
                        <h3 className="faq-question">Can I use your photos for my project?</h3>
                        <p className="faq-answer">Please contact us with details about your project, and we'll be happy to discuss photo usage rights.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;