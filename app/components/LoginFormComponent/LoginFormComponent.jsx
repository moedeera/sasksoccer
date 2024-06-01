"use client";

import React, { useState } from "react";
// import { signInWithPopup, signInWithEmailAndPassword, auth, googleProvider } from "./firebase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import "./LoginForm.css";
import Link from "next/link";

const LoginFormComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailLogin = async (e) => {
    alert("hello 1");
  };

  const handleGoogleLogin = async () => {
    alert("hello 2");
  };

  return (
    <div className="login-form-container flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold">Login</h2>
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
      <Button onClick={handleGoogleLogin}>Sign in with Google</Button>
    </div>
  );
};

export default LoginFormComponent;
