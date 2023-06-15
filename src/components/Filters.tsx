"use client";

import { useState } from "react";
import { Slider } from "./ui/slider";

const Filters = () => {
  const [value, setValue] = useState([0, 6000]);
  console.log(value);

  return (
    <div className="max-w-xl mx-auto mt-20">
      <Slider
        min={0}
        max={100000}
        defaultValue={[1500, 6000]}
        minStepsBetweenThumbs={1}
        onValueCommit={(v) => setValue(v)}
        step={500}
      />
      <div>{value[0]}</div>
      <div>{value[1]}</div>
    </div>
  );
};

export default Filters;
