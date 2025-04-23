"use client";
import { useContext, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "../../../components/ui/sheet";
i;
import { GlobalContext } from "../../context/GlobalContext";
import Link from "next/link";
import "./SideMenu.css";

export const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { headerLinks } = useContext(GlobalContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="text-black">
      <Sheet>
        <SheetTrigger>
          <div className="border " onClick={toggleMenu}>
            <div className="side-menu-icon">
              <div className="side-menu-bar upper"></div>
              <div className="side-menu-bar middle"></div>
              <div className="side-menu-bar lower"></div>
            </div>
          </div>
        </SheetTrigger>

        <SheetContent>
          <div className="flex flex-col gap-10 font-semibold">
            <SheetClose>
              <div className="text-black border px-5 py-2 w-max">Close</div>
            </SheetClose>
            {headerLinks.map((link, index) => (
              <Link key={index} href={link.Link}>
                <SheetClose>
                  <div className="text-black">{link.name}</div>
                </SheetClose>
              </Link>
            ))}

            {/* <div className="bg-gray-200  ">
              <p className="mb-3">Subscribe to our Newsletter</p>
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="email" placeholder="Email" />
                <Button type="submit">Subscribe</Button>
              </div>
            </div> */}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SideMenu;

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetDescription,
//   SheetFooter,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import Link from "next/link";

// export function SideMenu({ text }) {
//   return (
//     <Sheet>
//       <SheetTrigger asChild>
//         <Button variant="outline">{text}</Button>
//       </SheetTrigger>
//       <SheetContent>
//         <SheetHeader>
//           <SheetTitle>Edit profile</SheetTitle>

//           <Link href={"/"}>Link 1</Link>
//           <SheetDescription>
//             Make changes to your profile here. Click save when you're done.
//           </SheetDescription>
//         </SheetHeader>
//         <div className="grid gap-4 py-4">
//           <div className="grid grid-cols-4 items-center gap-4">
//             <Label htmlFor="name" className="text-right">
//               Name
//             </Label>
//             <Input id="name" value="Pedro Duarte" className="col-span-3" />
//           </div>
//           <div className="grid grid-cols-4 items-center gap-4">
//             <Label htmlFor="username" className="text-right">
//               Username
//             </Label>
//             <Input id="username" value="@peduarte" className="col-span-3" />
//           </div>
//         </div>
//         <SheetFooter>
//           {/* <SheetClose asChild>
//             <Button type="submit">Save changes</Button>
//           </SheetClose> */}
//         </SheetFooter>
//       </SheetContent>
//     </Sheet>
//   );
// }
