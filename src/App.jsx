import React from "react"
import { useState } from "react"
import Start from "./Methodts/startClock/startClock.js"
import Stop from "./Methodts/stopClock/stopClock.js"
import Reset from "./Methodts/resetClock/resetClock.js"

import style from "./Modules/styles.module.css"
import INITIAL_TIME from "./CONST/Cosntants.js"

export default function ClockVue() {
  const [currentTime, setCurrentTime] = useState(INITIAL_TIME)
  const [intervalId, setIntervalId] = useState(null)
  const [pauseTime, setPauseTime] = useState(null)
  const [totalTime, setTotalTime] = useState(null)

  const onDoubleClick = () => {
    setPauseTime(currentTime)
    clearInterval(intervalId)
    setIntervalId(null)
    let timesLeft = (currentTime.hours + currentTime.mins + currentTime.secs) * 1000
    let pauseTime = Date.now()
    let getTotalTime = timesLeft + pauseTime
    setTotalTime(getTotalTime)
  }

  return (
    <div className={style.container__main} onDoubleClick={() => onDoubleClick()}>
      <div className={style.container__timer}>
        <h1>Stopwatch</h1>
        <div className={style.container__clock}>
          <h2>
            {currentTime.hours}:{currentTime.mins}:{currentTime.secs}
          </h2>
        </div>
      </div>
      <div className="container__buttons">
        <button type="button" onClick={() => Start(setIntervalId, setCurrentTime, totalTime, setTotalTime)} disabled={intervalId}>
          Start time
        </button>
        <button type="button" onClick={() => Stop(intervalId, setIntervalId, setCurrentTime)}>
          Stop time
        </button>
        <button type="button" onClick={() => Reset(intervalId, setCurrentTime, setIntervalId)}>
          Reset time
        </button>
      </div>
    </div>
  )
}
