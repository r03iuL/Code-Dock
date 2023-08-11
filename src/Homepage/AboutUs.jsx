import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import img from '../assets/istiak.jpg'

const AboutUs = () => {
    return (
        <section className="w-3/4 mx-auto">
            <div className="text-center my-6 w-3/4 mx-auto">
                <h2 className="text-2xl my-4">About Us</h2>
                <p className="text-lg">We're Reactronauts, a hub for sharing code and ideas. Our platform makes coding collaboration effortless, helping developers connect, learn, and create together. Join us to explore the world of code sharing and take your projects to new heights.</p>
            </div>
            <div>
                <div>
                    <img src={img} className="rounded-2xl h-[310px] w-80" alt="" />
                </div>
                <div className="h-20 w-60 bg-slate-300 rounded-xl relative bottom-11 left-9">
                    <h2 className="text-2xl py-2 text-center text-black ">Istiak Ahmed</h2>
                    <div className="flex justify-evenly bg-stone-600 p-3 transition-transform transform-gpu duration-300 hover:scale-110 rounded-md">
                        <Link to=''><FaFacebook></FaFacebook></Link>
                        <Link to=''><FaGithub></FaGithub></Link>
                        <Link to=''><FaLinkedin></FaLinkedin></Link>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default AboutUs;