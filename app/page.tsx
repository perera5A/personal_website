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
            src="/myface.png"
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
              <>{<FaLinkedin className="text-white" />}</>
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
          company="Criteo"
          dateRange="May 2026 - Aug 2026"
          logoSrc="Criteo_Logo.png"
          responsibilities={[
            "I led a redesign of part of Criteo's Retail Media platform, simplifying how the app talks to its backend to make pages noticeably faster for users.",
            "I built and shipped new backend features that were used thousands of times in their first week with no issues.",
          ]}
          skills={["C#", "Angular", "TypeScript", "NUnit", "REST-APIs"]}
        />

        <ExperienceCard
          title="Software Developer Intern"
          company="SOTI"
          dateRange="May 2025 - May 2026"
          logoSrc="SotiLogo.png"
          responsibilities={[
            "I build backend services that handle over a thousand requests a day and helped launch several new features from start to finish.",
            "I work closely with designers, QA, and product managers to turn ideas into finished tools, contributing to over $10,000 worth of custom mobile apps for clients.",
          ]}
          skills={["C#", "SQL", "Angular", "TypeScript", "Agile", "Git"]}
        />

        <ExperienceCard
          title="Web Team Manager"
          company="McMaster Engineering Society"
          dateRange="June 2024 - Present"
          logoSrc="large-og.jpg"
          websitelink="https://www.macengsociety.ca/"
          responsibilities={[
            "Leading a team of student developers building a Clubs and Teams Portal to help 1,000+ engineering students manage their club activities.",
            "Reviewing my team's code and building the backend that powers the portal, all in a collaborative, agile environment.",
          ]}
          skills={["Leadership", "MongoDB", "Node.js", "TypeScript"]}
        />

        <ExperienceCard
          title="Service Design Intern"
          company="Ontario Public Service"
          dateRange="May 2024 - Aug 2024"
          logoSrc="opslogo.webp"
          responsibilities={[
            "I designed and presented a prototype tool to upper management that made it much easier to find and organize provincial land records.",
            "My work helped simplify a process used by over 500 people across the ministry.",
          ]}
          skills={["Java", "Angular", "SQL", "Git"]}
        />
      </div>

      <div className="flex justify-left mt-8">
        <Button
          size="lg"
          color="primary"
          variant="ghost"
          className="w-full md:w-auto px-4 py-3"
          onClick={() => window.open("/AnujaPereraResume.pdf", "_blank")}
        >
          <span>Look at my Resume for more Details</span>
          <FaFileAlt className="ml-2 text-white" />
        </Button>
      </div>

      <h3 className="mt-10 mb-5 text-3xl font-bold md:text-4xl">Projects</h3>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <ProjectCard
          title="Real Time Radio (SDR)"
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
