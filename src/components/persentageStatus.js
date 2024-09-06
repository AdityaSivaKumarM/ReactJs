
import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./Styles.css";
const ProgressStatusBar = () => {
  // const [progress,setProgress]=useState(0);


  // const handleProgress=(()=>{
  //     if(progress < 100){
  //          setProgress(progress+20);
  //     }
      
  // });
  // const getColor = (()=>{
  //   if(progress < 40){
  //     return '#ff0000';
  //   }else if(progress < 70){
  //     return '#ffa500';
  //   }else{
  //     return '#2ecc71'
  //   }
  // })

  // const handleReset = (()=>{
  //   setProgress(0);
  // })

  // return (
  //   <div>
  //    <div className='container'>
  //     <div className='progress-bar'>
  //       <div className='progress-bar-fill' style={{width:`${progress}%`, backgroundColor:getColor() }}>{""}</div>
  //       <div className='progress-label'>
  //         {progress}%
  //       </div>
  //       <button type='submit' onClick={handleProgress}>Progress</button>
  //       <button type='submit' onClick={handleReset}>Reset</button>
  //     </div>
  //    </div>
  //   </div>
  // )

//circular progress bar
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (percentage < 100) {
        setPercentage(percentage + 1);
      }
    }, 50);
  }, [percentage]);

  return (
    <div className="app">
      {/* <h4>Circular progress bar in React - <a href="https://www.cluemediator.com" target="_blank">Clue Mediator</a></h4> */}
      <h4 style={{textAlign:'center'}}>Circular progress bar</h4>
      <div style={{ width: 150, marginLeft: 20 }}>
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
      </div>
    </div>
  );
}

export default ProgressStatusBar;
