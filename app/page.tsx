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
          title="Service Design Intern"
          company="Ontario Public Service"
          dateRange="May 2024 - Aug 2024"
          logoSrc="opslogo.webp"
          responsibilities={[
            "Created a prototype to organize and access provincial land data more easily for both internal and external users",
            "Conducted user research to inform service decisions and design recommendations",
          ]}
          skills={["React", "Python", "REST-APIs", "Git", "Azure"]}
        />
        <ExperienceCard
          title="Backend Web Developer"
          company="McMaster Engineering Society"
          dateRange="June 2024 - Present"
          logoSrc="large-og.jpg"
          websitelink="https://www.macengsociety.ca/"
          responsibilities={[
            "Building a web portal for managing clubs and teams for McMaster engineering students",
            "Collaborating on tasks, including database management and server-side logic, to support the portal’s features",
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
            "Updating our website and addressing any technical issues",
            "Creating a registration portal for the sumobot competition, streamlining the registration process for participants",
          ]}
          skills={["Javascript", "Python", "Excel", "HTML", "CSS"]}
        />
        <ExperienceCard
          title="Full-Stack Developer"
          company="Magnify Access"
          dateRange="Dec 2023 - April 2024"
          logoSrc="magnify.jpg"
          websitelink="https://www.magnifyaccess.ai/"
          responsibilities={[
            "Helped develop a job connection app to aid Toronto high school students with their co-op search",
            "The focus was on user accessibility and convenience",
          ]}
          skills={["PHP", "React", "Jira", "HTML", "Git"]}
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
              "https://drive.google.com/file/d/1PB7zIjuHXdpUFA1KWZzTPTyZBDS4qml1/view?usp=sharing",
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
          title="SnapWaste"
          logoSrc="snapwaste.jpg"
          tryitoutlink="https://snapwaste-perera5as-projects.vercel.app/"
          githublink="https://github.com/perera5A/snapwaste"
          responsibilities={[
            "An app that uses AI and Machine Learning to figure out where to throw out our trash",
            "Aimed to create an accessible tool to help individuals make better disposal decisions",
          ]}
          skills={["React", "Python", "APIs", "HTML", "Git"]}
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
