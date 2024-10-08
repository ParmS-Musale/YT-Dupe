import moment from "moment";
import React from "react";

function Time({ time }) {
  const videoTime = moment().startOf("day").seconds(time).format("H:mm:ss");
  // console.log(videoTime);
  
  return (
    <span className="absolute bottom-2 right-2 bg-black text-white px-2 py-1 text-xs rounded-md">
      {videoTime}
    </span>
  );
}

export default Time;
