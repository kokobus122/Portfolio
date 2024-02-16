"use client";
import { useToast } from "@/components/ui/use-toast";
import { workData } from "@/lib/work";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";

const Page = () => {
  const { toast } = useToast();
  const slug = useParams();
  const work = workData.find((work) => work.title.toLowerCase() === slug.slug);

  return (
    <div className="mx-6 md:mx-0">
      <header className="mb-4">
        <h1 className="underline font-bold text-2xl underline-offset-4 decoration-primary py-2">
          {work?.title}
        </h1>
        <h2 className="text-sm text-muted-foreground">{work?.titledesc}</h2>
      </header>
      <Carousel className="w-full my-10 max-w-xs md:max-w-lg mx-auto">
        <CarouselContent>
          {workData
            .filter((data) => data.title.toLowerCase() === slug.slug)
            .map((work) =>
              Object.values(work.images).map((image, imageIndex) => (
                <CarouselItem key={imageIndex}>
                  <div>
                    <Image
                      className="rounded-lg"
                      src={image ?? ""}
                      alt={work.title ?? ""}
                      width={1920}
                      height={1080}
                    />
                  </div>
                </CarouselItem>
              ))
            )}
        </CarouselContent>
        <CarouselPrevious className="invisible sm:visible" />
        <CarouselNext className="invisible sm:visible" />
      </Carousel>
      <section>
        <ul>
          <li className="my-4 leading-loose">
            <p className="bg-primary inline p-1 text-white">Tech</p>{" "}
            {work?.stack}
          </li>
          <li className="my-4 leading-loose">
            <p className="bg-primary inline p-1 text-white">Published</p>{" "}
            {work?.date}
          </li>
        </ul>
      </section>
      <article className="flex gap-2 my-2">
        {work?.link ? (
          <a href={work.link} target="_blank" rel="noopener noreferrer">
            <Button variant="default">Live</Button>
          </a>
        ) : (
          <Button
            variant="default"
            onClick={() =>
              toast({
                title: "Link not found",
                description: "No link has been provided for this project",
                variant: "destructive",
              })
            }
          >
            Github
          </Button>
        )}
        {work?.github ? (
          <a href={work.github} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary">Github</Button>
          </a>
        ) : (
          <Button
            variant="secondary"
            onClick={() =>
              toast({
                title: "Github link not found",
                description: "This project does not have a github repository",
                variant: "destructive",
              })
            }
          >
            Github
          </Button>
        )}
      </article>
    </div>
  );
};

export default Page;
