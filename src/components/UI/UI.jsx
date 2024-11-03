import React from 'react';
import "./UI.scss";

const toggleDarkMode = ()=>{
   document.body.classList.toggle('dark-mode');
}

const UI = () => {

  return (
        <div className="UI">
          <div class="toggle-container" >
                  <input type="checkbox" id="darkmode-toggle" onClick={()=>toggleDarkMode()} />
                  <label for="darkmode-toggle" class="toggle-label">
                    <span class="toggle-ball"></span>
                  </label>
          </div>
        </div>
  )
}

export default UI