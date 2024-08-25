import React from "react";
import { Link } from "@nextui-org/link";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Chip,
  Image,
} from "@nextui-org/react";

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface CardProps {
  title: string;
  logoSrc: string;
  responsibilities: string[];
  skills: string[];
  githublink?: string;
  tryitoutlink?: string;
}

export default function ProjectCard({
  title,
  logoSrc,
  responsibilities,
  skills,
  githublink,
  tryitoutlink,
}: CardProps) {
  return (
    <Card className="max-w-[485px] ">
      <CardHeader className="flex gap-3">
        <Image
          alt="Experience Logo"
          height={50}
          src={logoSrc}
          width={50}
          className="rounded-md"
        />
        <div className="flex flex-col">
          <p className="text-md">{title}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <ul className="list-disc pl-5">
          {responsibilities.map((point, index) => (
            <li key={index} className="mb-2">
              {point}
            </li>
          ))}
        </ul>

        <div className="flex flex-row gap-3">
          {skills.map((skill, index) => (
            <Chip
              key={index}
              className="mt-5"
              color="primary"
              variant="bordered"
            >
              {skill}
            </Chip>
          ))}
        </div>
        <div className="flex flex-row gap-3">
          {githublink && (
            <div className="mt-4">
              <p>
                <Link
                  underline="always"
                  color="foreground"
                  isExternal
                  href={githublink}
                >
                  Visit the Github
                  <FaGithub className="ml-2"></FaGithub>
                </Link>
              </p>
            </div>
          )}

          {tryitoutlink && (
            <div className="mt-4">
              <p>
                <Link
                  underline="always"
                  color="foreground"
                  isExternal
                  href={tryitoutlink}
                >
                  Try it out!
                  <FaExternalLinkAlt className="ml-2"></FaExternalLinkAlt>
                </Link>
              </p>
            </div>
          )}
        </div>
      </CardBody>
    </Card>
  );
}
