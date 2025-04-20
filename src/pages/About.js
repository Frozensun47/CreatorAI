import React from 'react';
import { FaRocket, FaBrain, FaUsers, FaLightbulb } from 'react-icons/fa';
import teamMember1 from '../assets/images/sagar_picture.jpg';
import './About.css';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'Founder & CEO',
      bio: 'Sarah has over 15 years of experience in video production and AI technology. She founded VideoGen AI with a vision to democratize video creation.',
      image: teamMember1
    }
  ];

  const values = [
    {
      id: 'innovation',
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible with AI-driven video creation.',
      icon: <FaLightbulb />
    },
    {
      id: 'quality',
      title: 'Quality',
      description: "We're committed to delivering high-quality videos that exceed our customers\' expectations.",
      icon: <FaRocket />
    },
    {
      id: 'intelligence',
      title: 'Intelligence',
      description: 'We leverage cutting-edge AI to make video creation smarter, faster, and more intuitive.',
      icon: <FaBrain />
    },
    {
      id: 'community',
      title: 'Community',
      description: 'We build tools that empower creators and businesses of all sizes.',
      icon: <FaUsers />
    }
  ];

  return (
    <div className="about-page">
      <div className="container">
        {/* Hero Section */}
        <section className="about-hero">
          <h1 className="page-title">About VideoGen AI</h1>
          <div className="about-subtitle">
            <p>
              We're on a mission to revolutionize video creation through the power of artificial intelligence.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="about-story">
          <h2 className="section-title">Our Story</h2>
          <div className="story-content">
            <p>
              VideoGen AI was founded in 2023 with a simple but powerful vision: make professional video creation accessible to everyone. We recognized that while video had become the dominant form of online communication, the tools to create high-quality videos remained complex, expensive, and time-consuming.
            </p>
            <p>
              Our team of AI researchers, video production experts, and software engineers came together to build a platform that automates the most challenging aspects of video creation: finding footage, writing scripts, recording voiceovers, and editing everything together seamlessly.
            </p>
            <p>
              Today, VideoGen AI serves thousands of customers across the globe - from individual content creators to marketing teams at Fortune 500 companies. We're proud of how our technology has democratized video production, but we're just getting started. Our roadmap includes even more advanced AI capabilities, industry-specific templates, and collaborations with leading content providers.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="about-values">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            {values.map((value) => (
              <div key={value.id} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="about-team">
          <h2 className="section-title">Our Team</h2>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-position">{member.position}</p>
                <p className="team-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mission Section */}
        <section className="about-mission">
          <div className="mission-content">
            <h2 className="mission-title">Our Mission</h2>
            <blockquote className="mission-quote">
              "To empower everyone to tell their story through professional-quality videos, without the complexity."
            </blockquote>
            <p className="mission-description">
              We believe that video is the most powerful medium for sharing ideas, stories, and information. By removing the technical barriers to video creation, we're enabling more voices to be heard and more stories to be told.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;