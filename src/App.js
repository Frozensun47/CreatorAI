import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Pricing from "./pages/Pricing";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";

// ScrollToTop component to handle scrolling to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Loading indicator component
const LoadingIndicator = ({ isLoading }) => {
  return isLoading ? <div className="loading-indicator"></div> : null;
};

function App() {
  const [isLoading, setIsLoading] = useState(false);

  // Simulate loading state when navigating between pages
  useEffect(() => {
    const handleStartLoading = () => {
      setIsLoading(true);
    };

    const handleFinishLoading = () => {
      // Small delay to make the loading indicator visible
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };

    // In a real app, you would listen to router events
    // For this example, we'll just simulate the loading state
    handleFinishLoading();

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <LoadingIndicator isLoading={isLoading} />
        <ScrollToTop />
        <Header />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
