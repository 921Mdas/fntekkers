import React from 'react';
import Welcome from './components/welcome/welcome';
import UI from './components/UI/UI';
import Services from './components/PageTwo/Services';
import AssetManager from './components/PageSix/AssetManager';
import AMRoutine from './components/PageSeven/AMRoutine';
import CostRevenue from './components/PageEight/CostRevenue';
import Nav from './components/Nav/Nav';
import './App.scss'; 


const App = () => {

  return (
    <div className='project_container'>
              <UI />
              <Welcome />
              <AssetManager />
              <AMRoutine />
              <CostRevenue />
              <Services />
              {/* <Nav />  */}

    </div>
  );
};

export default App;
