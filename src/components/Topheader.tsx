"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import SidenavSheet from "./SidenavSheet";
import { Link } from "next/link";
import nextLight from "../../public/next-light.svg";
import nextDark from "../../public/next-dark.svg";
import ThemeSwitcherDropdown from "./ThemeSwitcherDropdown";
import { Button } from "./ui/button";

const Topheader = () => {
  const [mounted, setMounted] = useState(false);

  const [systemTheme, theme] = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <SidenavSheet />

          <Link href="/" className="flex items-center">
            <Image
              src={currentTheme === "light" ? nextLight : nextDark}
              className="mr-3 h-8"
              alt="Next JS Logo"
            />
          </Link>

          <div className="flex items-center lg:order-2">
            <ThemeSwitcherDropdown />

            <Link href="sign-in">
              <Button className="ml-2 bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dar:bg-blue-700 text-white">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Topheader;
