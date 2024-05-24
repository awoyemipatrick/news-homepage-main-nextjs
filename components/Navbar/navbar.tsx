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

          <ul
            className={`md:hidden fixed w-[60%] h-1/2 top-0 pt-[22%] left-0 rounded-r-xl z-20 bg-black dark:bg-white 
            transform transition-all duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}
          >
            <li className=" pl-3">
              {siteConfig.navItems.map((item) => (
                <div key={item.href}
                  className="mb-4 pl-3 ">
                  <Link
                    className="text-white dark:text-black"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </li>
            <ThemeSwitch className="ml-3 float-end" />
          </ul>


          <nav className="flex items-center">
            <ul className="md:flex hidden items-center gap-8  ">
              <ThemeSwitch className=" cursor-pointer" />
              <li className="flex gap-3 ">
                {siteConfig.navItems.map((item) => (
                  <div key={item.href}>
                    <Link
                      className={clsx(
                        linkStyles({ color: "foreground" }),
                        "data-[active=true]:text-primary data-[active=true]:font-medium"
                      )}
                      color="foreground"
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
              </li>
            </ul>
          </nav>


          {/* Menu Button */}

          <button
            className="sm:hidden z-50 w-[42] h[42] shadow-2xl dark:bg-white p-2 rounded-full"
            onClick={toggle}
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
