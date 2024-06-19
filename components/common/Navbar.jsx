"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import links from "../../data/links.json";

export default function Navbar() {
  const currentPath = usePathname();

  return (
    <nav className="flex gap-8 capitalize">
      {links.map(({ name, path }, index) => (
        <Link
          key={index}
          href={path}
          className={`${path === currentPath && "text-accent border-b-2 border-accent"} font-medium duration-300 hover:text-accent`}
        >
          {name}
        </Link>
      ))}
    </nav>
  );
};