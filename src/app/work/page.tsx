import WorkSection from "@/components/WorkSection";
import type { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Work | koko",
};

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div>
      <WorkSection />
    </div>
  );
};

export default page;
