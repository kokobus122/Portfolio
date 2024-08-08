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
  const [page, setPage] = useState<number>(1);
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
            <Link key={index} href={`/work/${work.title.toLowerCase()}`}>
              <Card>
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
                CForum
                </CardTitle>
                <CardDescription>Reddit Clone</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="https://utfs.io/f/d390db3d-d16a-4b8f-8255-3cf4259ff239-mjj5gi.jpg"
                  width={1920}
                  height={1080}
                  alt="CForum"
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
