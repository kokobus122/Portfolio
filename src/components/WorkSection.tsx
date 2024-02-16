"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Separator } from "@/components/ui/Separator";
import Image from "next/image";
import { FC } from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { workData } from "@/lib/work";

interface WorkSectionProps {}

const WorkSection: FC<WorkSectionProps> = ({}) => {
  const [page, setPage] = useState(1);
  return (
    <section className="mx-6 md:mx-0">
      <nav className="flex h-5 items-center space-x-4 mb-4">
        <p
          onClick={() => setPage(1)}
          className={cn(
            page === 1 && "underline",
            "hover:underline hover:cursor-pointer underline-offset-4"
          )}
        >
          Works
        </p>
        <Separator orientation="vertical" />
        <p
          onClick={() => setPage(2)}
          className={cn(
            page === 2 && "underline",
            "hover:underline hover:cursor-pointer underline-offset-4"
          )}
        >
          Contributions
        </p>
      </nav>
      {(page === 1 && (
        <article className="max-w-lg px-8 md:px-0 md:max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {workData.map((work, index) => (
            <Link href={`/work/${work.title.toLowerCase()}`}>
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="underline-offset-4 hover:underline text-xl md:text-2xl">
                    {work.title}
                  </CardTitle>
                  <CardDescription>{work.titledesc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src={work.images.image1}
                    width={1920}
                    height={1080}
                    alt="Wave"
                    className="rounded-lg"
                  />
                </CardContent>
              </Card>
            </Link>
          ))}
        </article>
      )) || (
        <article className="max-w-lg px-8 md:px-0 md:max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="https://lcjexpress.se/" target="_blank">
            <Card>
              <CardHeader>
                <CardTitle className="underline-offset-4 hover:underline text-xl md:text-2xl">
                  LCJ Express
                </CardTitle>
                <CardDescription>Transport/Logistics Site</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="https://utfs.io/f/95ec3864-e425-4cc7-8599-f71a26fe58c5-7ebxvh.jpg"
                  width={1920}
                  height={1080}
                  alt="Wave"
                  className="rounded-lg"
                />
              </CardContent>
            </Card>
          </Link>
        </article>
      )}
    </section>
  );
};

export default WorkSection;
