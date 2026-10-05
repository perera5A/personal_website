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
  company: string;
  dateRange: string;
  logoSrc: string;
  responsibilities: string[];
  skills: string[];
  websitelink?: string;
  sourcelink?: string;
}

export default function ExperienceCard({
  title,
  company,
  dateRange,
  logoSrc,
  responsibilities,
  skills,
  websitelink,
  sourcelink,
}: CardProps) {
  return (
    <Card className="w-full">
      <CardHeader className="flex gap-3">
        <Image
          alt={`${company} logo`}
          height={46}
          src={logoSrc}
          width={46}
          className="rounded-md border border-default-200 h-[46px] w-[46px] object-contain"
        />
        <div className="flex flex-col">
          <p className="text-md">{title}</p>
          <p className="text-small text-default-500">
            {company} | {dateRange}
          </p>
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
          {websitelink && (
            <div className="mt-4 ml-1">
              <p>
                <Link
                  underline="always"
                  color="foreground"
                  isExternal
                  href={websitelink}
                >
                  Visit our website
                  <FaExternalLinkAlt className="ml-2"></FaExternalLinkAlt>
                </Link>
              </p>
            </div>
          )}

          {sourcelink && (
            <div className="mt-4 ml-1">
              <p>
                <Link
                  underline="always"
                  color="foreground"
                  isExternal
                  href={sourcelink}
                >
                  Source Code
                  <FaGithub className="ml-2" />
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
