import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="about-hero-content">
                    <h1 className="about-hero-title">Our Story</h1>
                    <p className="about-hero-subtitle">Preserving India's magnificent fort heritage for future generations</p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="mission-section">
                <div className="mission-container">
                    <div className="mission-content">
                        <h2 className="mission-title">Our Mission</h2>
                        <p className="mission-text">
                            At Indian Forts, we are dedicated to documenting, preserving, and sharing the incredible stories of India's architectural marvels. Our mission is to make the rich history of Indian forts accessible to everyone, from history enthusiasts to curious travelers.
                        </p>
                        <div className="mission-stats">
                            <div className="mission-stat">
                                <h3>2015</h3>
                                <p>Founded</p>
                            </div>
                            <div className="mission-stat">
                                <h3>50+</h3>
                                <p>Forts Documented</p>
                            </div>
                            <div className="mission-stat">
                                <h3>100+</h3>
                                <p>Expert Contributors</p>
                            </div>
                        </div>
                    </div>
                    <div className="mission-image">
                        <img
                            src="https://images.pexels.com/photos/9071775/pexels-photo-9071775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Indian Fort Architecture"
                        />
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section">
                <h2 className="team-title">Meet Our Team</h2>
                <p className="team-subtitle">Passionate experts dedicated to preserving India's heritage</p>

                <div className="team-grid">
                    <div className="team-member">
                        <div className="member-image">
                            <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Dr. Rajesh Kumar" />
                        </div>
                        <h3 className="member-name">Dr. Rajesh Kumar</h3>
                        <p className="member-role">Chief Historian</p>
                        <p className="member-bio">20+ years of experience in Indian architectural history</p>
                    </div>

                    <div className="team-member">
                        <div className="member-image">
                            <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Priya Singh" />
                        </div>
                        <h3 className="member-name">Priya Singh</h3>
                        <p className="member-role">Heritage Conservation Expert</p>
                        <p className="member-bio">Leading conservation efforts across 15 major forts</p>
                    </div>

                    <div className="team-member">
                        <div className="member-image">
                            <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Arjun Mehta" />
                        </div>
                        <h3 className="member-name">Arjun Mehta</h3>
                        <p className="member-role">Architectural Photographer</p>
                        <p className="member-bio">Capturing the beauty of Indian forts for over a decade</p>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="values-section">
                <h2 className="values-title">Our Values</h2>
                <div className="values-grid">
                    <div className="value-card">
                        <div className="value-icon">📚</div>
                        <h3>Authenticity</h3>
                        <p>We ensure all historical information is thoroughly researched and verified</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">🤝</div>
                        <h3>Community</h3>
                        <p>Working with local communities to preserve and share their heritage</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">🌍</div>
                        <h3>Sustainability</h3>
                        <p>Promoting responsible tourism and conservation practices</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">💡</div>
                        <h3>Innovation</h3>
                        <p>Using modern technology to document and share historical knowledge</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;