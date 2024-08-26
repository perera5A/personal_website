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
        <AccordionItem
          key="2"
          title={
            <div className="flex items-center gap-2">
              Courses I am currently taking <FaBook />
            </div>
          }
        >
          <div className="flex flex-col gap-4">
            <Chip variant="bordered" color="default">
              Software Development 3K04
            </Chip>
            <Chip variant="bordered" color="default">
              Digital Systems Design 3DQ5
            </Chip>
            <Chip variant="bordered" color="default">
              Electronic Devices & Circuits 2 3EJ4
            </Chip>
            <Chip variant="bordered" color="default">
              Advanced Probability & Random Processes 3TQ3
            </Chip>
            <Chip variant="bordered" color="default">
              Signals & Systems 3TP3
            </Chip>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
