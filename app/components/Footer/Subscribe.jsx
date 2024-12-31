"use client";

import React, { useState } from "react";
import Spinner from "../Spinner";
import { toast } from "react-toastify";
import { Input } from "@/components/ui/input";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [wasSubmitted, setWasSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    const data = {
      email,
      message: "New Subscriber",
    };

    try {
      setLoading(true);
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.status === 200) {
        toast.success("Message sent successfully");
        setWasSubmitted(true);
      } else if (res.status === 400 || res.status === 401) {
        const dataObj = await res.json();
        toast.error(dataObj.message);
      }
    } catch (error) {
      toast.error("Error sending form");
    } finally {
      setEmail("");
      setLoading(false);
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="w-full md:w-1/3 h-80">
      <div className="text-2xl font-bold">Subscribe</div>
      <div className="text-sm color-gray-200">
        Interested in keeping up to date with the latest news and updates? Sign
        up for our weekly newsletter.
      </div>
      <Input
        type="email"
        value={email}
        className="my-3 text-black"
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
        aria-label="Email Address"
        aria-invalid={!/\S+@\S+\.\S+/.test(email) ? "true" : "false"}
      />
      <button className="btn" onClick={handleSubmit} disabled={loading}>
        {loading ? "Submitting..." : "Sign Up"}
      </button>
    </div>
  );
};

export default Subscribe;
