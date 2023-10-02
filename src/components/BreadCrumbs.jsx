const BreadCrumbs = ({ data }) => {
  return (
    <>
      <div className="flex items-start gap-2 my-6">
        <div className="text-[#413c6d] font-workSans text-lg font-medium leading-normal">
          <span>Home</span>
          <span className="text-[#141414] px-2">/</span>
          <span>Recent Videos</span>
          <span className="text-[#141414] px-2">/</span>
          <span>{data?.public_id}</span>
        </div>
      </div>
    </>
  );
};

export default BreadCrumbs;
