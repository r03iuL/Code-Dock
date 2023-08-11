
import Blog from "../Blog";
import Counter from "../Counter";
import Features from "../Features";
import Faq from "../Faq";


const Homepage = () => {
  return (
    <div className="px-[5%] mx-auto max-w-7xl ">
      <h1>This is homepage.</h1>
      <Blog></Blog>
      <Counter></Counter>
      <Features></Features>
      <Faq></Faq>
    </div>
  );
};

export default Homepage;
