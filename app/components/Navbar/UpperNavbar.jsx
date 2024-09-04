import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { useSession, signOut, signIn } from "next-auth/react";
import SideMenu from "../SideMenu/SideMenu";

import profileDefault from "@/assets/images/profile.png";
import logo from "./logo-no-background.png";
import { GlobalContext } from "@/app/context/GlobalContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
