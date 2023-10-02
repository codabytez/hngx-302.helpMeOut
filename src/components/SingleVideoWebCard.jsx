import VideoFrame from "./VideoFrame";

const SingleVideoWebCard = ({ data }) => {
  return (
    <>
      <div className=" mb-10 flex p-4 pb-6 flex-col justify-center items-center gap-6 rounded-3xl border border-[#b6b3c6]/60">
        <VideoFrame data={data} />
      </div>
    </>
  );
};

export default SingleVideoWebCard;
