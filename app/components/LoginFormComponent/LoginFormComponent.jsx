"use client";

import React, { useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";
// import { signInWithPopup, signInWithEmailAndPassword, auth, googleProvider } from "./firebase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import "./LoginForm.css";
import Link from "next/link";
import { getProviders, signIn, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const LoginFormComponent = () => {
  const { data: session } = useSession();
  const profileImage = session?.user?.image;
  const [providers, setProviders] = useState(null);

  const pathname = usePathname();
  console.log(session?.user);

  useEffect(() => {
    const setAuthProvider = async () => {
      const res = await getProviders();
      setProviders(res);
    };

    setAuthProvider();
  }, []);

  return (
    <div className="login-form-container flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold">Login</h2>
      <div className="hidden md:block md:ml-6">
        <div className="flex items-center">
          {providers &&
            Object.values(providers).map((provider, index) => (
              <Button
                key={index}
                onClick={() => {
                  signIn(provider.id);
                }}
                className="flex  gap-2 items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
              >
                <span>Sign in with</span>
                <FaGoogle className="w-3 h-3 color-gray-100" />
              </Button>
            ))}
        </div>
      </div>
      {/* <div>
        <div>
          <label>Email:</label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <Button>Login</Button>
        <small className="my-3">No Account?</small>
        <Button>
          <Link href={"/register"}>Register</Link>
        </Button>
      </div>
      <br /> */}
      {/* <Button>Sign in with Google</Button> */}
    </div>
  );
};

export default LoginFormComponent;
