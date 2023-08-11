import { Player } from "@lottiefiles/react-lottie-player";
import faqAnimation from "../assets/faq-animation.json";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";
import { useState } from "react";

const Faq = () => {
  const [on, setOn] = useState(false);
  const faqElements = [
    {
      heading: "What is CodeDock and how does it work?",
      answer:
        "CodeDock is the home for all developers—a platform where you can share code, contribute to open source projects, and collaborate with team members. If you’re just getting started with CodeDock, you may know us best as a place for version control and collaboration.",
    },
    {
      heading: "Who is CodeDock for?",
      answer:
        "You! And it’s not just developers who build on small teams, project managers, and college professors all use GitHub to do their best work, in one place.",
    },
    {
      heading: "Why is CodeDock so popular?",
      answer:
        "CodeDock is built by developers for developers, and we’re proud to be home to the world’s largest open source community. With 50 million developers and millions more open source projects, CodeDock has become the go-to place to collaborate and build software together.",
    },
    {
      heading: "Do people use CodeDock only for code?",
      answer:
        "Nope. Like we mentioned above, different people and teams use CodeDock for different projects. While we got our start as a version control platform, CodeDock is now used to manage teams, share resumes, find new projects, track work, and host discussions, just to name a few.",
    },
    {
      heading: "CodeDock Free vs CodeDock's paid tiers?",
      answer:
        "Most of CodeDock functionality is and will be available for free in our Free tier. Our paid tiers include features that are more relevant for managers, directors, and executives. We promise all major features in our scope are available in Free too.",
    },
    {
      heading: "Is CodeDock safe?",
      answer:
        "Millions of teams trust CodeDock to keep their work safe. While security incidents can happen, our CodeDock Security Team goes beyond industry standards to keep you and your code secure.",
    },
    {
      heading: "How do I start using CodeDock?",
      answer: `We saved the best for last. All you need is a CodeDock account and internet access. In this quickstart guide, you will: Create and use a repository
        Start and manage a new branch
        Make changes to a file and push them to CodeDock as commits
        Open and merge a pull request`,
    },
    {
      heading: "Why should I use CodeDock?",
      answer:
        "CodeDock isn’t just a place to share code. It’s a chance to do something bigger. On CodeDock, you can shape the future of software, work with the best developers in the world, and grow your skills and help others.",
    },
  ];
  return (
    <div className="my-16 lg:my-24 text-center">
      <h2 className="text-3xl lg:text-5xl font-semibold mb-5">
        Do you have Questions?
      </h2>
      <p className="w-[90%] lg:w-7/12 mx-auto">
        Below you&apos;ll find answers to the most common questions you may have
        on CodeDock. Also, please feel free to check out our Facebook & Google
        Advertising Guides & Academy. If you still can&apos;t find the answer
        your&apos;re lokking for, just Contact us!
      </p>
      <Player
        autoplay
        loop
        src={faqAnimation}
        style={{ height: "400px", width: "400px" }}
      ></Player>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 mx-4">
        <Accordion className="" allowZeroExpanded>
          {faqElements.slice(0, 4).map((e, i) => (
            <AccordionItem className="text-left" key={i}>
              <AccordionItemHeading onClick={() => setOn(!on)}>
                <AccordionItemButton className="bg-gray-200 font-semibold text-lg border border-gray-400 mb-2 rounded-lg flex items-center justify-between p-3">
                  {e.heading}
                  {on ? (
                    <BsFillArrowUpCircleFill></BsFillArrowUpCircleFill>
                  ) : (
                    <BsFillArrowDownCircleFill></BsFillArrowDownCircleFill>
                  )}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="p-5 bg-gray-100">{e.answer}</p>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
        <Accordion className="" allowZeroExpanded>
          {faqElements.slice(4, 8).map((e, i) => (
            <AccordionItem className="text-left" key={i}>
              <AccordionItemHeading onClick={() => setOn(!on)}>
                <AccordionItemButton className="bg-gray-200 font-semibold text-lg border border-gray-400 mb-2 rounded-lg flex items-center justify-between p-3">
                  {e.heading}
                  {on ? (
                    <BsFillArrowUpCircleFill></BsFillArrowUpCircleFill>
                  ) : (
                    <BsFillArrowDownCircleFill></BsFillArrowDownCircleFill>
                  )}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="p-5 bg-gray-100">{e.answer}</p>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
