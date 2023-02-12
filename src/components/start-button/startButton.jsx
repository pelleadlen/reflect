import { useState } from "react";
import "./start-button.scss";

export const StartButton = (props) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <button onClick={() => setIsActive(!isActive)} className="start-btn">
      {isActive ? "Stop" : "Start"}
      <div
        className={`start-indicator ${
          isActive ? "start-indicator-active" : ""
        }`}
      />
    </button>
  );
};
