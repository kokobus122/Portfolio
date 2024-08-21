import { Button } from "@/components/ui/Button";
import { ChevronRight, Twitter } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { Github } from "lucide-react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <main className="mx-6 md:mx-0 text-sm md:text-base">
      <section className="py-5">
        <h1 className="text-4xl font-bold">koko 🥥</h1>
        <h2 className="leading-8">Full-stack developer</h2>
      </section>

      <article className="mb-4">
        <h1 className="font-bold text-primary py-2 text-xl">About me</h1>
        <div>
          <p>
            I&apos;m a full-stack developer with a passion for building web
            applications and learning new technologies. As of now, I study web
            development and try to expand my knowledge by taking on new
            challenges in backend. Apart from coding, I enjoy playing video
            games with friends, listen to music, and occassionally play golf.
          </p>
        </div>
      </article>

      <article className="mb-4">
        <h1 className="font-bold text-primary py-2 text-xl">Work</h1>
        <div>
          <p>
            Most of my projects are built with Next.js using TypeScript and Tailwind CSS. The
            main focus of my work is to create accessible and user-friendly
            applications available to everyone.
          </p>
          <p className="leading-loose">View some of my work below.</p>
        </div>
        <Link href="/work">
          <Button variant="default" size="sm" className="mt-4">
            Previous work <ChevronRight />
          </Button>
        </Link>
      </article>

      <article>
        <h1 className="font-bold text-primary py-2 text-xl">Timeline</h1>
        <ul className="space-y-4">
          <li className="flex justify-between">
            <p>HTML5/CSS3</p>
            <p className="flex gap-3 font-bold">2021</p>
          </li>
          <li className="flex justify-between">
            <p>JavaScript</p>
            <p className="flex gap-3 font-bold">2022</p>
          </li>
          <li className="flex justify-between">
            <p>React & Vite</p>
            <p className="flex gap-3 font-bold">2023</p>
          </li>
          <li className="flex justify-between">
            <p>Prisma & Supabase</p>
            <p className="flex gap-3 font-bold">2024</p>
          </li>
          <li className="flex justify-between">
            <p>React & Next.js</p>
            <p className="flex gap-3 font-bold">2023 - present</p>
          </li>
        </ul>
      </article>

      <article className="pt-4">
        <h1 className="font-bold text-primary py-2 text-xl">Socials</h1>
        <ul>
          <Link
            href="https://github.com/kokobus122"
            target="_blank"
            className="underline-offset-4 hover:underline"
          >
            <li className="flex gap-2">
              <Github />
              @kokobus122
            </li>
          </Link>
          <Link
            href="https://twitter.com/kokobus5"
            target="_blank"
            className="underline-offset-4 hover:underline"
          >
            <li className="flex gap-2">
              <Twitter />
              @kokobus5
            </li>
          </Link>
        </ul>
      </article>
    </main>
  );
};

export default page;
