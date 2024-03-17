"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const PropertiesPage = () => {
  const router = useRouter();

  return (
    <div>
      <h1 className="text-3xl">Homepage</h1>
      <Link href="/">Back to Home page</Link>
    </div>
  );
};

export default PropertiesPage;
