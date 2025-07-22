// React hooks for state, lifecycle, and DOM references
import { useEffect, useState, useRef } from 'react';

// GSAP animation library and its scroll plugin
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Conditionally register the ScrollTrigger plugin (only in browser)
if (typeof window !== 'undefined' && gsap) {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Custom React Hook: useScrollAnimation
 * 
 * Sets up GSAP scroll-triggered animations using provided configuration.
 *
 * @param {Object} options - Configuration object
 * @param {string} options.trigger - CSS selector for the element that triggers animation
 * @param {string} options.start - ScrollTrigger 'start' position
 * @param {string} options.end - ScrollTrigger 'end' position
 * @param {boolean} [options.markers=false] - Enables visual scroll markers for debugging
 * @param {boolean} [options.scrub=true] - Smooth animation in sync with scroll position
 * @param {boolean} [options.pin=false] - Whether to pin the element while scrolling
 * @param {string} [options.toggleActions="restart pause restart pause"] - ScrollTrigger toggle actions
 * @param {Array} options.animations - Array of animation configs ({selector, from, to})
 * @param {Function} [options.onUpdate] - Optional callback for scroll updates
 */
export function useScrollAnimation({
  trigger,
  start,
  end,
  markers = false,
  scrub = true,
  pin = false,
  toggleActions = "restart pause restart pause",
  animations = [],
  onUpdate,
}) {
  useEffect(() => {
    // Create GSAP timeline with a ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger,
        start,
        end,
        markers,
        scrub,
        pin,
        toggleActions,
        onUpdate,
      },
    });

    // Add all animations to the timeline
    animations.forEach(({ from, to, selector }) => {
      tl.fromTo(selector, from, to);
    });

    // Clean up all scroll triggers when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [trigger, start, end, markers, scrub, toggleActions, animations, onUpdate]);
}


/**
 * Counter Component
 * 
 * Animated counter that starts incrementing when the component is visible in the viewport.
 * 
 * @param {number} end - Final number to count up to
 * @param {number} duration - Duration of animation in milliseconds
 */
export function Counter({ end, duration }) {
  const [count, setCount] = useState(0);             // Current count value
  const [isCounting, setIsCounting] = useState(false); // Track if animation should start
  const counterRef = useRef(null);                   // Ref to DOM element for intersection observer

  // Intersection Observer to trigger counting only when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCounting(true); // Trigger counting when element enters viewport
        }
      },
      { threshold: 0.1 } // Fires when 10% of the element is visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    // Cleanup the observer when component unmounts
    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  // Start counting once `isCounting` is set to true
  useEffect(() => {
    if (!isCounting) return;

    let start = 0;
    const increment = end / (duration / 10); // Value to increment every 10ms

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.ceil(start)); // Update display value (rounded up)
    }, 10);

    return () => clearInterval(timer); // Cleanup timer
  }, [isCounting, end, duration]);

  return <span ref={counterRef}>{count}</span>;
}


/**
 * typeText Function
 * 
 * Recursively types out characters into a DOM element to simulate a typewriter effect.
 * 
 * @param {number} index - Current index of character to type
 * @param {string} text - Full string to type out
 * @param {HTMLElement} subheadlineElement - Target element to type into
 */
export const typeText = (index, text, subheadlineElement) => {
  // Continue typing if there's more text and element is available
  if (index < text.length && subheadlineElement) {
    // Handle line breaks by replacing "\n" with <br/>
    subheadlineElement.innerHTML += text[index] === '\n' ? '<br/>' : text[index];

    // Recursively call this function with the next character index
    setTimeout(() => typeText(index + 1, text, subheadlineElement), 50);
  } else if (!subheadlineElement) {
    // Error handling: missing target element
    console.error('Subheadline element not found:', subheadlineElement);
  }
};
