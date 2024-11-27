import React, { Children } from 'react';
import ClassProps from './ClassProps';
import Functionprops from './Functionalprops';
import PatReg from './PatReg/patReg';
import UseEffectHook from './components/UseEffectHook';
import TODO from './TODO/TodoList';
import './App.css';
import Final from './components/UseEffect-Ex2';
import Index from './components/UseEffect-Ex1';
import UseRefHook from './components/UseRefHook';
import ReducerTutorial from './components/UseReducerHook';
import TodoList from './components/TodoList';
import ProgressStatusBar from './components/persentageStatus';
import dropDownSel from './components/dropDownSel';
import Clock from './components/clock';
import ArticlesSorting from './ArticlesSort';
import CountrySel from './components/countryCitySel';
import PaginationArticles from './components/PaginationArticles';
import GuestForm from './components/GuestForm';

const App = ({articles}) =>{

    return (
    <div>
      {/* <ClassProps name="Learn React" place="place x">
      
      <p>Hi React</p>
      </ClassProps>
      <Functionprops name="Hellow learner" place="placeY"></Functionprops> */}
      {/* <PatReg></PatReg> */}
     {/* <UseEffectHook></UseEffectHook> */}
     {/* <Final></Final> */}
     <GuestForm></GuestForm>
     <ArticlesSorting articles={articles}></ArticlesSorting>
     <CountrySel></CountrySel>
     {/* <Index></Index> */}
       {/* <UseRefHook></UseRefHook>  */}
       {/* <dropDownSel></dropDownSel> */}
      {/* <UseEffectHook></UseEffectHook>
      <ReducerTutorial></ReducerTutorial> */}
      {/* <TodoList></TodoList> */}
     
      {/* <Clock></Clock> */}
      <ProgressStatusBar></ProgressStatusBar>
      {/* <PaginationArticles></PaginationArticles> */}
    </div>
    )
  

}

export default App;
