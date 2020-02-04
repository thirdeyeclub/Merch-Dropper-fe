import React, { Fragment, useState } from "react";
import ColorPicker from "./ColorPicker";
import ThumbDisplay from "./ThumbDisplay";
import ShirtDisplay from "./ShirtDisplay";

const ShirtForm = () => {
  const [garment, setGarment] = useState({
    color: "",
    printStyle: "dtg",
    artwork: "",
    designWidth: "7",
    designPlacement: "C",
    offsetFromTop: "2",
    fileOutput: { width: 400, height: 800, padding: 20, format: "png" },
    mockUrl: ""
  });

  const { designWidth, designPlacement, offsetFromTop, mockUrl } = garment;

  const handleChange = (e) => {
    setGarment({ ...garment, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log("e", e);
  };

  return (
    <Fragment>
      <form>
        <ColorPicker
          garment={garment}
          setGarment={setGarment}
          handleChange={handleChange}
        />
        <ThumbDisplay garment={garment} setGarment={setGarment} />
        <label htmlFor="designWidth">Design Width</label>
        <input type="number" name="designWidth" value={designWidth} />
        <label htmlFor="designPlacement">Horizontal Placement</label>
        <select
          name="designPlacement"
          value={designPlacement}
          onChange={handleChange}>
          <option value="L">Left</option>
          <option value="LC">Center-Left</option>
          <option selected value="C">
            Center
          </option>
          <option value="RC">Right-Center</option>
          <option value="R">Right</option>
        </select>
        <label htmlFor="offSetFromTop">Inches From Top</label>
        <input type="number" name="offSetFromTop" value={offsetFromTop} />
        <ShirtDisplay garment={garment} setGarment={setGarment} />
        <button color="success" type="submit">
          Submit
        </button>
      </form>
    </Fragment>
  );
};

export default ShirtForm;
