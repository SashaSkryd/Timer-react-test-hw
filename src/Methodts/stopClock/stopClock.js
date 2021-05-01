import INITIAL_TIME from "../../CONST/Cosntants.js"

const stopClock = (intervalId,setIntervalId,setCurrentTime) => {
    clearInterval(intervalId)
    setCurrentTime(INITIAL_TIME)
    setIntervalId(null)
}

export default stopClock
