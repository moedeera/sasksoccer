import Image from "next/image";
import React from "react";
import img from "../../assets/Info/logo.webp";
// import img from "@/assets/Info/logo.webp"
const page = () => {
  return (
    <div>
      <Image src={img} width={450} height={450} alt="logo" />
    </div>
  );
};

export default page;
