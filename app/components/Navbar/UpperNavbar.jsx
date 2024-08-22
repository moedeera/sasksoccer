import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { useSession, signOut, signIn } from "next-auth/react";
import SideMenu from "../SideMenu/SideMenu";

import profileDefault from "@/assets/images/profile.png";
import logo from "./logo-no-background.png";
import { GlobalContext } from "@/app/context/GlobalContext";
const UpperNavbar = () => {
  const { data: session } = useSession();
  const profileImage = session?.user?.image;
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const { links } = useContext(GlobalContext);

  return (
    <div className="upper-navbar-container">
      <div className="upper px-2 py-1 flex justify-between items-center h-full">
        <div className="header-container">
          {/* <Image src={logo} alt="logo" width={25} /> */}
          <div>
            <Link href={"/"}>
              <Image className="" src={logo} alt="" width={150} height={150} />
            </Link>
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
  );
};

export default UpperNavbar;
