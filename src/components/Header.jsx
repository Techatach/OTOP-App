"use client";

import nextDark from "../../public/next-dark.svg";
import nextLight from "../../public/next-light.svg";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitcherDropdown from "./ThemeSwitcherDropdown";
import { Button } from "./ui/button";
import SidenavSheet from "./SidenavSheet";
import { useEffect, useState } from "react";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <SidenavSheet />

          <Link href="/" className="flex items-center">
            <Image
              src={currentTheme === "light" ? nextLight : nextDark}
              className="mr-3 h-6"
              alt="Next Js Logo"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <ThemeSwitcherDropdown />

            <Link href="/sign-in">
              <Button className="ml-2 bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-white">
                Sign In
              </Button>
            </Link>
          </div>
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link href="/" className="navbar-link" aria-current="page">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/auth/admin/create-product" className="navbar-link">
                  Create Product
                </Link>
              </li>
              <li>
                <Link href="/auth/admin" className="navbar-link">
                  Admin
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
