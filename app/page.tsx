"use client"; // Add this line at the top
import ProjectCard from "@/components/projectcard";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import ExperienceCard from "@/components/card";
import { ThemeSwitch } from "@/components/theme-switch";
import AboutMe from "@/components/aboutme";
import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from "react-icons/fa";

export default function Page() {
  return (
    <div className="relative pb-10">
      <div className="absolute top-4 right-4 md:top-10 md:right-5">
        <ThemeSwitch />
      </div>
      <section className="flex flex-col items-center gap-4 pt-6 md:flex-row md:gap-6">
        <div className="relative h-[100px] w-[100px] md:h-[160px] md:w-[160px]">
          <Image
            src="/myface.jpg"
            className="rounded-[8px] border border-lightGrey object-cover"
            alt="Profile picture"
            fill={true}
            priority={true}
            objectPosition="center bottom"
          />
        </div>
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h1 className="mb-2 text-4xl font-semibold tracking-tighter md:text-6xl">
            Hey, I'm Anuja Perera!
          </h1>
          <h2 className="mb-2 text-lg tracking-tighter md:text-2xl">
            A Third-Year Computer Engineering Student at McMaster University.
          </h2>
          <div className="flex flex-wrap justify-center gap-3 md:justify-start">
            <Button
              size="md"
              color="primary"
              className="flex items-center"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/anuja-perera/",
                  "_blank"
                )
              }
            >
              <span>Add me on LinkedIn</span>
              <FaLinkedin className="text-white" />
            </Button>
            <Button
              size="md"
              color="default"
              className="flex items-center"
              onClick={() =>
                window.open("https://github.com/perera5A", "_blank")
              }
            >
              <span>GitHub</span>
              <FaGithub className="text-white" />
            </Button>
            <Button
              size="md"
              color="default"
              className="flex items-center"
              onClick={() =>
                window.open("mailto:perera5@mcmaster.ca", "_blank")
              }
            >
              <span>Send me an Email</span>
              <FaEnvelope className="text-white" />
            </Button>
          </div>
        </div>
      </section>

      <h3 className="mt-8 mb-5 text-3xl font-bold md:text-4xl">Experience</h3>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <ExperienceCard
          title="Software Developer Intern"
          company="SOTI"
          dateRange="May 2025 - April 2026"
          logoSrc="SotiLogo.png"
          websitelink="https://soti.net/products/soti-snap/"
          responsibilities={[
            "I work on SOTI Snap, a mobility product from SOTI that allows companies to rapidly create apps for their mobile devices.",
            "I contribute to both developing apps for companies that use our product and enhancing the SOTI Snap platform itself.",
          ]}
          skills={["Java", "React", "Javascript", "Agile", "Git"]}
        />

        <ExperienceCard
          title="Service Design Intern"
          company="Ontario Public Service"
          dateRange="May 2024 - Aug 2024"
          logoSrc="opslogo.webp"
          responsibilities={[
            "Developed proof-of-concept applications for new IT projects within the ministry, including initiatives such as fishing licence renewals and wildlife tracking in Northern Ontario",
            "Informed service decisions and design recommendations by conducting research and collaborating with stakeholders",
          ]}
          skills={["Collaboration", "Problem-solving", "React", "Python"]}
        />
        <ExperienceCard
          title="Backend Web Developer"
          company="McMaster Engineering Society"
          dateRange="June 2024 - Present"
          logoSrc="large-og.jpg"
          websitelink="https://www.macengsociety.ca/"
          responsibilities={[
            "Developing the Clubs and Teams Portal, a new platform to help student clubs manage administrative tasks more efficiently",
            "Collaborating in weekly Agile meetings to plan, build, and refine portal features before release to the student body",
          ]}
          skills={["NextJS", "MongoDB", "Git", "REST-APIs"]}
        />
        <ExperienceCard
          title="Web Development Executive"
          company="McMaster Sumobots Competition"
          dateRange="August 2024 - Present"
          logoSrc="sumobot.png"
          websitelink="https://www.sumobot.ca/"
          responsibilities={[
            "SumoBots is an annual student-run robotics competition where participants design robots to battle each other; I maintain and update the competition website.",
            "Developing a registration portal to streamline the sign-up process for participants",
          ]}
          skills={["Javascript", "Python", "Excel", "HTML", "CSS"]}
        />
      </div>

      <div className="flex justify-left mt-8">
        <Button
          size="lg"
          color="primary"
          variant="ghost"
          className="w-full md:w-auto px-4 py-3"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1PC281VKxvdcWAayeI4q6Ca4pXJnshyIC/view?usp=sharing",
              "_blank"
            )
          }
        >
          <span>Look at my Resume for more Details</span>
          <FaFileAlt className="ml-2 text-white" />
        </Button>
      </div>

      <h3 className="mt-10 mb-5 text-3xl font-bold md:text-4xl">Projects</h3>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <ProjectCard
          title="Real Time Radio"
          logoSrc="radio.jpg"
          githublink="https://github.com/perera5A/Real-Time-Radio"
          responsibilities={[
            "Built a Software Defined Radio (SDR) on a Raspberry Pi using C++ and Python to process FM radio signals",
            "It was incredibly exciting to hear actual radio stations come to life through code—I loved seeing our software transform raw signals into music and voices in real time!",
          ]}
          skills={["C++", "Python", "Raspberry Pi", "Multithreading"]}
        />

        <ProjectCard
          title="Wordle Clone"
          logoSrc="wordle.png"
          tryitoutlink="https://perera5a.github.io/Wordle/"
          githublink="https://github.com/perera5A/Wordle"
          responsibilities={[
            "Replicates the classic word-guessing game, featuring a user-friendly interface and over 5000 words to play from",
            "Gained experience in implementing a project using Javascript and CSS",
          ]}
          skills={["Javascript", "HTML", "CSS", "Git"]}
        />
        <ProjectCard
          title="Snake Game"
          logoSrc="snakegame.png"
          githublink="https://github.com/COMPENG-2SH4-2023/2sh4-project-jack-and-anuja"
          responsibilities={[
            "Created a Snake Game for my Programming Fundamentals Course using C and C++",
            "Gained hands-on experience including memory management, pointer usage, and efficient data structures.",
          ]}
          skills={["C++", "Git"]}
        />
        <ProjectCard
          title="Spatial Mapping Device"
          logoSrc="spatial.webp"
          responsibilities={[
            "Created a device that uses a sensor to measure distances and create a 3D map of any room",
            "Made for my Microsystems course and gained hands-on experience using Assembly and C",
          ]}
          skills={["Assembly", "C", "Python"]}
        />
      </div>

      <div className="flex flex-col justify-center mt-10">
        <AboutMe />
      </div>

      <footer className="py-4 mt-10 text-center text-white">
        Designed and Built by Anuja Perera using NextJS
      </footer>
    </div>
  );
}
