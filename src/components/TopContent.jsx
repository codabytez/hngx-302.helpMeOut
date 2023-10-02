const TopContent = () => {
  return (
    <>
      <div className="flex justify-between items-center max-w-[1240px] mx-auto">
        <div className="flex flex-col items-start gap-2">
          <h2 className="font-sora text-[#141414] text-[32px] font-bold leading-normal">
            Hello, John Mark
          </h2>
          <p className="text-[#141414]/70 font-workSans text-lg leading-normal">
            Here are your recorded videos
          </p>
        </div>
        <input
          type="text"
          className="flex w-[400px] text-[#c2c2c2] pr-10 p-6 flex-col justify-center shrink-0 rounded-xl border border-[#c3c3c3] text-sm leading-normal items-center gap-4 self-stretch bg-[#b6b3c6]/20 focus:outline-0 placeholder:text-[#c2c2c2]"
          placeholder="Search for a particular video"
        />
      </div>
    </>
  );
};

export default TopContent;
