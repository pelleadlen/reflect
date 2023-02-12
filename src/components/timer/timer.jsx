import "./timer.scss";
import { useEffect, useState } from "react";
import { RadioGroup } from "../radio-group/radioGroup";
import { StartButton } from "../start-button/startButton";

export const Timer = () => {
  const [value, setValue] = useState("Focus");

  let timerText =
    value === "Focus" ? "25:00" : value === "Break" ? "05:00" : "45:00";

  return (
    <div className="container">
      <RadioGroup onValueChange={setValue} />
      <h1>{timerText}</h1>
      <StartButton />
    </div>
  );
};
