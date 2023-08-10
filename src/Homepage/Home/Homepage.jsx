import Blog from "../Blog";
import Counter from "../Counter";

const Homepage = () => {
  return (
    <div className="px-[5%]">
      <h1>This is homepage.</h1>
      <Blog></Blog>
      <Counter></Counter>
    </div>
  );
};

export default Homepage;
