import React from 'react';
import "./UI.scss";

const toggleDarkMode = ()=>{
   document.body.classList.toggle('dark-mode');
}

const UI = () => {

  return (
        <div className="UI">
         <h3><a href="https://www.fintekkers.org/" target="_blank">Fintekkers</a></h3>
        </div>
  )
}

export default UI