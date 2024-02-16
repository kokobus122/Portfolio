import type { Metadata } from "next";
import Link from "next/link";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Contact | koko",
};

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <section className="mx-6 md:mx-0 text-sm md:text-base">
      <section className="py-5">
        <h1 className="text-4xl font-bold">Contact me</h1>
      </section>
      <article className="mb-2">
        <h1 className="font-bold text-primary py-2 text-xl">Mail</h1>
        <div>
          <p>
            You can reach me through my email{" "}
            <Link
              className="text-primary hover:underline underline-offset-4"
              href="mailto:kokobus123@gmail.com"
            >
              here
            </Link>
            .
          </p>
        </div>
      </article>
      <article className="mb-4">
        <h1 className="font-bold text-primary py-2 text-xl">Discord</h1>
        <div>
          <div>
            I'm also active on discord, tag:{" "}
            <p className="rounded-md border bg-card text-card-foreground shadow-sm inline px-1">
              kokobus#1234
            </p>
            
          </div>
        </div>
      </article>
    </section>
  );
};

export default page;
