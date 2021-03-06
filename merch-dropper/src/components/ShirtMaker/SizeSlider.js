import React, { useState } from "react";
import styled from "styled-components";

const SliderBox = styled.div`

margin: 20px;

label {
    margin-left: 5px;
  }

  input[type="range"] {
    height: 29px;
    -webkit-appearance: none;
    margin: 10px 0;
    width: 250px;
  }
  input[type="range"]:focus {
    outline: none;
  }
  input[type="range"]::-webkit-slider-runnable-track {
    width: 250px;
    height: 8px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000000;
    background: #026fc2;
    border-radius: 6px;
    border: 1px solid #014980;
  }
  input[type="range"]::-webkit-slider-thumb {
    box-shadow: 2px 2px 4px #828282;
    border: 1px solid #000000;
    height: 20px;
    width: 24px;
    border-radius: 6px;
    background: #f0f7ff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -7px;
  }
  input[type="range"]:focus::-webkit-slider-runnable-track {
    background: #026fc2;
  }
  input[type="range"]::-moz-range-track {
    width: 250px;
    height: 8px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000000;
    background: #026fc2;
    border-radius: 6px;
    border: 1px solid #014980;
  }
  input[type="range"]::-moz-range-thumb {
    box-shadow: 2px 2px 4px #828282;
    border: 1px solid #000000;
    height: 20px;
    width: 24px;
    border-radius: 6px;
    background: #f0f7ff;
    cursor: pointer;
  }
  input[type="range"]::-ms-track {
    width: 250px;
    height: 8px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  input[type="range"]::-ms-fill-lower {
    background: #026fc2;
    border: 1px solid #014980;
    border-radius: 12px;
    box-shadow: 0px 0px 0px #000000;
  }
  input[type="range"]::-ms-fill-upper {
    background: #026fc2;
    border: 1px solid #014980;
    border-radius: 12px;
    box-shadow: 0px 0px 0px #000000;
  }
  input[type="range"]::-ms-thumb {
    margin-top: 1px;
    box-shadow: 2px 2px 4px #828282;
    border: 1px solid #000000;
    height: 20px;
    width: 24px;
    border-radius: 6px;
    background: #f0f7ff;
    cursor: pointer;
  }
  input[type="range"]:focus::-ms-fill-lower {
    background: #026fc2;
  }
  input[type="range"]:focus::-ms-fill-upper {
    background: #026fc2;
  }
`;

const SizeSlider = () => {
  const [slider, setSlider] = useState(14);

  const handleChange = (e) => {
    setSlider({ [e.target.name]: e.target.value });
  };

  return (
    <SliderBox>
      <h2>Width</h2>
      <input
        type="range"
        id="width"
        name="width"
        min="1.5"
        max="14"
        step=".25"
        // value={slider}
        onChange={(e) => {
          setSlider({ [e.target.name]: e.target.value });
        }}
      />

      <h3>{slider.width} Inches</h3>
    </SliderBox>
  );
};

export default SizeSlider;

// Category	Size	Description
// standard	14' x 16'	Adult sized garments
// pocket	10' x 10' (including height offset)	Adult sized garments with pockets, i.e. hoodies
// small	10' x 12'	Ladies' and youth sized garments
// youth-pocket	10' x 6' (including height offset)	Youth sized garments with pockets, i.e. hoodies
