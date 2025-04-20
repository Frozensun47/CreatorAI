import React from "react";
import { FaCheck } from "react-icons/fa";
import "./Pricing.css";

const Pricing = () => {
  const pricingPlans = [
    {
      id: "free",
      name: "Free",
      price: "0",
      period: "month",
      description: "Perfect for beginners to try our platform",
      features: [
        "3 videos per month",
        "SD quality (480p)",
        "1 AI voice option",
        "Basic stock video library",
        "Maximum 60 seconds per video",
        "VideoGen AI watermark",
      ],
      buttonText: "Start Free",
      popular: false,
    },
    {
      id: "basic",
      name: "Basic",
      price: "19.99",
      period: "month",
      description: "Great for content creators and small businesses",
      features: [
        "15 videos per month",
        "HD quality (720p)",
        "5 AI voice options",
        "Standard stock video library",
        "Maximum 3 minutes per video",
        "No watermark",
      ],
      buttonText: "Get Started",
      popular: true,
    },
    {
      id: "pro",
      name: "Professional",
      price: "49.99",
      period: "month",
      description: "For serious creators and marketing teams",
      features: [
        "Unlimited videos",
        "4K quality",
        "All AI voice options",
        "Premium stock video library",
        "Maximum 10 minutes per video",
        "Priority support",
        "Advanced editing tools",
      ],
      buttonText: "Go Pro",
      popular: false,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For businesses with advanced needs",
      features: [
        "Unlimited videos",
        "4K quality",
        "Custom AI voice development",
        "Dedicated stock library",
        "Unlimited video length",
        "Dedicated account manager",
        "API access",
        "Custom integrations",
      ],
      buttonText: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <div className="pricing-page">
      <div className="container">
        <div className="pricing-header">
          <h1 className="page-title">Simple, Transparent Pricing</h1>
          <p className="pricing-subtitle">
            Choose the plan that fits your needs. All plans include access to
            our core video generation technology.
          </p>
        </div>

        <div className="pricing-plans">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`pricing-card ${plan.popular ? "popular" : ""}`}
            >
              {plan.popular && (
                <div className="popular-badge">Most Popular</div>
              )}
              <div className="plan-name">{plan.name}</div>
              <div className="plan-price">
                {plan.price === "Custom" ? (
                  <span className="custom-price">Custom Pricing</span>
                ) : (
                  <>
                    <span className="currency">$</span>
                    <span className="amount">{plan.price}</span>
                    {plan.period && (
                      <span className="period">/{plan.period}</span>
                    )}
                  </>
                )}
              </div>
              <div className="plan-description">{plan.description}</div>
              <ul className="plan-features">
                {plan.features.map((feature, index) => (
                  <li key={index} className="feature-item">
                    <FaCheck className="feature-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`btn ${
                  plan.popular ? "btn-primary" : "btn-secondary"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Can I switch plans at any time?</h3>
              <p>
                Yes, you can upgrade, downgrade, or cancel your plan at any
                time. Changes take effect at the start of the next billing
                cycle.
              </p>
            </div>
            <div className="faq-item">
              <h3>Do you offer annual discounts?</h3>
              <p>
                Yes, we offer a 15% discount if you choose annual billing for
                any of our paid plans.
              </p>
            </div>
            <div className="faq-item">
              <h3>What payment methods do you accept?</h3>
              <p>
                We accept all major credit cards, PayPal, and for Enterprise
                customers, we can arrange bank transfers.
              </p>
            </div>
            <div className="faq-item">
              <h3>Do I own the videos I create?</h3>
              <p>
                Yes, you retain full ownership of all content created with our
                platform, subject to the stock footage license terms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
