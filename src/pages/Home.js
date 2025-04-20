import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/hero-image.png";
import featureImage1 from "../assets/images/feature-1.jpg";
import featureImage2 from "../assets/images/feature-2.jpg";
import featureImage3 from "../assets/images/feature-3.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-image">
              <img src={heroImage} alt="VideoGen AI Platform" />
            </div>
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
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">How VideoGen AI Works</h2>

          <div className="feature-card">
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

          <div className="feature-card reverse">
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

          <div className="feature-card">
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

          <div className="cta-container">
            <h3>Ready to create your first video?</h3>
            <Link to="/create" className="btn btn-primary">
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
