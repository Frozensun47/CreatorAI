/**
 * Scroll Animation Utility
 * This script enables animation of elements when they scroll into view
 */

// Initialize the scroll observer when DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  initScrollObserver();
});

/**
 * Initialize Intersection Observer to handle scroll animations
 */
function initScrollObserver() {
  // Select all elements with the animation classes
  const scrollElements = document.querySelectorAll(
    ".js-scroll, .feature-card, .reveal"
  );

  // Initialize the observer with options
  const observer = new IntersectionObserver(handleIntersect, {
    root: null, // Use viewport as root
    rootMargin: "0px",
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  // Observe each element
  scrollElements.forEach((element) => {
    observer.observe(element);
  });

  // Handle the intersection events
  function handleIntersect(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add the appropriate class to trigger the animation
        if (entry.target.classList.contains("js-scroll")) {
          entry.target.classList.add("scrolled");
        } else if (entry.target.classList.contains("feature-card")) {
          entry.target.classList.add("active");
        } else if (entry.target.classList.contains("reveal")) {
          entry.target.classList.add("active");
        }

        // Optionally, stop observing the element after it's animated
        observer.unobserve(entry.target);
      }
    });
  }
}

/**
 * Manually initialize animations for elements that should animate on page load
 * Call this function if you need to trigger animations for specific elements
 * @param {string} selector - CSS selector for elements to animate
 */
export function triggerAnimation(selector) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element) => {
    if (element.classList.contains("js-scroll")) {
      element.classList.add("scrolled");
    } else if (element.classList.contains("feature-card")) {
      element.classList.add("active");
    } else if (element.classList.contains("reveal")) {
      element.classList.add("active");
    }
  });
}

/**
 * Reset animations for a specific section or element
 * Useful when you want to replay animations
 * @param {string} selector - CSS selector for elements to reset
 */
export function resetAnimation(selector) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element) => {
    if (element.classList.contains("js-scroll")) {
      element.classList.remove("scrolled");
    } else if (element.classList.contains("feature-card")) {
      element.classList.remove("active");
    } else if (element.classList.contains("reveal")) {
      element.classList.remove("active");
    }

    // Force a reflow to restart animations
    void element.offsetWidth;
  });
}

export default initScrollObserver;
