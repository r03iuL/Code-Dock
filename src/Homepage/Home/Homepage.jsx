
import Blog from "../Blog";
import Counter from "../Counter";
import Features from "../Features";

const Homepage = () => {
  return (
    <div className="px-[5%]">
      <h1>This is homepage.</h1>
      <Blog></Blog>
      <Counter></Counter>
    <Features></Features>
    </div>
  );

};

export default Homepage;
