import React from "react";
import { Accordion, AccordionItem, Avatar } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";
import { FaFutbol, FaBook } from "react-icons/fa";
import Link from "next/link";
export default function AboutMe() {
  return (
    <div className="mt-auto mb-10">
      <Accordion selectionMode="multiple">
        <AccordionItem
          key="2"
          title={
            <div className="flex items-center gap-2">
              Courses I am currently taking
              <FaBook />
            </div>
          }
        >
          <div className="flex flex-row flex-wrap gap-2">
            <Chip variant="bordered" color="default">
              Fundamentals of Machine Learning 4SL4
            </Chip>
            <Chip variant="bordered" color="default">
              Computer Communication Networks 4DK4
            </Chip>
            <Chip variant="bordered" color="default">
              Computer Architecture 4DM4
            </Chip>
            <Chip variant="bordered" color="default">
              High-Performance Programming 4SP4
            </Chip>
            <Chip variant="bordered" color="default">
              Engineering Design 4OI6A
            </Chip>
          </div>
        </AccordionItem>

        <AccordionItem
          key="1"
          title={
            <div className="flex items-center gap-2">
              My favourite sports teams
              <FaFutbol />
            </div>
          }
        >
          <div className="flex flex-col">
            I watch and play a lot of sports, my favourite being Soccer. I also
            like watching F1, Hockey, and Basketball.
            <div className="flex flex-col md:flex-row gap-2">
              <Chip variant="bordered" color="danger" className="mt-3">
                <Link
                  href="https://www.arsenal.com/fixtures"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Arsenal Football Club
                </Link>
              </Chip>
              <Chip variant="bordered" color="warning" className="mt-3">
                <Link
                  href="https://www.mclaren.com/racing/formula-1/2024/schedule/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  McLaren Racing Team
                </Link>
              </Chip>
              <Chip variant="bordered" color="danger" className="mt-3">
                <Link
                  href="https://www.nba.com/raptors/schedule"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Toronto Raptors
                </Link>
              </Chip>
              <Chip variant="bordered" color="primary" className="mt-3">
                <Link
                  href="https://www.nhl.com/mapleleafs/schedule"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Toronto Maple Leafs
                </Link>
              </Chip>
            </div>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
