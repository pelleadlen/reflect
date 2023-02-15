import "./start-button.scss";

export const StartButton = (props) => {
  const { onStartStop, isActive } = props;

  return (
    <button onClick={onStartStop} className="play__btn">
      {isActive ? "Stop" : "Start"}
      <div
        className={`play__btn--indicator ${
          isActive ? "play__btn--active" : ""
        }`}
      />
    </button>
  );
};
