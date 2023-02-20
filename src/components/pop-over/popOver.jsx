import * as Popover from "@radix-ui/react-popover";
import "./popOver.scss";

export const PopOver = () => {
  return (
    <>
      <Popover.Root>
        <Popover.Trigger className="trigger">?</Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className="content">
            <div>
              <label>Label:</label>
              <input type="text" />
            </div>
            <div>
              <label>Duration:</label>
              <input type="number" />
            </div>

            <Popover.Arrow className="arrow" />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </>
  );
};
