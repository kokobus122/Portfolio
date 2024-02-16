"use client";
import { FC } from "react";
import ModeToggle from "./ModeToggle";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface NavBarProps {}

const NavBar: FC<NavBarProps> = ({}) => {
  const path = usePathname();
  return (
    <nav className="flex justify-between mx-6 md:mx-0">
      <Link href="/">
        <h1 className="text-lg font-bold hover:text-primary">koko</h1>
      </Link>
      <ul className="space-y-4 text-right">
        <li>
          <Link
            href="/work"
            className={cn(
              path.startsWith("/work") && "bg-primary text-white",
              "p-2 hover:underline underline-offset-4"
            )}
          >
            work
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={cn(
              path === "/contact" && "bg-primary text-white",
              "p-2 hover:underline underline-offset-4"
            )}
          >
            contact
          </Link>
        </li>
        {/* <li>
          <Link
            href="../testresume.pdf"
            className="hover:underline underline-offset-4"
          >
            <span>resume</span>
          </Link>
        </li> */}
        <li>
          <Link href="/#" className="hover:underline underline-offset-4">
            github repo
          </Link>
        </li>
        <ModeToggle />
      </ul>
    </nav>
  );
};

export default NavBar;
