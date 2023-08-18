import { Player } from '@lottiefiles/react-lottie-player';
import textedit from '../../src/assets/textedit.json'
import hosting from '../../src/assets/hosting.json'
import verson from '../../src/assets/verson.json'

const Features = () => {
    return (
        <div className="container max-w-screen-lg mx-auto">
            <div className=" text-center   mx-auto text-3xl uppercase  font-bold py-[2%] flex flex-col w-1/3">
                <h3 className="">FEATURE</h3>
                <div className="divider "></div>
            </div>
            <div className=" grid  gap-4 mt-7">
                <div className=" shadow-lg rounded-lg p-3 border-2">
                    <div className="grid grid-cols-3 items-center">
                       
                        <Player
                            autoplay
                            loop
                            src={hosting}
                            style={{ height: '120px', }}
                        >
                        </Player>
                        <p className="col-span-2">
                        <h2 className="text-2xl font-bold    ">Secure Code Hosting Platform</h2>The Secure Code Hosting Platform provides a robust and fortified environment for developers to safely store, manage, and collaborate on their code projects. With advanced security measures, encryption, and access controls, it ensures the confidentiality and integrity of your codebase, fostering seamless teamwork while safeguarding sensitive information.</p>
                    </div>
                </div>
                <div className="shadow-lg rounded-lg p-3 border-2">
                     <div className=" grid grid-cols-3 items-center">
                        <p className="col-span-2">
                        <h2 className="text-2xl font-bold    ">GitHub-Enhanced Text Editor for Collaborative Coding</h2>
                            The GitHub-Enhanced Text Editor for Collaborative Coding seamlessly blends with GitHubs collaboration framework, enabling real-time code editing, syntax refinement, and conflict resolution. It grants direct repository access, empowers comprehensive code review, and offers version history tracking, streamlining collaborative development on GitHub projects. This tool elevates the collaborative coding experience, fostering efficient teamwork and enhanced code quality within the GitHub ecosystem.</p>
                        <Player
                            autoplay
                            loop
                            src={textedit}
                            style={{ height: '180px', }}
                        >
                        </Player>
                    </div>
                </div>
                <div className="shadow-lg rounded-lg p-3 border-2">
                     <div className="grid grid-cols-3 items-center">
                    <Player
                            autoplay
                            loop
                            src={verson}
                            style={{ height: '200px', }}
                        >
                        </Player>
                        <p className="col-span-2">
                        <h2 className="text-2xl font-bold  ">Efficient Version Control for Streamlined Development</h2>Efficient Version Control for Streamlined Development involves using specialized tools and practices to manage and track changes made to a codebase. It enables development teams to collaborate seamlessly, maintain a history of code modifications, and ensure code quality. By creating branches for new features or fixes and merging changes systematically, version control minimizes conflicts and aids in code review. This practice fosters an organized workflow, accountability, and faster development cycles, leading to high-quality software releases.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;