import Blog from "../Blog";
import Faq from "../Faq";

const Homepage = () => {
    return (
        <div className="mx-auto max-w-7xl ">
            <Blog></Blog>
            <Faq></Faq>
        </div>
    );
};

export default Homepage;