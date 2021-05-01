import UpdateClock from "../updateClock/updateClock.js"

const startClock = (setIntervalId, setCurrentTime, totalTime, setTotalTime) => {
  const startTime = Date.now()
  setIntervalId(
    setInterval(() => {
      const currentTime = Date.now()
      let time = null
      // if (totalTime === null) {
      time = currentTime - startTime

      // }  else {
      // setTotalTime(null);
      // time = (currentTime - totalTime)+(currentTime - startTime) ;

      // };

      UpdateClock(setCurrentTime, time)
    }, 1000)
  )
}

export default startClock
