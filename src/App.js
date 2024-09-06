import React, { Children } from 'react';
import ClassProps from './ClassProps';
import Functionprops from './Functionalprops';
import PatReg from './PatReg/patReg';
import UseEffectHook from './components/UseEffectHook';
import TODO from './TODO/TodoList';
import './App.css';
import Final from './components/UseEffect-Ex2';
import Index from './components/UseEffect-Ex1';
import SampleList from './Example1/sampleList';
import UseRefHook from './components/UseRefHook';
import ReducerTutorial from './components/UseReducerHook';
import UseMemoHook from './components/UseMemoHook';
import ProgressStatusBar from './components/persentageStatus';
import UseCallbackHook from './components/UseCallbackHook';
import Clock from './components/clock';
import ArticlesSorting from './articles';
import CountrySel from './components/countryCitySel';

const App = () =>{

    return (
    <div>
      {/* <ClassProps name="Learn React" place="place x">
      
      <p>Hi React</p>
      </ClassProps>
      <Functionprops name="Hellow learner" place="placeY"></Functionprops> */}
      {/* <PatReg></PatReg> */}
     {/* <UseEffectHook></UseEffectHook> */}
     {/* <Final></Final> */}
     {/* <ArticlesSorting></ArticlesSorting> */}
     <CountrySel></CountrySel>
     {/* <Index></Index> */}
       {/* <UseRefHook></UseRefHook>  */}
       {/* <UseCallbackHook></UseCallbackHook> */}
      {/* <UseEffectHook></UseEffectHook>
      <ReducerTutorial></ReducerTutorial> */}
      {/* <UseMemoHook></UseMemoHook> */}
     
      {/* <Clock></Clock> */}
      {/* <ProgressStatusBar></ProgressStatusBar> */}
    </div>
    )
  

}

export default App;
