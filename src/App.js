import React, { Children } from 'react';
import ClassProps from './ClassProps';
import Functionprops from './Functionalprops';
import PatReg from './PatReg/patReg';
//import UseEffectHook from './components/UseEffectHook';
import TODO from './TODO/TodoList';
import './App.css';

const App = () =>{

    return (
    <div>
      {/* <ClassProps name="Learn React" place="place x">
      
      <p>Hi React</p>
      </ClassProps>
      <Functionprops name="Hellow learner" place="placeY"></Functionprops> */}
      {/* <PatReg></PatReg> */}
     {/* <UseEffectHook></UseEffectHook> */}
      <TODO></TODO>
    </div>
    )
  

}

export default App;
