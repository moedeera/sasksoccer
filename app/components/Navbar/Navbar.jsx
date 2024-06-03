"use client";
import { useContext, useState } from "react";
import "./Navbar.css";
import arrow from "./chevron.png";
import profileDefault from "@/assets/images/profile.png";
import { GlobalContext } from "@/app/context/GlobalContext";
import Link from "next/link";
import Image from "next/image";
import { SideMenu } from "../SideMenu/SideMenu";
import { useSession, signOut, signIn } from "next-auth/react";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const Navbar2 = () => {
  const { headerLinks, websiteInfo } = useContext(GlobalContext);
  const { data: session } = useSession();
  const profileImage = session?.user?.image;
  const [sideMenu, setSideMenu] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  let pages = ["Home", "Leagues", "Latest", "News", "Shop"];
  console.log(session);
  const links = [
    { name: "profile", link: "/profile" },
    { name: "messages", link: "/messages" },
    { name: "my leagues", link: "/properties/saved" },
  ];
  const pathname = usePathname();

  return (
    <div className="navbar-container">
      <div className="upper-navbar-container">
        <div className="upper px-2 py-1 flex justify-between items-center h-full">
          <div className="header-container">
            {/* <Image src={logo} alt="logo" width={25} /> */}
            <div>
              <p>{websiteInfo.title}</p>
            </div>
          </div>
          {!session && (
            <Button
              variant="secondary"
              className="text-black hidden md:flex border-2 rounded-md px-4 py-1 text-white "
            >
              <Link className="text-black" href={"/login"}>
                Login
              </Link>
            </Button>
          )}
          {session && (
            <div className="relative  w-52">
              <div className="flex justify-end">
                {" "}
                <button
                  type="button"
                  className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                  onClick={() => setIsProfileMenuOpen((prev) => !prev)}
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Profile</span>
                  <Image
                    className="h-10 w-10 rounded-full border-white border-1"
                    src={profileImage ? profileImage : profileDefault}
                    alt=""
                    width={40}
                    height={40}
                  />
                </button>
              </div>
              {isProfileMenuOpen && (
                <div className="absolute top-0 left-0 bg-gray-100 w-full h-48 top-full border rounded-md flex flex-col justify-evenly p-2 capitalize">
                  {" "}
                  {links.map(
                    (link, index) =>
                      (session || link.link !== "/properties/add") && (
                        <Link
                          onClick={() => {
                            setIsProfileMenuOpen(false);
                          }}
                          key={index}
                          href={link.link}
                          className="text-black"
                        >
                          {link.name}
                        </Link>
                      )
                  )}
                  <div
                    className="text-black"
                    onClick={() => {
                      setIsProfileMenuOpen(false);
                      signOut();
                    }}
                  >
                    Sign out
                  </div>
                </div>
              )}
            </div>
          )}

          <div
            className="mr-2 max-w-16 p-1 h-10 md:hidden "
            onClick={() => {
              // setSideMenu(true);
            }}
          >
            <SideMenu text={"Menu"} />
          </div>
        </div>
      </div>

      <div className="lower-navbar-container">
        {" "}
        <div className="lower px-2">
          <div className=" flex gap-x-14 items-center  h-full">
            {headerLinks.map((page, index) => (
              <>
                {page.case === "all" && (
                  <Link
                    key={index}
                    href={page.Link}
                    className="flex gap-x-1 justify-center items-center"
                  >
                    {page.name}
                  </Link>
                )}
              </>
            ))}
          </div>
        </div>
      </div>

      <div
        className={
          sideMenu
            ? "side-menu side-menu-show flex flex-col gap-y-10 py-3 md:hidden"
            : "side-menu flex flex-col gap-y-10 py-3 md:hidden"
        }
      >
        {headerLinks.map((page, index) => (
          <Link
            onClick={() => {
              setSideMenu(false);
            }}
            key={index}
            href={page.Link}
          >
            {page.name}
          </Link>
        ))}

        <div
          className="btn border-2 rounded-sm max-w-16 p-1 h-10 md:hidden "
          onClick={() => {
            setSideMenu(false);
          }}
        >
          Close
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
