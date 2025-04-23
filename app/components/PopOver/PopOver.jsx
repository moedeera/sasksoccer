import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../components/ui/popover";
import Image from "next/image";
import Link from "next/link";

export function PopOver({ profileImage, profileDefault, links }) {
  return (
    <Popover>
      <PopoverTrigger asChild className="border border-black">
        <Image
          className="h-10 w-10 rounded-full border-white border-1 cursor-pointer"
          src={profileImage ? profileImage : profileDefault}
          alt=""
          width={40}
          height={40}
        />
      </PopoverTrigger>

      <PopoverContent className="w-60 flex flex-col gap-3 left-1/2 ">
        {links.map((link, index) => (
          <Link href={link.link} key={index} className="hover:bg-gray-100">
            {link.name}
          </Link>
        ))}
      </PopoverContent>
    </Popover>
  );
}
