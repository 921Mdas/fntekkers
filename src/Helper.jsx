import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined' && gsap) {
  gsap.registerPlugin(ScrollTrigger);
}

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

    // Apply each animation in the animations array
    animations.forEach(({ from, to, selector }) => {
      tl.fromTo(selector, from, to);
    });

    // Cleanup on component unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [trigger, start, end, markers, scrub, toggleActions, animations, onUpdate]);
}


export function Counter({ end, duration }) {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCounting(true); // Start counting when visible
        }
      },
      { threshold: 0.1 } // Adjust this threshold as needed
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isCounting) return;

    let start = 0;
    const increment = end / (duration / 10);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.ceil(start));
    }, 10);

    return () => clearInterval(timer);
  }, [isCounting, end, duration]);

  return <span ref={counterRef}>{count}</span>;
}

export const typeText = (index, text, subheadlineElement) => {
  if (index < text.length && subheadlineElement) {
    subheadlineElement.innerHTML +=
      text[index] === '\n' ? '<br/>' : text[index];
    setTimeout(() => typeText(index + 1, text, subheadlineElement), 50); // Pass the updated index
  } else if (!subheadlineElement) {
    console.error('Subheadline element not found:', subheadlineElement);
  }
};
