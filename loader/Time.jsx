import moment from "moment";
import React from "react";

function Time({ time }) {
  const videoTime = moment()?.startOf("day")?.seconds(time)?.format("H:mm:ss");
  return (
    <span className="absolute bottom-2 right2 bg-gray-500 text-white px-2 py-1 text-xs rounded-md">
      {videoTime}
    </span>
  );
}

export default Time;
