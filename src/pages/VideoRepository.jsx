import React, { useEffect, useState } from "react";
import axios from "axios";
import RecentVideo from "../components/RecentVideo";
import TopContent from "../components/TopContent";

const VideoRepository = () => {
  const [data, setData] = useState([]);

  return (
    <>
      <div>
        <TopContent />
        <div className="my-10 max-w-[1440px] h-px bg-black/10 mx-auto" />
        <RecentVideo data={data} />
      </div>
    </>
  );
};

export default VideoRepository;
