"use client";

import ProjectCard from "@/components/projectcard";
import Image from "next/image";
import { Button, Link } from "@nextui-org/react";
import ExperienceCard from "@/components/card";
import { ThemeSwitch } from "@/components/theme-switch";
import AboutMe from "@/components/aboutme";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaFileAlt,
  FaLock,
  FaMicrochip,
} from "react-icons/fa";

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
            className="rounded-[8px] border border-default-200 object-cover object-bottom"
            alt="Profile picture"
            fill={true}
            priority={true}
            sizes="160px"
          />
        </div>
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h1 className="mb-2 text-4xl font-semibold tracking-tighter md:text-6xl">
            Hey, I'm Anuja Perera!
          </h1>
          <h2 className="mb-1 text-lg tracking-tighter md:text-2xl">
            A Fourth-Year Computer Engineering Student at McMaster University.
          </h2>
          <p className="mb-3 text-small text-default-500 md:text-medium">
            Graduating May 2027 · Toronto, Ontario
            <span className="hidden md:inline"> · </span>
            <span className="block font-medium text-success-700 dark:text-success md:inline">
              Open to new-grad software roles
            </span>
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:justify-start">
            <Button
              as={Link}
              isExternal
              href="https://www.linkedin.com/in/anuja-perera/"
              size="md"
              color="primary"
              endContent={<FaLinkedin />}
            >
              Add me on LinkedIn
            </Button>
            <Button
              as={Link}
              isExternal
              href="https://github.com/perera5A"
              size="md"
              color="default"
              endContent={<FaGithub />}
            >
              GitHub
            </Button>
            <Button
              as={Link}
              href="mailto:perera5@mcmaster.ca"
              size="md"
              color="default"
              endContent={<FaEnvelope />}
            >
              Send me an Email
            </Button>
          </div>
        </div>
      </section>

      <h3 className="mt-8 mb-5 text-3xl font-bold md:text-4xl">Experience</h3>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:[&>*:last-child:nth-child(odd)]:col-span-2">
        <ExperienceCard
          title="Software Developer Intern"
          company="Criteo"
          dateRange="May 2026 - Aug 2026"
          logoSrc="/criteo-icon.png"
          responsibilities={[
            "I owned a redesign of part of Criteo's Retail Media platform end to end, replacing a multi-hop call with direct integrations and making it 20% faster.",
            "I built and shipped new C# APIs, including a category filtering extension, that handled 1,000+ calls in their first week with zero downtime, delivering our main project goal ahead of schedule.",
          ]}
          skills={["C#", "Angular", "TypeScript", "NUnit", "REST-APIs"]}
        />

        <ExperienceCard
          title="Software Developer Intern"
          company="SOTI"
          dateRange="May 2025 - May 2026"
          logoSrc="/SotiLogo.png"
          responsibilities={[
            "I built backend APIs in a microservices architecture that handled over a thousand requests a day.",
            "I built reusable Angular components that helped launch 3 new features, working closely with designers, QA, and product managers from start to finish.",
          ]}
          skills={["C#", "SQL", "Angular", "TypeScript", "Agile", "Git"]}
        />

        <ExperienceCard
          title="Student Developer Lead"
          company="McMaster Engineering Society"
          dateRange="June 2024 - Present"
          logoSrc="/large-og.jpg"
          websitelink="https://www.macengsociety.ca/"
          sourcelink="https://github.com/McMaster-Engineering-Society"
          responsibilities={[
            "Leading a team of student developers building a Clubs and Teams Portal to help 1,000+ engineering students manage their club activities.",
            "Reviewing my team's code and building the backend REST APIs that power the portal, all in a collaborative, agile environment.",
          ]}
          skills={["Leadership", "MongoDB", "Node.js", "TypeScript"]}
        />

        <ExperienceCard
          title="Service Design Intern"
          company="Ontario Public Service"
          dateRange="May 2024 - Aug 2024"
          logoSrc="/ops-icon.png"
          responsibilities={[
            "I designed and presented a prototype tool to upper management that made it much easier to find and organize provincial land records.",
            "My work helped simplify a process used by over 500 people across the ministry.",
          ]}
          skills={["Java", "Angular", "SQL", "Git"]}
        />
      </div>

      <div className="flex justify-left mt-8">
        <Button
          as={Link}
          isExternal
          href="/Anuja_Perera_Resume.pdf"
          size="lg"
          color="primary"
          variant="ghost"
          className="w-full md:w-auto px-4 py-3"
          endContent={<FaFileAlt className="shrink-0" />}
        >
          Look at my Resume for more Details
        </Button>
      </div>

      <h3 className="mt-10 mb-5 text-3xl font-bold md:text-4xl">Projects</h3>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:[&>*:last-child:nth-child(odd)]:col-span-2">
        <ProjectCard
          title="Tap Lock"
          icon={<FaLock size={22} />}
          subtitle="Capstone Project · Sep 2026 - Apr 2027"
          inProgress
          responsibilities={[
            "A networked smart-locker system for the McMaster gym that lets students claim, open, and release a locker by tapping their digital student ID.",
            "I own the server and database: receiving locker events from ESP32 units over Wi-Fi, storing hashed card IDs and usage history, flagging overdue lockers, and emailing users when their time is up.",
          ]}
          skills={["NFC", "Backend", "Databases", "Embedded Systems"]}
        />

        <ProjectCard
          title="GPU-Accelerated Neural Network"
          icon={<FaMicrochip size={22} />}
          subtitle="High-Performance Programming (4SP4) · Fall 2026"
          inProgress
          responsibilities={[
            "Building a neural network that uses GPU programming to speed up training and inference.",
            "Applying parallel programming techniques to get the most out of the hardware.",
          ]}
          skills={["GPU Programming", "Neural Networks", "Parallel Computing"]}
        />

        <ProjectCard
          title="Real Time Radio (SDR)"
          logoSrc="/radio.jpg"
          githublink="https://github.com/perera5A/Real-Time-Radio"
          responsibilities={[
            "Built a real-time Software Defined Radio (SDR) on a Raspberry Pi using C++ and Python, processing FM radio signals at 2.5 million samples per second.",
            "It was incredibly exciting to hear actual radio stations come to life through code.",
          ]}
          skills={["C++", "Python", "Raspberry Pi", "Multithreading"]}
        />

        <ProjectCard
          title="Spatial Mapping Device"
          logoSrc="/spatial.webp"
          responsibilities={[
            "Created a device that uses a sensor to measure distances and create a 3D map of any room",
            "Made for my Microsystems course and gained hands-on experience using Assembly and C",
          ]}
          skills={["Assembly", "Embedded C", "Python"]}
        />
      </div>

      <div className="flex flex-col justify-center mt-10">
        <AboutMe />
      </div>

      <footer className="py-4 mt-10 text-center text-small text-default-500">
        Designed and Built by Anuja Perera using Next.js
      </footer>
    </div>
  );
}
