import UpdateClock from "../updateClock/updateClock.js"

const startClock = (setIntervalId, setCurrentTime) => {
  const startTime = Date.now();
  setIntervalId(
    setInterval(() => {
    const currentTime = Date.now();
    const time = currentTime - startTime;
    UpdateClock(time, setCurrentTime);
    }, 1000))

}

export default startClock;