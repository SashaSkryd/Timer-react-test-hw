import INITIAL_TIME from "../../CONST/Cosntants.js";
import start from "../startClock/startClock.js"

const resetClock = (intervalId,setCurrentTime,setIntervalId) => {
  
  setCurrentTime(INITIAL_TIME);
  clearInterval(intervalId)
  start(setIntervalId,setCurrentTime)
}

export default resetClock;
