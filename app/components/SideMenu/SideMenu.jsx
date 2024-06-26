"use client";
import { useContext, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { GlobalContext } from "@/app/context/GlobalContext";
import Link from "next/link";

export const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { headerLinks } = useContext(GlobalContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Button
            variant="secondary"
            class="border rounded px-2 py-1 mx-3 "
            onClick={toggleMenu}
          >
            Menu
          </Button>
        </SheetTrigger>

        <SheetContent>
          <div className="flex flex-col gap-10 font-semibold">
            {headerLinks.map((link, index) => (
              <Link key={index} href={link.Link}>
                <SheetClose>{link.name}</SheetClose>
              </Link>
            ))}
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
