import React from "react";
import SideBar from "./SideBar";
import Video from "./Video";
import { useAuth } from "../context/authProvider";

function Home() {
  const { data } = useAuth();
  console.log(data);

  return (
    <div className="flex">
      <SideBar />
      <div>
        {data.map((item) => {
          if (item.type !== "video") return false;
          return <Video key={item.id} video={item?.video} />;
        })}
      </div>
    </div>
  );
}

export default Home;
