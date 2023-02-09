import * as RadioGroup from "@radix-ui/react-radio-group";
import "./radioButton.scss";

export const RadioButton = (props) => {
  return (
    <>
      <form>
        <RadioGroup.Root className="radio-group-root">
          <div className="radio-button-wrapper">
            <div>
              <RadioGroup.Item className="radio-group-item">
                <RadioGroup.Indicator className="radio-group-indicator" />
              </RadioGroup.Item>

              <label>{props.label}</label>
            </div>
            <button className="tools">?</button>
          </div>
        </RadioGroup.Root>
      </form>
    </>
  );
};
