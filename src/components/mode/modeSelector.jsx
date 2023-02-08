import "./modeSelector.scss";

export const ModeSelector = () => {
  return (
    <div className="time-selector-btn">
      <label>
        <input type="radio" name="radio" value="radio" />
        Focus
      </label>

      <button>?</button>
    </div>
  );
};
