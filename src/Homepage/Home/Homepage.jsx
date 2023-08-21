import AboutUs from "../AboutUs";

import Blog from "../Blog";
import Counter from "../Counter";
import Features from "../Features";
import Faq from "../Faq";

import Hero from "../Hero";

const Homepage = () => {
  return (
    <div className="px-[5%] mx-auto max-w-7xl ">
      <Hero></Hero>
      <Counter></Counter>
      <Features></Features>
      <Faq></Faq>
      <Blog></Blog>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Homepage;
