import Blog from "../Blog";
import Counter from "../Counter";
import Features from "../Features";
import Hero from "../Hero";

const Homepage = () => {
  return (
    <div className="px-[5%]">
      <Hero></Hero>
      <Blog></Blog>
      <Counter></Counter>
      <Features></Features>
    </div>
  );
};

export default Homepage;
