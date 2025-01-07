import React, {useEffect} from 'react'
import "./Headcount.scss";
import { useScrollAnimation } from '../../Helper';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Headcount = () => {

  useScrollAnimation({
    trigger: ".Headcount_container",
    start: "-50% 100%",
    end: "+=350",
    scrub: true,
    markers:true,
    toggleActions: "restart none none none",
    animations: [
      { selector: ".Headcount_container", from: { opacity: 0, y: 200 }, to: { opacity: 1, y: 0 } },
    ],
});

useEffect(() => {
  return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
}, []);



  return (
    <div className='Headcount_container'>
        {/* <h3>Headcount</h3> */}
       <div className='headcount_title'>
                <div className='headcount_title_text'>Component</div>
                <div className='headcount_title_text'>Gaps</div>
                <div className='headcount_title_text'>HC</div>
       </div>
       <div className='headcount_platform'>
        <div>Platform
</div>
        <div>Delta-based updates
Permissions (API keys; granular permissions)
Cross-region support
</div>
        <div>2</div>
       </div>
       <div className='headcount_transaction'>
        <div>Transaction</div>
        <div>Lineage-based updates (i.e. security reference data changes)
</div>
        <div>0.5</div>
       </div>
       <div className='headcount_tax'>
        <div>Tax Lots</div>
        <div>Short/Cover implementation. Accretion/Amortization support. Tax lot selection
</div>
        <div>0.5</div>
       </div>
       <div className='headcount_portfolios'>
        <div>Portfolios</div>
        <div>Complex ownership structures
</div>
        <div>0.5
</div>
       </div>
       <div className='headcount_strategy'>
        <div>Strategy</div>
        <div>None
</div>
        <div>0</div>
       </div>
       <div className='headcount_market'>
        <div>Market data
</div>
        <div>Build a backing store; implement indexes; spread pricing
</div>
        <div>1</div>
       </div>
       <div className='headcount_security'>
        <div>Security
</div>
        <div>Inflation-adjustments; MBS; leverage (e.g. future), 0-starting (e.g. swaps)
</div>
        <div>0.5</div>
       </div>
       <div className='headcount_risk'>
        <div>Risk</div>
        <div className='headcount_risk2'>V1; coupon forecasting; coupon rate-adjustments (e.g. FRN); par-value adjustments (e.g. TIPS)
</div>
        <div>2</div>
       </div>
       <div className='headcount_total'>
        <div>Total Headcount required:</div>
        <div></div>
        <div>7</div>
       </div>
    </div>
  )
}

export default Headcount