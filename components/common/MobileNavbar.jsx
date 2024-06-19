"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { CiMenuFries } from "react-icons/ci";

import links from "../../data/links.json";

export default function MobileNavbar() {
  const currentPath = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-between items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent>
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Ryu<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col items-center justify-center gap-8">
          {links.map(({ name, path }, index) => (
            <Link
              key={index}
              href={path}
              className={`${path === currentPath && "text-accent border-b-2 border-accent"} text-xl capitalize duration-300 hover:text-accent transition-all`}
            >
              {name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};