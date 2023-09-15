const Counter = () => {
  
  return (
    <div className="my-5">
      <div className=" text-center mx-auto text-3xl font-mono font-semibold py-[2%] flex flex-col ">
        <h1 className="text-3xl lg:text-5xl">Trusted by developers worlwide </h1>
      </div>
      <div className=" text-center my-8 lg:my-5 lg:mb-[5%] mx-[8%] py-[8%] bg-violet-200 rounded flex flex-col  gap-y-4 lg:flex-row lg:justify-around items-center">
        <div className="flex items-center">
          <div className="">
            <p className="text-violet-800 text-4xl font-bold">200+</p>
            <p className="text-[#757575] font-semibold">Total Git Projects</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="">
            <p className="text-violet-800 text-4xl font-bold">4.5</p>
            <p className="text-[#757575] font-semibold">Ratings</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="">
            <p className="text-violet-800 text-4xl font-bold">40+</p>
            <p className="text-[#757575] font-semibold">Total Members</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
