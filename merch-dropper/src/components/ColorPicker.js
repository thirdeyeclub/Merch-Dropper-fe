import React, { Fragment } from "react";
import shirtsColors from "../utils/shirtColors.js";

const ColorPicker = () => {
  const colors = shirtsColors;

  return (
    <Fragment>
      {colors.map((color) => (
        <option value={color}>{color}</option>
      ))}
    </Fragment>
  );
};
export default ColorPicker;
