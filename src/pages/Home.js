import React from 'react';
import './Home.css';

// Using Pexels images (free to use)
const forts = [
    {
        id: 1,
        name: 'Red Fort, Delhi',
        image: 'https://images.pexels.com/photos/3581364/pexels-photo-3581364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        description: 'A UNESCO World Heritage site, symbol of India\'s rich history',
        location: 'Delhi'
    },
    {
        id: 2,
        name: 'Amer Fort, Jaipur',
        image: 'https://images.pexels.com/photos/5342972/pexels-photo-5342972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        description: 'Magnificent fort known for its artistic style and beautiful architecture',
        location: 'Jaipur, Rajasthan'
    },
    {
        id: 3,
        name: 'Mehrangarh Fort',
        image: 'https://images.pexels.com/photos/5342975/pexels-photo-5342975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        description: 'One of India\'s largest and most impressive forts',
        location: 'Jodhpur, Rajasthan'
    },
    {
        id: 4,
        name: 'Gwalior Fort',
        image: 'https://images.pexels.com/photos/9071775/pexels-photo-9071775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        description: 'One of the most impenetrable forts of India',
        location: 'Gwalior, Madhya Pradesh'
    }
];

const Home = () => {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">Discover the Magnificent Forts of India</h1>
                    <p className="hero-subtitle">Journey through time and explore the architectural marvels that tell stories of valor, romance, and glory</p>
                    <button className="cta-button">Explore Forts</button>
                </div>
            </section>

            {/* Featured Forts Section */}
            <section className="featured-section">
                <h2 className="section-title">Featured Forts</h2>
                <p className="section-subtitle">Discover the most iconic forts that showcase India's rich heritage</p>

                <div className="forts-grid">
                    {forts.map(fort => (
                        <div key={fort.id} className="fort-card">
                            <div className="fort-image-container">
                                <img src={fort.image} alt={fort.name} className="fort-image" />
                                <div className="fort-location">{fort.location}</div>
                            </div>
                            <div className="fort-info">
                                <h3 className="fort-name">{fort.name}</h3>
                                <p className="fort-description">{fort.description}</p>
                                <button className="learn-more-btn">Learn More →</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="stats-container">
                    <div className="stat-item">
                        <h3 className="stat-number">50+</h3>
                        <p className="stat-label">Majestic Forts</p>
                    </div>
                    <div className="stat-item">
                        <h3 className="stat-number">1000+</h3>
                        <p className="stat-label">Years of History</p>
                    </div>
                    <div className="stat-item">
                        <h3 className="stat-number">15+</h3>
                        <p className="stat-label">States Covered</p>
                    </div>
                    <div className="stat-item">
                        <h3 className="stat-number">10k+</h3>
                        <p className="stat-label">Happy Visitors</p>
                    </div>
                </div>
            </section>

            {/* Heritage Section */}
            <section className="heritage-section">
                <div className="heritage-content">
                    <h2 className="heritage-title">Preserving India's Architectural Heritage</h2>
                    <p className="heritage-text">
                        Each fort tells a unique story of India's glorious past. From the snow-capped Himalayas to the sun-kissed coasts, these magnificent structures stand as testaments to the incredible craftsmanship and architectural brilliance of ancient India.
                    </p>
                    <button className="heritage-button">Discover More</button>
                </div>
            </section>
        </div>
    );
};

export default Home;