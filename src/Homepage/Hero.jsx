import img from "/Img.png";
const Hero = () => {
  return (
    <div className="container mx-auto">
      <div className="hero min-h-[85vh]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={img} className="w-full max-w-md rounded-lg " />
          <div className="flex flex-col px-2">
            <h1 className="text-4xl lg:text-6xl font-bold font-mono">
              Code, Collaborate, Engage & Communicate!{" "}
            </h1>
            <p className="font-semibold text-lg text-justify font-mono py-4 ">
              Welcome to Code Dock, where innovation comes alive. Code with
              cutting-edge tools, collaborate seamlessly with your team, engage
              in a vibrant community, and communicate effortlessly. Unleash your
              potential with us!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
