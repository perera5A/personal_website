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
    <Card className="max-w-[485px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="Project Logo"
          height={50}
          src={logoSrc}
          width={50}
          className="rounded-md w-auto h-auto max-w-[50px] max-h-[50px]"
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

        <div className="flex flex-row gap-3 flex-wrap">
          {skills.map((skill, index) => (
            <Chip
              key={index}
              className="mt-5 md:size-md size-sm"
              color="primary"
              variant="bordered"
            >
              {skill}
            </Chip>
          ))}
        </div>

        <div className="flex flex-row gap-3 flex-wrap">
          {githublink && (
            <div className="mt-4">
              <p>
                <Link
                  underline="always"
                  color="foreground"
                  isExternal
                  href={githublink}
                >
                  Visit the GitHub
                  <FaGithub className="ml-2" />
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
                  <FaExternalLinkAlt className="ml-2" />
                </Link>
              </p>
            </div>
          )}
        </div>
      </CardBody>
    </Card>
  );
}
