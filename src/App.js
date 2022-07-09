import React from 'react';
import Navmenu from './components/Navmenu'
import Scrollgroup from './components/Scrollgroup'
import Questionboard from './components/Questionboard'
import Statusgroup from './components/Statusgroup';
import './App.css';

function App() {
  return (
      <div className = "main-wrapper">
        <Navmenu>
        </Navmenu>
        <Scrollgroup>
        </Scrollgroup>
        <Questionboard>
        </Questionboard>
        <Statusgroup>
        </Statusgroup>
      </div>

  );
}

export default App;
