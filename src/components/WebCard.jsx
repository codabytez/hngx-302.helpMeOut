import { Link } from "react-router-dom";
import VideoFrame from "./VideoFrame";

const Webcard = ({ data }) => {
  return (
    <>
      {/* <Link to={`/video/${data?.id}`}> */}
      <div className="flex w-[557px] p-4 pb-6 flex-col justify-center items-center gap-6 rounded-3xl border border-[rgba(182, 179, 198, 0.60)] bg-[rgba(251, 251, 251, 0.50)]">
        <div className="h-[200px]">
          <VideoFrame data={data} />
        </div>
        <div className="flex justify-between items-start self-stretch">
          <div className="flex flex-col justify-center items-start gap-2 flex-1">
            <h4 className="text-[#141414] font-workSans text-xl font-medium capitalize leading-normal">
              {data?.public_id}
            </h4>
            <p className="text-[#b6b3c6] font-workSans uppercase">
              {data?.createdAt}
            </p>
          </div>
          <div className="flex items-start gap-6">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.9902 17.5H16.5002C19.5202 17.5 22.0002 15.03 22.0002 12C22.0002 8.98 19.5302 6.5 16.5002 6.5H14.9902"
                  stroke="#141414"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 6.5H7.5C4.47 6.5 2 8.97 2 12C2 15.02 4.47 17.5 7.5 17.5H9"
                  stroke="#141414"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 12H16"
                  stroke="#141414"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19C14 17.9 13.1 17 12 17C10.9 17 10 17.9 10 19Z"
                  stroke="#141414"
                  strokeWidth="1.5"
                />
                <path
                  d="M10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5C14 3.9 13.1 3 12 3C10.9 3 10 3.9 10 5Z"
                  stroke="#141414"
                  strokeWidth="1.5"
                />
                <path
                  d="M10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12Z"
                  stroke="#141414"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* </Link> */}
    </>
  );
};

export default Webcard;
