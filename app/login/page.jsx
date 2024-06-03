"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import LoginFormComponent from "../components/LoginFormComponent/LoginFormComponent";
import Landing from "../components/Landing/Landing";

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
      <Landing data={pageHeader} />
      <LoginFormComponent />
    </div>
  );
};

export default LoginPage;
