import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/hero-image.png";
import featureImage1 from "../assets/images/feature-1.jpg";
import featureImage2 from "../assets/images/feature-2.jpg";
import featureImage3 from "../assets/images/feature-3.jpg";
import initScrollObserver from "../utils/scrollAnimation";
import "./Home.css";

const Home = () => {
  // Initialize scroll animations when component mounts
  useEffect(() => {
    initScrollObserver();

    // Clean up scroll observers when component unmounts
    return () => {
      // Cleanup logic if needed
    };
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Transform Your Ideas Into Engaging Videos</h1>
              <p>
                Our AI-powered platform automatically fetches videos, generates
                scripts, adds professional voice-overs, and combines everything
                into a stunning final video - all from a simple prompt.
              </p>
              <div className="hero-buttons">
                <Link to="/create" className="btn btn-primary">
                  Create Now
                </Link>
                <Link to="/pricing" className="btn btn-secondary">
                  View Pricing
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <img src={heroImage} alt="VideoGen AI Platform" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">How VideoGen AI Works</h2>

          <div className="feature-card js-scroll js-scroll--right">
            <div className="feature-image">
              <img src={featureImage1} alt="Prompt to Script" />
            </div>
            <div className="feature-content">
              <h3>1. Start with a Simple Prompt</h3>
              <p>
                Enter your idea, topic, or story. Our AI will analyze your
                prompt and generate a professional script tailored to your
                needs.
              </p>
            </div>
          </div>

          <div className="feature-card reverse js-scroll js-scroll--left">
            <div className="feature-image">
              <img src={featureImage2} alt="Video Matching" />
            </div>
            <div className="feature-content">
              <h3>2. Automatic Video Matching</h3>
              <p>
                Our system automatically fetches relevant stock videos based on
                your script, saving you hours of searching and downloading.
              </p>
            </div>
          </div>

          <div className="feature-card js-scroll js-scroll--right">
            <div className="feature-image">
              <img src={featureImage3} alt="Voice and Export" />
            </div>
            <div className="feature-content">
              <h3>3. Add Voice & Export</h3>
              <p>
                Choose from dozens of natural-sounding AI voices to narrate your
                script. Preview your creation and export the final video in
                various formats.
              </p>
            </div>
          </div>

          <div className="cta-container js-scroll js-scroll--up">
            <h3>Ready to create your first video?</h3>
            <Link to="/create" className="btn btn-primary">
              Get Started Now
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section (New) */}
      <section className="testimonials-section js-scroll js-scroll--up">
        <div className="container">
          <h2 className="section-title">What Our Users Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>
                  "VideoGen AI has revolutionized how our marketing team creates
                  content. What used to take days now takes minutes."
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {/* Placeholder for avatar image */}
                  <div className="avatar-placeholder">JD</div>
                </div>
                <div className="author-details">
                  <h4>John Doe</h4>
                  <p>Marketing Director, TechCorp</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>
                  "As a content creator, I can now produce professional videos
                  without any technical expertise. The AI understands exactly
                  what I need."
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {/* Placeholder for avatar image */}
                  <div className="avatar-placeholder">JS</div>
                </div>
                <div className="author-details">
                  <h4>Jane Smith</h4>
                  <p>YouTuber & Influencer</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>
                  "The quality of videos generated by VideoGen AI surpassed our
                  expectations. Our educational content now looks professional
                  and engaging."
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {/* Placeholder for avatar image */}
                  <div className="avatar-placeholder">RJ</div>
                </div>
                <div className="author-details">
                  <h4>Robert Johnson</h4>
                  <p>Education Consultant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section (New) */}
      <section className="stats-section js-scroll js-scroll--up">
        <div className="container">
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Active Users</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100K+</div>
              <div className="stat-label">Videos Created</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">95%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Customer Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
