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
          <div>
            <Link href={"/"}>
              <Image className="" src={logo} alt="" width={150} height={150} />
            </Link>
          </div>
        </div>

        {session?.user ? (
          <div className="relative">
            {" "}
            <img
              onClick={() => {
                setIsProfileMenuOpen(!isProfileMenuOpen);
              }}
              src={session?.user?.image ? session.user.image : profileDefault}
              alt=""
              style={{ height: "35px", width: "35px", borderRadius: "50%" }}
            />
            {isProfileMenuOpen && (
              <div className="absolute top-0 left-0 bg-gray-100 w-40 min-h-40 top-full border rounded-md flex flex-col justify-evenly p-2 capitalize">
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
                  onClick={() => {
                    signOut();
                  }}
                  className="text-black cursor-pointer"
                >
                  {" "}
                  Sign Out
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="hidden md:block">
            {" "}
            <button className="btn" onClick={() => signIn()}>
              Login
            </button>
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
