import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import "./welcome.scss";

const Welcome = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "power2",
      },
    });

    tl.fromTo(
      '.headline',
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0 }
    )
      .fromTo(
        '.subheadline',
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0 },
        "-=0.9"
      )
      .fromTo(
        '.actions',
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0 },
        "-=1"
      );
  }, []);

  return (
    <div className="welcome">
    
       
      <div className="welcome_svg">
        <img src={"./assets-images/arrow.png"} alt="Arrow" />
      </div>

      <div className="welcome_content">
        <h1 className="headline">
          A comprehensive suite of APIs <br /> to help you build fintech products cost-effectively
        </h1>

        <div className="actions">
          <button className="action_start">START BUILDING</button>
          <button className="action_docs">VIEW DOCS</button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
