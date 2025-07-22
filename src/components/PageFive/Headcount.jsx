import { useEffect } from 'react';
import "./Headcount.scss";
import { useScrollAnimation } from '../../Helper';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Headcount = () => {
  // Trigger scroll-based animation using GSAP
  useScrollAnimation({
    trigger: ".Headcount_container",
    start: "-50% 100%",
    end: "+=350",
    scrub: true,
    toggleActions: "restart none none none",
    animations: [
      {
        selector: ".Headcount_container",
        from: { opacity: 0, y: 200 },
        to: { opacity: 1, y: 0 },
      },
    ],
  });

  // Cleanup GSAP ScrollTriggers on unmount
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className='Headcount_container'>
      {/* Headcount Title Row */}
      <div className='headcount_title'>
        <div className='headcount_title_text'>Component</div>
        <div className='headcount_title_text'>Gaps</div>
        <div className='headcount_title_text'>HC</div>
      </div>

      {/* Platform Row */}
      <div className='headcount_platform'>
        <div>Platform</div>
        <div>
          Delta-based updates<br />
          Permissions (API keys; granular permissions)<br />
          Cross-region support
        </div>
        <div>2</div>
      </div>

      {/* Transaction Row */}
      <div className='headcount_transaction'>
        <div>Transaction</div>
        <div>Lineage-based updates (i.e. security reference data changes)</div>
        <div>0.5</div>
      </div>

      {/* Tax Lots Row */}
      <div className='headcount_tax'>
        <div>Tax Lots</div>
        <div>Short/Cover implementation. Accretion/Amortization support. Tax lot selection</div>
        <div>0.5</div>
      </div>

      {/* Portfolios Row */}
      <div className='headcount_portfolios'>
        <div>Portfolios</div>
        <div>Complex ownership structures</div>
        <div>0.5</div>
      </div>

      {/* Strategy Row */}
      <div className='headcount_strategy'>
        <div>Strategy</div>
        <div>None</div>
        <div>0</div>
      </div>

      {/* Market Data Row */}
      <div className='headcount_market'>
        <div>Market data</div>
        <div>Build a backing store; implement indexes; spread pricing</div>
        <div>1</div>
      </div>

      {/* Security Row */}
      <div className='headcount_security'>
        <div>Security</div>
        <div>Inflation-adjustments; MBS; leverage (e.g. future), 0-starting (e.g. swaps)</div>
        <div>0.5</div>
      </div>

      {/* Risk Row */}
      <div className='headcount_risk'>
        <div>Risk</div>
        <div className='headcount_risk2'>
          V1; coupon forecasting; coupon rate-adjustments (e.g. FRN); par-value adjustments (e.g. TIPS)
        </div>
        <div>2</div>
      </div>

      {/* Total Headcount Row */}
      <div className='headcount_total'>
        <div>Total Headcount required:</div>
        <div></div>
        <div>7</div>
      </div>
    </div>
  );
};

export default Headcount;