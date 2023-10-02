import Webcard from "./WebCard";

const RecentVideo = ({ data }) => {
  return (
    <>
      <div className="flex flex-col gap-10 m-auto max-w-[1240px] ">
        <div className="inline-flex flex-col items-start gap-6">
          <p className="text-[#141414]/80 font-workSans text-lg font-medium leading-normal">
            Recent Files
          </p>
          <div className="flex justify-center items-center gap-16">
            {data.map((item) => (
              <Webcard key={item} data={item} />
            ))}
          </div>
        </div>
        <div className="inline-flex flex-col items-start gap-6">
          <p className="text-[#141414]/80 font-workSans text-lg font-medium leading-normal">
            Files from last weeks
          </p>
          <div className="flex justify-center items-center gap-16">
            <Webcard />
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentVideo;
