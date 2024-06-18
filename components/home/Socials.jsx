import Link from "next/link";

import { socials } from "../../data/home/socials";

export default function Socials({ containerStyles, iconStyles }) {
  return (
    <div className={containerStyles}>
      {socials.map(({ icon, path }, index) => (
        <Link
          key={index}
          href={path}
          target="_blank"
          className={iconStyles}
        >
          {icon}
        </Link>
      ))}
    </div>
  );
};