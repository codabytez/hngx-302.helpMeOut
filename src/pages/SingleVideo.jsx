import React, { useState, useEffect } from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import SingleVideoDetails from "../components/SingleVideoDetails";
import SingleVideoWebCard from "../components/SingleVideoWebCard";
import TopBar from "../components/TopBar";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleVideo = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://my-hngx-video-upload.onrender.com/api/retrieve_video/${video_id}`
      )
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <div className="p-8 max-w-[1280px] mx-auto">
        <BreadCrumbs data={data} />
        <TopBar data={data} />
        <SingleVideoWebCard data={data} />
        <SingleVideoDetails data={data} />
      </div>
    </>
  );
};

export default SingleVideo;
