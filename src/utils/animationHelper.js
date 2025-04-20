/**
 * Animation Helper Utility
 * This utility provides helper functions for applying animations
 * consistently across different components and pages.
 */

/**
 * Apply animations to elements with a staggered delay
 * @param {string} selector - CSS selector for elements to animate
 * @param {string} animationClass - CSS class for the animation type
 * @param {number} baseDelay - Base delay in milliseconds
 * @param {number} staggerDelay - Additional delay per item in milliseconds
 */
export function applyStaggeredAnimation(
  selector,
  animationClass,
  baseDelay = 0,
  staggerDelay = 100
) {
  const elements = document.querySelectorAll(selector);

  elements.forEach((element, index) => {
    // Calculate delay for this specific element
    const delay = baseDelay + index * staggerDelay;

    // Apply animation class
    setTimeout(() => {
      element.classList.add(animationClass);
    }, delay);
  });
}

/**
 * Apply entrance animations to page sections
 * @param {string} sectionSelector - CSS selector for page sections
 */
export function animatePageSections(sectionSelector = "section") {
  const sections = document.querySelectorAll(sectionSelector);

  // Create intersection observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add animation classes based on data attributes
          const section = entry.target;
          const animationType = section.dataset.animation || "fade-in";

          section.classList.add(animationType);

          // Animate children with staggered delay if specified
          if (section.dataset.animateChildren) {
            const childSelector = section.dataset.childSelector || "*";
            const childAnimation = section.dataset.childAnimation || "fade-in";
            const baseDelay = parseInt(section.dataset.baseDelay || "200");
            const staggerDelay = parseInt(
              section.dataset.staggerDelay || "100"
            );

            applyStaggeredAnimation(
              `${sectionSelector}:nth-of-type(${
                Array.from(sections).indexOf(section) + 1
              }) ${childSelector}`,
              childAnimation,
              baseDelay,
              staggerDelay
            );
          }

          // Stop observing after animation has been applied
          observer.unobserve(section);
        }
      });
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.2, // Trigger when 20% of the section is visible
    }
  );

  // Observe all sections
  sections.forEach((section) => {
    observer.observe(section);
  });
}

/**
 * Add scroll-triggered animations to specific elements
 * @param {Object} config - Configuration object with selectors and animation classes
 */
export function initScrollAnimations(config = {}) {
  const defaultConfig = {
    fadeIn: ".fade-in-scroll",
    slideUp: ".slide-up-scroll",
    slideDown: ".slide-down-scroll",
    slideLeft: ".slide-left-scroll",
    slideRight: ".slide-right-scroll",
    threshold: 0.2,
  };

  // Merge default config with user config
  const mergedConfig = { ...defaultConfig, ...config };

  // Create observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;

          // Determine which animation to apply based on the element's classes
          Object.entries(mergedConfig).forEach(([animation, selector]) => {
            if (typeof selector === "string" && element.matches(selector)) {
              // Apply the animation class
              element.classList.add(animation);
            }
          });

          // Stop observing after animation
          observer.unobserve(element);
        }
      });
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: mergedConfig.threshold,
    }
  );

  // Collect all elements that should be animated
  Object.entries(mergedConfig).forEach(([animation, selector]) => {
    if (typeof selector === "string") {
      document.querySelectorAll(selector).forEach((element) => {
        observer.observe(element);
      });
    }
  });
}

/**
 * Apply a hover animation to elements
 * @param {string} selector - CSS selector for elements
 * @param {string} animationClass - Animation class to apply on hover
 */
export function applyHoverAnimation(selector, animationClass) {
  const elements = document.querySelectorAll(selector);

  elements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      element.classList.add(animationClass);
    });

    element.addEventListener("mouseleave", () => {
      element.classList.remove(animationClass);

      // Force a reflow to allow the animation to restart next time
      void element.offsetWidth;
    });
  });
}

/**
 * Initialize all animations for a page
 * Call this function in your component's useEffect hook
 */
export function initPageAnimations() {
  // Animate page sections
  animatePageSections();

  // Initialize scroll animations
  initScrollAnimations();

  // Apply hover animations to interactive elements
  applyHoverAnimation(".btn", "pulse");
  applyHoverAnimation(".card", "float");

  return () => {
    // Clean up function if needed
  };
}
