import React, { useEffect, useRef, useState } from "react";

function Countdown() {
  const [isStart, setIsStart] = useState(false);
  const [isPause, setIsPause] = useState(false);
  const [isTimeUp, setIsTimeUp] = useState(false);

  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  const timerRef = useRef(null);

  const handleStart = () => {
    if (
      days === "" || hours === "" || minutes === "" || seconds === "" ||
      days < 0 || days > 366 ||
      hours < 0 || hours > 23 ||
      minutes < 0 || minutes > 59 ||
      seconds < 0 || seconds > 59
    ) {
      alert("Please enter valid time values (0–366 days, 0–23 hrs, 0–59 mins/secs)");
    } else {
      setIsStart(true);
      setIsPause(false);
      setIsTimeUp(false);
    }
  };

  const handleReset = () => {
    clearInterval(timerRef.current);
    setIsStart(false);
    setIsPause(false);
    setIsTimeUp(false);
    setDays("");
    setHours("");
    setMinutes("");
    setSeconds("");
  };

  const handlePause = () => {
    setIsPause(true);
    clearInterval(timerRef.current);
  };

  const handleResume = () => {
    setIsPause(false);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (value === "") {
      if (id === "days") setDays("");
      else if (id === "hours") setHours("");
      else if (id === "minutes") setMinutes("");
      else if (id === "seconds") setSeconds("");
      return;
    }

    const intValue = parseInt(value);
    if (isNaN(intValue)) return;

    switch (id) {
      case "days":
        setDays(intValue);
        break;
      case "hours":
        setHours(intValue);
        break;
      case "minutes":
        setMinutes(intValue);
        break;
      case "seconds":
        setSeconds(intValue);
        break;
      default:
        break;
    }
  };

const runTimer = () => {
  setSeconds((prevSec) => {
    let newSec = prevSec;
    let newMin = minutes;
    let newHr = hours;
    let newDay = days;

    if (prevSec > 0) {
      newSec = prevSec - 1;
    } else {
      if (minutes > 0) {
        newMin -= 1;
        newSec = 59;
      } else if (hours > 0) {
        newHr -= 1;
        newMin = 59;
        newSec = 59;
      } else if (days > 0) {
        newDay -= 1;
        newHr = 23;
        newMin = 59;
        newSec = 59;
      } else {
        // All values are zero
        clearInterval(timerRef.current);
        setIsStart(false);
        setIsTimeUp(true);
        return 0; // Important: stop the state update here
      }
    }

    setDays(newDay);
    setHours(newHr);
    setMinutes(newMin);
    return newSec;
  });
};


  useEffect(() => {
    if (isStart && !isPause) {
      timerRef.current = setInterval(runTimer, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [isStart, isPause]);

  return (
    <>
      <h1 className="head">Countdown Timer</h1>
      <div className="main">
        {!isStart && (
          <div>
            <h2>DAYS : HOURS : MINUTES : SECONDS</h2>
            <input
              id="days"
              type="number"
              value={days === "" ? "" : days}
              onChange={handleInputChange}
            />{" "}
            :
            <input
              id="hours"
              type="number"
              value={hours === "" ? "" : hours}
              onChange={handleInputChange}
            />{" "}
            :
            <input
              id="minutes"
              type="number"
              value={minutes === "" ? "" : minutes}
              onChange={handleInputChange}
            />{" "}
            :
            <input
              id="seconds"
              type="number"
              value={seconds === "" ? "" : seconds}
              onChange={handleInputChange}
            />
            <br />
            <button className="start" onClick={handleStart}>Start</button>
          </div>
        )}

        {isStart && (
          <div className="condown">
            <h2>DAYS : HOURS : MINUTES : SECONDS</h2>
            <div className="cdays">{String(days).padStart(2, "0")}</div>
            <span>:</span>
            <div className="chours">{String(hours).padStart(2, "0")}</div>
            <span>:</span>
            <div className="cminutes">{String(minutes).padStart(2, "0")}</div>
            <span>:</span>
            <div className="cseconds">{String(seconds).padStart(2, "0")}</div>

            <div className="btn">
              {isTimeUp && <div className="timesup">⏰ TIME'S UP!</div>}
              {!isPause && <button className="pause" onClick={handlePause}>Pause</button>}
              {isPause && <button className="resume" onClick={handleResume}>Resume</button>}
              <button className="reset" onClick={handleReset}>Reset</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Countdown;
