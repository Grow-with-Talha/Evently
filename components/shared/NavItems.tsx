"use client";
import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = () => {
    const pathname = usePathname()
  return (
    <ul className="md:flex-between flex w-full flex-col items-start  gap-5 md:flex-row">
      {headerLinks.map((link, index) => {
        const isactive = link.route === pathname

        return (
        <li className={`${isactive && "text-primary-500"} flex-center p-medium-16 whitespace-nowrap`} key={index}>
          <Link href={link.route}>{link.label}</Link>
        </li>
      )})}
    </ul>
  );
};

export default NavItems;
