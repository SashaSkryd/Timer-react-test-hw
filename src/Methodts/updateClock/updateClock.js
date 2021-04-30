import Pad from "../pad/pad.js";

export default function updateClock(time,setCurrentTime) {
  const hours = Pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = Pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = Pad(Math.floor((time % (1000 * 60)) / 1000));

  setCurrentTime({ hours, mins, secs });
}
