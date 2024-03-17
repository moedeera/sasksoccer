import { Image } from "next/image";

import logo from "@/assets/images/logo-white.png";

const Navbar = () => {
  return (
    <nav className="bg-blue-700 border-b border-blue-500">
      {/* <!-- Logo --> */}
      <a className="flex flex-shrink-0 items-center" href="/index.html">
        <Image className="h-10 w-auto" src={logo} alt="PropertyPulse" />
        <span className="hidden md:block text-white text-2xl font-bold ml-2">
          PropertyPulse
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
