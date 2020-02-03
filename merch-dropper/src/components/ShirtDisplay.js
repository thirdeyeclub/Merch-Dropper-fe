import React, { useState } from "react";
import axios from "axios";

const ShirtDisplay = ({ garment }, setGarment) => {
  console.log(garment);

  let data = {
    template: { name: "front" },
    product: { id: "canvas-unisex-t-shirt", color: garment.color },
    design: {
      type: garment.printStyle,
      sides: {
        front: {
          artwork: `${garment.artwork}`,
          dimensions: { width: garment.designWidth },
          position: {
            horizontal: garment.designPlacement,
            offset: { top: garment.offsetFromTop }
          }
        }
      }
    },
    output: garment.fileOutput
  };

  let config = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Basic OnRlc3RfZUIza2JJTThFRG5OdHEwenBSSU5fZw=="
    }
  };

  async function makeShirt() {
    const shirtImage = await axios.post(
      "https://cors.x7.workers.dev/https://api.scalablepress.com/v3/mockup",
      data,
      config
    );
    console.log(shirtImage.data.url);
  }

  makeShirt();


  return (
    <div>
      <h1>Shirt Here!</h1>
    </div>
  );
};

export default ShirtDisplay;
