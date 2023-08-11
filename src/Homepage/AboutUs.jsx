import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import { useEffect, useState } from "react";

const AboutUs = () => {
    const [about, setAbout] = useState([])
    useEffect(() => {
        fetch('about.json')
            .then(res => res.json())
            .then(data => {
                setAbout(data)
            })
    }, [])
    return (
        <section className="lg:w-3/4 mx-auto">
            <div className="text-center my-6 w-3/4 mx-auto">
                <h2 className="text-2xl my-4">About Us</h2>
                <p className="text-lg">We're Reactronauts, a hub for sharing code and ideas. Our platform makes coding collaboration effortless, helping developers connect, learn, and create together. Join us to explore the world of code sharing and take your projects to new heights.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

                {
                    about.map(member => <div key={member.id} className="mx-auto">
                        <div>
                            <img src={member.image} className="rounded-2xl h-[310px] w-80 bg-slate-300 transition-transform transform-gpu duration-300 hover:scale-110" alt="" />
                        </div>
                        <div className="h-20 w-60 bg-slate-300 rounded-xl relative bottom-11 left-9">
                            <h2 className="text-2xl py-2 text-center text-black ">{member.name}</h2>
                            <div className="flex justify-evenly bg-stone-600 p-3 transition-transform transform-gpu duration-300 hover:scale-110 rounded-md">
                                <Link to={member.fb}><FaFacebook></FaFacebook></Link>
                                <Link to={member.github}><FaGithub></FaGithub></Link>
                                <Link to={member.linkedin}><FaLinkedin></FaLinkedin></Link>
                            </div>
                        </div>
                    </div>)
                }

            </div>

        </section>
    );
};

export default AboutUs;



