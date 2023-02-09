import { RadioButton } from "./radioButton"
import "./modeSelector.scss";


export const ModeSelector = () => {
  return (
<form>
    <RadioButton label="Focus" />
    <RadioButton label="Break" />
    <RadioButton label="Long Break" />
</form>
  )
}
