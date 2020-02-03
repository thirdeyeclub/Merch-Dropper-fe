import React, { Fragment, useState } from "react";
import ColorPicker from "./ColorPicker";
import ThumbDisplay from "./ThumbDisplay";
import designUrls from "../references/designUrls";
import ShirtDisplay from "./ShirtDisplay";

const ShirtForm = () => {
  const logos = designUrls;

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

  const {
    color,
    printStyle,
    artwork,
    designWidth,
    designPlacement,
    offsetFromTop,
    fileOutput,
    mockUrl
  } = garment;

  const handleChange = (e) => {
    setGarment({ ...garment, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log("e", e);
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <select name="color" value={color} onChange={handleChange}>
          <option value="">Select Color</option>
          <ColorPicker />
        </select>

        <ThumbDisplay logos={logos} garment={garment} setGarment={setGarment} />
        <ShirtDisplay garment={garment} setGarment={setGarment} />
        <button color="success" type="submit">
          Submit
        </button>
      </form>
    </Fragment>
  );
};

export default ShirtForm;
