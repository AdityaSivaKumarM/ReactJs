// import { useEffect, useState } from "react";
// //import { ClockWrapper, Hour, Minute, Second, Scale, Cover } from "./styled";
// import "./Styles.css";

// function Clock() {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const timerId = setInterval(() => setTime(new Date()), 1000);

//     return () => clearInterval(timerId);
//   }, []);

//   return (
//     <ClockWrapper>
//       <Hour deg={`${time.getHours() * 30}`} />
//       <Minute deg={`${time.getMinutes() * 12}`} />
//       <Second deg={`${time.getSeconds() * 6}`} />
//       <Scale />
//       <Cover />
//     </ClockWrapper>
//   );
// }

// export default Clock;

//Digital Clock:
 

import { useState } from "react";
import "./Styles.css";

export default function App() {

//      let time  = new Date().toLocaleTimeString()

//   const [ctime,setTime] = useState(time)
//   const UpdateTime=()=>{
//     time =  new Date().toLocaleTimeString()
//     setTime(time)
//   }
//   setInterval(UpdateTime)
//   return <h1>{ctime}</h1>
	const [time, setTime] = useState({
		sec: 0,
		min: 0,
		hr: 0
		});

	const [intervalId, setIntervalId] = useState();

	const updateTimer = () => {
		setTime((prev) => {
			let newTime = { ...prev };
			// update sec and see if we need to increase min
			if (newTime.sec < 59) newTime.sec += 1;
			else {
				newTime.min += 1;
				newTime.sec = 0;
			}
			// min has increased in *newTime* by now if it was updated, see if it has crossed 59
			if (newTime.min === 60) {
				newTime.min = 0;
				newTime.hr += 1;
			}

			return newTime;
		});
	};

	const pauseOrResume = () => {
		if (!intervalId) {
			let id = setInterval(updateTimer, 1000);
			setIntervalId(id);
		} else {
			clearInterval(intervalId);
			setIntervalId("");
		}
	};

	const reset = () => {
		clearInterval(intervalId);
		setTime({
			sec: 0,
			min: 0,
			hr: 0
		});
	};

	return (
		<div className="App">
			<h1>Stopwatch</h1>
			<h2>{`${time.hr < 10 ? 0 : ""}${time.hr} : ${time.min < 10 ? 0 : ""}${time.min} : ${time.sec < 10 ? 0 : ""}${time.sec}`}</h2>
			<button onClick={pauseOrResume}>pause/un-pause</button>
			<button onClick={reset}>reset</button>
		</div>
	);
   // (or)
// 	const [time, setTime] = useState(0);
//   const [start, setStart] = useState();
//   useEffect(() => {
//     let interval = null;
//     if (start) {
//       interval = setInterval(() => {
//         setTime((prev) => prev + 10);
//       }, 1000);
//     } else {
//       clearInterval(interval);
//     }
//     return () => clearInterval(interval);
//   });
//   return (
//     <div className="App">
//       <h1>Stop Watch</h1>
//       <h2>{time}</h2>
//       <button onClick={() => setStart(true)}>Start</button>
//       <button onClick={() => setStart(false)}>Stop</button>
//     </div>
//   );
}
