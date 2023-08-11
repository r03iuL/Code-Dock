const Blog = () => {
  return (
    <div>
        <h2 className="text-center text-3xl lg:text-5xl font-semibold mb-5">
        Blogs
      </h2>
      <p className="w-[90%] lg:w-7/12 text-center mx-auto">
        Below you&apos;ll find answers to the most common questions you may have
        on CodeDock. Also, please feel free to check out our Facebook & Google
        Advertising Guides & Academy. If you still can&apos;t find the answer
        your&apos;re lokking for, just Contact us!
      </p>
        <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="card bg-white shadow-xl">
          <div className="card-body text-gray-600 ">
            <h2 className="card-title font-semibold">
              <span className="pb-12">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="#008000"
                    d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                  />
                </svg>
              </span>
              Getting Started with GitHub: A Beginner's Guide
            </h2>

            <p>
              Are you new to the world of version control and collaborative
              coding?{" "}
            </p>

            {/* You can open the modal using ID.showModal() method */}
            <button
              className="btn"
              onClick={() => window.my_modal_4.showModal()}
            >
              See More
            </button>
            <dialog id="my_modal_4" className="modal">
              <form
                method="dialog"
                className="modal-box w-11/12 max-w-5xl bg-white"
              >
                <h2 className="card-title font-semibold pb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="#008000"
                      d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                    />
                  </svg>
                  Getting Started with GitHub: A Beginner's Guide
                </h2>

                <p>
                  Are you new to the world of version control and collaborative
                  coding? This blog post is the perfect starting point for you.
                  GitHub, a widely used platform, offers an intuitive interface
                  to manage and track changes in your codebase. In this
                  comprehensive guide, we'll walk you through the essential
                  steps to kickstart your GitHub journey.{" "}
                </p>

                <p className="pt-3">
                  {" "}
                  <span className="font-bold">
                    Creating Your GitHub Account:
                  </span>{" "}
                  We'll begin with creating your GitHub account. Learn how to
                  choose a suitable username, set up your profile, and
                  personalize your account settings.{" "}
                </p>

                <p className="pt-3">
                  {" "}
                  <span className="font-bold">
                    Setting Up Your First Repository:
                  </span>{" "}
                  Once your account is ready, we'll guide you through creating
                  your very first repository. Understand the importance of
                  repository names, descriptions, and license choices.{" "}
                </p>

                <p className="pt-3">
                  {" "}
                  <span className="font-bold">
                    Making Commits and Pushing Changes:
                  </span>{" "}
                  Discover the core of version control – making commits and
                  pushing changes to your repository. Learn how to write
                  informative commit messages and track modifications
                  effectively.{" "}
                </p>

                <p className="pt-3">
                  {" "}
                  <span className="font-bold">Branching Strategies:</span> We'll
                  delve into the concept of branching, an essential practice to
                  keep your main codebase safe while you work on new features.
                  Understand when and how to create branches, as well as how to
                  switch between them.{" "}
                </p>

                <p className="pt-3">
                  {" "}
                  <span className="font-bold">Collaboration Basics:</span>{" "}
                  Collaboration lies at the heart of GitHub. You'll explore how
                  to add collaborators to your project, grant them appropriate
                  permissions, and sync your work with the team seamlessly.
                </p>

                <div className="modal-action">
                  {/* if there is a button, it will close the modal */}
                  <button className="btn">Close</button>
                </div>
              </form>
            </dialog>
          </div>
        </div>

        <div className="card bg-white shadow-xl">
          <div className="card-body text-gray-600 ">
            <h2 className="card-title font-semibold">
              <span className="pb-12">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="#008000"
                    d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                  />
                </svg>
              </span>
              Mastering Collaboration with GitHub: Effective Pull Request
              Workflow
            </h2>

            <p>
              Efficient collaboration is essential for any successful software
              project.
            </p>

            {/* You can open the modal using ID.showModal() method */}
            <button
              className="btn"
              onClick={() => window.my_modal_5.showModal()}
            >
              See More
            </button>
            <dialog id="my_modal_5" className="modal">
              <form
                method="dialog"
                className="modal-box w-11/12 max-w-5xl bg-white"
              >
                <h2 className="card-title font-semibold pb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="#008000"
                      d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                    />
                  </svg>
                  Mastering Collaboration with GitHub: Effective Pull Request
                  Workflow
                </h2>

                <p>
                  Efficient collaboration is essential for any successful
                  software project. GitHub's pull request (PR) workflow
                  streamlines this process, making it easy to review and
                  integrate code changes. In this blog post, we'll dive deep
                  into the world of pull requests, equipping you with the
                  knowledge to collaborate effectively.{" "}
                </p>

                <p className="pt-3">
                  {" "}
                  <span className="font-bold">Forking Repositories:</span> Learn
                  about forking repositories and why it's useful. We'll guide
                  you through the process of creating a fork, making changes in
                  your forked repository, and syncing with the original project.{" "}
                </p>

                <p className="pt-3">
                  {" "}
                  <span className="font-bold">
                    Creating Pull Requests:
                  </span>{" "}
                  Discover the art of creating pull requests. Understand how to
                  pick the right base and compare branches, write clear PR
                  descriptions, and address any potential issues.{" "}
                </p>

                <p className="pt-3">
                  {" "}
                  <span className="font-bold">Review Process:</span> Effective
                  code reviews are vital for maintaining code quality. We'll
                  provide tips for both reviewers and contributors, helping you
                  navigate the review process smoothly.{" "}
                </p>

                <p className="pt-3">
                  {" "}
                  <span className="font-bold">
                    Resolving Merge Conflicts:
                  </span>{" "}
                  Merge conflicts can be daunting, but fear not! We'll explain
                  what they are and guide you through resolving them step by
                  step.
                </p>

                <div className="modal-action">
                  {/* if there is a button, it will close the modal */}
                  <button className="btn">Close</button>
                </div>
              </form>
            </dialog>
          </div>
        </div>

        <div className="card bg-white shadow-xl">
          <div className="card-body text-gray-600 ">
            <h2 className="card-title font-semibold">
              <span className="pb-12">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="#008000"
                    d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                  />
                </svg>{" "}
              </span>
              GitHub Actions: Automate Your Development Workflow
            </h2>

            <p>Manual tasks can be time-consuming and error-prone. </p>

            {/* You can open the modal using ID.showModal() method */}
            <button
              className="btn"
              onClick={() => window.my_modal_7.showModal()}
            >
              See More
            </button>
            <dialog id="my_modal_7" className="modal">
              <form
                method="dialog"
                className="modal-box w-11/12 max-w-5xl bg-white"
              >
                <h2 className="card-title font-semibold pb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="#008000"
                      d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                    />
                  </svg>
                  GitHub Actions: Automate Your Development Workflow
                </h2>

                <p>
                  Manual tasks can be time-consuming and error-prone. Enter
                  GitHub Actions – a powerful tool that allows you to automate
                  various aspects of your development workflow. In this blog
                  post, you'll discover how to harness the power of automation
                  for your projects.{" "}
                </p>

                <p className="pt-3">
                  {" "}
                  <span className="font-bold">
                    Introduction to GitHub Actions:
                  </span>{" "}
                  Get acquainted with the concept of GitHub Actions. We'll
                  explain the components involved, including workflows, jobs,
                  and steps.{" "}
                </p>

                <p className="pt-3">
                  {" "}
                  <span className="font-bold">
                    Setting Up Basic Workflows:
                  </span>{" "}
                  Learn by doing! Follow our tutorial to set up a basic workflow
                  that automatically runs tests on your code whenever you push
                  changes to your repository.
                </p>

                <p className="pt-3">
                  {" "}
                  <span className="font-bold">
                    {" "}
                    Continuous Deployment with GitHub Actions:{" "}
                  </span>{" "}
                  Explore the world of continuous deployment. We'll guide you
                  through automating the deployment of your application to
                  hosting platforms like Heroku or Netlify.
                </p>

                <p className="pt-3">
                  {" "}
                  <span className="font-bold">
                    {" "}
                    Customizing Workflows:{" "}
                  </span>{" "}
                  GitHub Actions offers flexibility in customization. Discover
                  how to use environment variables, secrets, and conditional
                  logic to create tailored workflows that match your project's
                  requirements.
                </p>

                <div className="modal-action">
                  {/* if there is a button, it will close the modal */}
                  <button className="btn">Close</button>
                </div>
              </form>
            </dialog>
          </div>
        </div>

        <div className="card bg-white shadow-xl">
          <div className="card-body text-gray-600 ">
            <h2 className="card-title font-semibold">
              <span className="pb-6">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="#008000"
                    d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                  />
                </svg>
              </span>
              Version Control Strategies: Git Flow vs. GitHub Flow
            </h2>

            <p>
              Version control strategies lay the foundation for successful
              collaboration and code management.
            </p>

            {/* You can open the modal using ID.showModal() method */}
            <button
              className="btn"
              onClick={() => window.my_modal_8.showModal()}
            >
              See More
            </button>
            <dialog id="my_modal_8" className="modal">
              <form
                method="dialog"
                className="modal-box w-11/12 max-w-5xl bg-white"
              >
                <h2 className="card-title font-semibold pb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="#008000"
                      d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                    />
                  </svg>
                  Version Control Strategies: Git Flow vs. GitHub Flow
                </h2>

                <p>
                  Version control strategies lay the foundation for successful
                  collaboration and code management. In this detailed
                  comparison, we'll dissect two popular approaches – Git Flow
                  and GitHub Flow – helping you choose the right strategy for
                  your project.{" "}
                </p>

                <p className="pt-3">
                  {" "}
                  <span className="font-bold">Git Flow:</span> Learn about the
                  Git Flow approach, which emphasizes feature branches,
                  releases, and maintenance branches. We'll explain each step of
                  the process and its rationale.{" "}
                </p>

                <p className="pt-3">
                  {" "}
                  <span className="font-bold">GitHub Flow:</span> Dive into
                  GitHub Flow, a simplified approach that revolves around
                  continuous deployment and frequent pull requests. Understand
                  how this strategy streamlines the development process.
                </p>

                <p className="pt-3">
                  {" "}
                  <span className="font-bold">
                    {" "}
                    Comparing Pros and Cons:{" "}
                  </span>{" "}
                  We'll provide an in-depth comparison of the advantages and
                  disadvantages of both Git Flow and GitHub Flow. Consider
                  factors such as team size, project complexity, and release
                  frequency.
                </p>

                <p className="pt-3">
                  {" "}
                  <span className="font-bold">
                    Choosing the Right Strategy:
                  </span>{" "}
                  Armed with insights, you'll be better equipped to make an
                  informed decision on which strategy aligns with your project's
                  needs and goals.
                </p>

                <div className="modal-action">
                  {/* if there is a button, it will close the modal */}
                  <button className="btn">Close</button>
                </div>
              </form>
            </dialog>
          </div>
        </div>

        <div className="card bg-white shadow-xl">
          <div className="card-body text-gray-600 ">
            <h2 className="card-title font-semibold">
              <span className="pb-12">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="#008000"
                    d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                  />
                </svg>{" "}
              </span>
              GitHub Security Best Practices: Keeping Your Code Safe
            </h2>

            <p>
              In an era of heightened cybersecurity concerns, safeguarding your
              code and data is paramount.{" "}
            </p>

            {/* You can open the modal using ID.showModal() method */}
            <button
              className="btn"
              onClick={() => window.my_modal_9.showModal()}
            >
              See More
            </button>
            <dialog id="my_modal_9" className="modal">
              <form
                method="dialog"
                className="modal-box w-11/12 max-w-5xl bg-white"
              >
                <h2 className="card-title font-semibold pb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="#008000"
                      d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                    />
                  </svg>
                  GitHub Security Best Practices: Keeping Your Code Safe
                </h2>

                <p>
                  In an era of heightened cybersecurity concerns, safeguarding
                  your code and data is paramount. This blog post delves into
                  GitHub's security features and provides a comprehensive guide
                  to protecting your projects from potential threats.{" "}
                </p>

                <p className="pt-3">
                  {" "}
                  <span className="font-bold">
                    Two-Factor Authentication (2FA):
                  </span>{" "}
                  Learn how to enable 2FA to add an extra layer of security to
                  your GitHub account, thwarting unauthorized access attempts.{" "}
                </p>

                <p className="pt-3">
                  {" "}
                  <span className="font-bold">Access Control:</span> Discover
                  how to manage access to your repositories effectively. We'll
                  cover topics such as setting repository visibility,
                  collaborating with organizations, and assigning roles.
                </p>

                <p className="pt-3">
                  {" "}
                  <span className="font-bold">
                    {" "}
                    Code Scanning and Vulnerability Alerts:{" "}
                  </span>
                  GitHub offers tools to scan your code for potential
                  vulnerabilities. Understand how to enable these features and
                  address any identified issues.
                </p>

                <p className="pt-3">
                  {" "}
                  <span className="font-bold">
                    Automating Security Checks:
                  </span>{" "}
                  Explore how to integrate automated security checks into your
                  workflow using tools like Dependabot. Keep your dependencies
                  up-to-date and secure effortlessly.
                </p>

                <div className="modal-action">
                  {/* if there is a button, it will close the modal */}
                  <button className="btn">Close</button>
                </div>
              </form>
            </dialog>
          </div>
        </div>

        <div className="card bg-white shadow-xl">
          <div className="card-body text-gray-600 ">
            <h2 className="card-title font-semibold">
              <span className="pb-12">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="#008000"
                    d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                  />
                </svg>{" "}
              </span>
              GitHub for Open Source Projects: Building a Thriving Community
            </h2>

            <p>
              Open source projects thrive on collaboration, engagement, and
              inclusivity.
            </p>

            {/* You can open the modal using ID.showModal() method */}
            <button
              className="btn"
              onClick={() => window.my_modal_10.showModal()}
            >
              See More
            </button>
            <dialog id="my_modal_10" className="modal">
              <form
                method="dialog"
                className="modal-box w-11/12 max-w-5xl bg-white"
              >
                <h2 className="card-title font-semibold pb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="#008000"
                      d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                    />
                  </svg>
                  GitHub for Open Source Projects: Building a Thriving Community
                </h2>

                <p>
                  Open source projects thrive on collaboration, engagement, and
                  inclusivity. GitHub provides a platform to foster such
                  communities. In this blog post, we'll explore the art of
                  building and maintaining a vibrant open source project on
                  GitHub.
                </p>

                <p className="pt-3">
                  {" "}
                  <span className="font-bold">
                    {" "}
                    Contributor Guidelines:
                  </span>{" "}
                  Learn how to set clear contributor guidelines. From code
                  standards to issue templates, discover strategies to encourage
                  meaningful contributions.{" "}
                </p>

                <p className="pt-3">
                  {" "}
                  <span className="font-bold">
                    {" "}
                    Managing Issues Effectively:
                  </span>{" "}
                  Dive into issue management best practices. Understand how to
                  categorize, label, and prioritize issues, making it easier for
                  contributors to get involved.
                </p>

                <p className="pt-3">
                  {" "}
                  <span className="font-bold">
                    Engaging with Contributors:{" "}
                  </span>
                  Discover ways to engage with your contributors and create a
                  sense of belonging. Explore techniques such as acknowledging
                  contributions, organizing community events, and maintaining
                  open communication.
                </p>

                <p className="pt-3">
                  {" "}
                  <span className="font-bold">
                    Pull Request Etiquette:
                  </span>{" "}
                  Establish a healthy pull request culture. Learn how to provide
                  constructive feedback, foster collaboration, and ensure your
                  review process is efficient and respectful.
                </p>

                <p className="pt-3">
                  {" "}
                  <span className="font-bold">
                    Promoting Collaboration:
                  </span>{" "}
                  Explore advanced techniques such as setting up continuous
                  integration for open source projects, automating documentation
                  generation, and encouraging external integrations.
                </p>

                <div className="modal-action">
                  {/* if there is a button, it will close the modal */}
                  <button className="btn">Close</button>
                </div>
              </form>
            </dialog>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Blog;
