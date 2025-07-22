import { useEffect } from 'react';
import "./Problem.scss";
import { useScrollAnimation } from '../../Helper';
import { GiTakeMyMoney, GiReceiveMoney } from "react-icons/gi";
import { FaTools, FaUsers, FaArrowDownLong } from "react-icons/fa6";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Problem = () => {
  const IconSize = 30;

  // Initialize scroll-triggered animations on elements within the component
  useScrollAnimation({
    trigger: ".problem_statement",
    start: "top 100%",
    end: "bottom 100%",
    scrub: true,
    toggleActions: "restart none none none",
    animations: [
      { selector: ".problem_subheadline", from: { opacity: 0, y: "200px" }, to: { opacity: 1, y: 0 } },
      { selector: ".problem_list_one", from: { opacity: 0 }, to: { opacity: 1 } },
      { selector: ".problem_list_two", from: { opacity: 0 }, to: { opacity: 1 } },
      { selector: ".why_solution", from: { opacity: 0, y: 200 }, to: { opacity: 1, y: 0 } },
      { selector: ".why_list_one_span", from: { opacity: 0, y: -10 }, to: { opacity: 1, y: 0 } },
      { selector: ".why_list_one", from: { opacity: 0, y: -10 }, to: { opacity: 1, y: 0 } },
    ],
  });

  // Cleanup all GSAP ScrollTrigger instances on unmount to avoid memory leaks
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className='page_one'>
      {/* Problem statement section */}
      <div className='problem_statement'>
        <div className="problem_statement_content">
          <h2 className='problem_headline'>The problem to achieve ROI</h2>
          <p className='problem_subheadline'>FinTech solutions tend to fall in 2 Categories</p>
          <ul className='problem_list'>
            {/* First problem list item */}
            <div className="problem_list_group_one">
              <li className='problem_list_one'>
                <GiTakeMyMoney size={IconSize + 5} /> 
                High upfront investment <br /> + <br /> near zero maintenance <FaTools size={IconSize} />
              </li>
            </div>
            {/* Second problem list item */}
            <div className="problem_list_group_two">
              <li className='problem_list_two'>
                <GiReceiveMoney size={IconSize} /> Maintained investment <br /> + <br /> serving a narrow cohort of users <FaUsers size={IconSize} />
              </li>
            </div>
          </ul>
        </div>
      </div>

      {/* Why FinTekkers section */}
      <div className="whyfintekkers">
        <h2 className='why_title'>Why is “FinTekkers” the solution?</h2>
        <FaArrowDownLong size={IconSize} />
        <p className='why_solution'>
          FinTekkers focuses on essential infrastructure for FinTech systems<br /> delivering key value to the sector
        </p>
        <FaArrowDownLong size={IconSize} />
        <ul className='why_list_container'>
          <li className='why_list_one'>Fast prototyping of end-user products</li>
        </ul>
        <span className="svganim">
          <IoIosCheckmarkCircleOutline size={IconSize} />
        </span>
      </div>
    </div>
  );
};

export default Problem;