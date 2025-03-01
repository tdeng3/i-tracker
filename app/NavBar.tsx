"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";

// Component props interface

/**
 * Main application navigation component
 * @component
 * @param {object} props - Component props
 * @param {NavItem[]} props.items - Navigation items array
 * @example
 * <NavBar items={[{ href: '/', label: 'Home' }]} />
 */

const NavBar = () => {
  const currentPath = usePathname();
  console.log(currentPath);
  const navBarItems = [
    { href: "/", itemName: "Dashboard" },
    { href: "/issues", itemName: "Issues" },
  ];
  //className="flex" can place items horizontaly   eg. aaa aaa
  /* space-x-6 can place a 6px space between items */
  /* border-b can add a bottom line
        mb-5 can change margin bottom 5px
        px-5 can change padding left 5px
        h-14 can increase hight to 14px
        items-center can place items in center
        */
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <AiFillBug />
      </Link>
      {/* className=text-zinc-500 changes the text color to zinc
        hover:text-zinc-800 When the cursor moves over text, the text color becomes darker.
        transition-colors: it make the animation smoothy
      */}
      <ul className="flex space-x-6">
        {navBarItems.map((item) => (
          <li key={item.href}>
            {/*
            If you want to set up a condition to highlight the selected navbar item,
            you need to  use `` instead of ''
            you also need to use ${ condition render }
            Example:
             {`${
                item.href === currentPath ? "text-zinc-900" : "text-zinc-500"
              } hover:text-zinc-800 transition-colors`}
            */}
            <Link
              className={`${
                item.href === currentPath ? "text-zinc-900" : "text-zinc-500"
              } hover:text-zinc-800 transition-colors`}
              href={item.href}
            >
              {item.itemName}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
