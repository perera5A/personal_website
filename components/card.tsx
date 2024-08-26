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

import { FaExternalLinkAlt } from "react-icons/fa";

interface CardProps {
  title: string;
  company: string;
  dateRange: string;
  logoSrc: string;
  responsibilities: string[];
  skills: string[];
  websitelink?: string;
}

export default function ExperienceCard({
  title,
  company,
  dateRange,
  logoSrc,
  responsibilities,
  skills,
  websitelink,
}: CardProps) {
  return (
    <Card className="max-w-[485px] ">
      <CardHeader className="flex gap-3">
        <Image
          alt="Experience Logo"
          height={46}
          src={logoSrc}
          width={50}
          className="rounded-md w-auto h-auto max-w-[50px] max-h-[46px]"
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
          {skills.map((skill, index) => (
            <Chip
              key={index}
              size="md" // Default size for larger screens
              className="mt-3 md:size-md size-sm" // Smaller size on mobile
              color="primary"
              variant="bordered"
            >
              {skill}
            </Chip>
          ))}
        </div>

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
      </CardBody>
    </Card>
  );
}
