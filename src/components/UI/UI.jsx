import React from 'react';
import "./UI.scss";

const toggleDarkMode = ()=>{
   document.body.classList.toggle('dark-mode');
}

const UI = () => {

  return (
        <div className="UI">
          <h3>Fintekkers</h3>
          {/* <div className="toggle-container" >
                  <input type="checkbox" id="darkmode-toggle" onClick={()=>toggleDarkMode()} />
                  <label htmlFor="darkmode-toggle" className="toggle-label">
                    <span className="toggle-ball"></span>
                  </label>
          </div> */}
        </div>
  )
}

export default UI