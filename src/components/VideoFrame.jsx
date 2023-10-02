import video_frame from "../assets/video_frame.png";

const VideoFrame = ({ data }) => {
  return (
    <div className="relative flex justify-center items-center self-stretch rounded-3xl border border-[#e7e7ed] h-full w-full">
      {/* <video className="h-full w-full object-cover" src={data} controls></video> */}
      <div className="flex px-4 py-2 m-2 items-center gap-2 rounded bg-[#e7e7ed] absolute bottom-0 right-0">
        <p className="font-workSans font-medium leading-normal">01:34</p>
      </div>
    </div>
  );
};

export default VideoFrame;
