"use client"
import { Link } from "@nextui-org/link";
import { useState } from "react";
import { Logo, CloseMenu, OpenMenu } from "../icons";
import { ThemeSwitch } from "@/components/theme-switch";
import clsx from "clsx";
import { link as linkStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";


export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <header className="container mx-auto w-full flex items-center justify-between">
      <div className=" bg-slate-100 rounded-lg p-3 z-50">
        <Logo  className=""/>
      </div>

      {/* Mobile nav */}

      <nav className=" flex items-center justify-between">
        <div className="flex items-center font-medium justify-between">

          <div
            className={`md:hidden fixed w-[60%] h-screen top-0 pt-[22%] left-0 rounded-r-xl z-20 bg-black dark:bg-white 
            transform transition-all duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}
          >
            <ul className=" pl-3">
              {siteConfig.navMenuItems.map((nav) => (
                <li key={nav.label}
                  className="mb-4 pl-3 ">
                  <Link
                    className="text-white dark:text-black "
                    href={nav.href}
                  >
                    {nav.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ThemeSwitch className="ml-3 float-end" />
          </div>


          <nav className="flex items-center">
            <div className="md:flex hidden items-center gap-8  ">
              <ThemeSwitch className="" />
              <ul className="flex gap-3 ">
                {siteConfig.navItems.map((item) => (
                  <li key={item.label}
                    className=""
                  >
                    <Link
                      className={clsx(
                        "data-[active=true]:text-[#5d5f79] text-[#c5c6ce] hover:text-[#f15e50] data-[active=true]:font-medium transition-all duration-500 "
                      )}
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>


          {/* Menu Button */}

          <button
            className="sm:hidden z-50 w-[42] h[42] shadow-2xl dark:bg-white p-2 rounded-full"
            onClick={toggle}
            title="toggle"
            aria-label={open ? " " : " "}
          >

            <div className="relative  cursor-pointer transition-all ease duration-300 ">
              {open ? <CloseMenu className="" /> : <OpenMenu className="" />}
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
};
