"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import LoginFormComponent from "../components/LoginFormComponent/LoginFormComponent";

import Landing2 from "../components/Landing2/Landing2";

const LoginPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/profile");
    }
  }, [session, status, router]);

  const pageHeader = {
    title: "Login",
    content: null,
    button: null,
    mini: true,
  };

  return (
    <div>
      <Landing2 data={pageHeader} />
      <LoginFormComponent />
    </div>
  );
};

export default LoginPage;
