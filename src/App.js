import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import State from './comp/State';
import Reduc from './comp/Reduc';
import Eff from './comp/Eff';
import Uref from './comp/Uref';
function App() {

   
  
  return (
    <div >
    <State/>
    <Reduc/>
    <Eff/>
    <Uref/>
    </div>
  );
}

export default App;
