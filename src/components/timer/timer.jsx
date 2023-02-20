import "./timer.scss";
import { useEffect, useState } from "react";
import { RadioGroup } from "../radio-group/radioGroup";
import { StartButton } from "../start-button/startButton";
import { ReloadIcon } from "@radix-ui/react-icons";
import toast, { Toaster } from "react-hot-toast";

export const Timer = () => {
  //UseState
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [value, setValue] = useState("Focus");
  const [isActive, setIsActive] = useState(false);

  //UseEffect

  useEffect(() => {
    if (value === "Focus") {
      setMinutes(25);
      setSeconds(0);
    } else if (value === "Break") {
      setMinutes(5);
      setSeconds(0);
    } else {
      setMinutes(45);
      setSeconds(0);
    }
  }, [value]);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          } else {
            clearInterval(interval);
            setIsRunning(false);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, minutes, seconds]);

  //Constants

  const handleStart = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setIsActive(false);
    setMinutes(value === "Focus" ? 25 : 5);
    setSeconds(0);
  };

  //Logic to make the numbers in 00:00 format
  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className="timer">
      <RadioGroup onValueChange={setValue} />
      <div className="timer__time">
        <h1 className="timer__title">
          {timerMinutes}:{timerSeconds}
        </h1>
        {!isActive && seconds !== 0 && (
          <button className="timer__button--reset" onClick={handleReset}>
            <ReloadIcon />
            reset
          </button>
        )}
      </div>
      <StartButton isActive={isActive} onStartStop={handleStart} />
    </div>
  );
};
