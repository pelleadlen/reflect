import * as Radio from "@radix-ui/react-radio-group";
import "./radio-group.scss";
import { useState } from "react";

const mode = [
  { id: "t1", title: "Focus" },
  { id: "t2", title: "Break" },
  { id: "t3", title: "Long Break" },
];

export const RadioGroup = ({ onValueChange }) => {
  return (
    <>
      <Radio.Root
        defaultValue="Focus"
        onValueChange={onValueChange}
        className="radio-group-root"
      >
        {mode.map((timer) => (
          <div key={timer.id} className="radio-button-wrapper">
            <div>
              <Radio.Item
                value={timer.title}
                className="radio-group-item"
                id={timer.id}
              >
                <Radio.Indicator className="radio-group-indicator" />
              </Radio.Item>
              <label className="label" htmlFor={timer.id}>
                {timer.title}
              </label>
            </div>
            <button className="tools">?</button>
          </div>
        ))}
      </Radio.Root>
    </>
  );
};
