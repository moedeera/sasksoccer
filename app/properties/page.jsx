"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Properties from "../components/Properties";

const PropertiesPage = () => {
  const router = useRouter();

  return (
    <>
      <Properties />
    </>
  );
};

export default PropertiesPage;
