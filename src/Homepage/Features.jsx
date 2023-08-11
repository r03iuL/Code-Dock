
const Features = () => {
    return (
        <div className="container max-w-screen-lg mx-auto">
            <h1 className="text-3xl font-bold text-orange-500 text-center "> FEATURE</h1>
            <div className=" grid  gap-4 mt-7">
                <div className=" rounded-lg p-3 border-2">
                    <h2 className="text-2xl font-bold text-fuchsia-700 mb-4">Secure Code Hosting Platform</h2>
                    <p className="">The Secure Code Hosting Platform provides a robust and fortified environment for developers to safely store, manage, and collaborate on their code projects. With advanced security measures, encryption, and access controls, it ensures the confidentiality and integrity of your codebase, fostering seamless teamwork while safeguarding sensitive information.</p>
                </div>
                <div className="rounded-lg p-3 border-2">
                    <h2 className="text-2xl font-bold text-fuchsia-700 mb-4">GitHub-Enhanced Text Editor for Collaborative Coding</h2>
                    <p className="">
                        The GitHub-Enhanced Text Editor for Collaborative Coding seamlessly blends with GitHub's collaboration framework, enabling real-time code editing, syntax refinement, and conflict resolution. It grants direct repository access, empowers comprehensive code review, and offers version history tracking, streamlining collaborative development on GitHub projects. This tool elevates the collaborative coding experience, fostering efficient teamwork and enhanced code quality within the GitHub ecosystem.</p>
                </div>
                <div className="rounded-lg p-3 border-2">
                    <h2 className="text-2xl font-bold text-fuchsia-700 mb-4">Efficient Version Control for Streamlined Development</h2>
                    <p className="">Efficient Version Control for Streamlined Development involves using specialized tools and practices to manage and track changes made to a codebase. It enables development teams to collaborate seamlessly, maintain a history of code modifications, and ensure code quality. By creating branches for new features or fixes and merging changes systematically, version control minimizes conflicts and aids in code review. This practice fosters an organized workflow, accountability, and faster development cycles, leading to high-quality software releases.</p>
                </div>
            </div>
        </div>
    );
};

export default Features;