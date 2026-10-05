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

import { FaExternalLinkAlt, FaGithub, FaCode } from "react-icons/fa";

interface CardProps {
  title: string;
  logoSrc?: string;
  icon?: React.ReactNode;
  subtitle?: string;
  inProgress?: boolean;
  responsibilities: string[];
  skills: string[];
  githublink?: string;
  tryitoutlink?: string;
}

export default function ProjectCard({
  title,
  logoSrc,
  icon,
  subtitle,
  inProgress,
  responsibilities,
  skills,
  githublink,
  tryitoutlink,
}: CardProps) {
  return (
    <Card className="w-full">
      <CardHeader className="flex gap-3">
        {logoSrc ? (
          <Image
            alt={`${title} logo`}
            height={50}
            src={logoSrc}
            width={50}
            className="rounded-md w-auto h-auto max-w-[50px] max-h-[50px]"
          />
        ) : (
          <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
            {icon ?? <FaCode size={22} />}
          </div>
        )}
        <div className="flex flex-col">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-md">{title}</p>
            {inProgress && (
              <Chip color="success" size="sm" variant="flat">
                In Progress
              </Chip>
            )}
          </div>
          {subtitle && (
            <p className="text-small text-default-500">{subtitle}</p>
          )}
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

        <div className="mt-auto flex flex-row gap-2 flex-wrap pt-4">
          {skills.map((skill, index) => (
            <Chip
              key={index}
              color="primary"
              variant="bordered"
            >
              {skill}
            </Chip>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}
