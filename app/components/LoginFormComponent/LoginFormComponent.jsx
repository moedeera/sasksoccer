"use client";

import React, { useState } from "react";
// import { signInWithPopup, signInWithEmailAndPassword, auth, googleProvider } from "./firebase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import "./LoginForm.css";

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
    <div className="login-form-container">
      <h2>Login</h2>
      <form onSubmit={handleEmailLogin}>
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
        <Button type="submit">Login</Button>
      </form>
      <Button onClick={handleGoogleLogin}>Login with Google</Button>
    </div>
  );
};

export default LoginFormComponent;
