"use client";

import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import Spinner from "../Spinner";
import { toast } from "react-toastify";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [wasSubmitted, setWasSubmitted] = useState(false);
  const handleSubmit = async () => {
    // You can add your form submission logic here
    const data = {
      email,
    };
    try {
      // set loading to true
      setLoading(true);
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      // check if it was successfully sent
      if (res.status === 200) {
        toast.success("Message sent successfully");
        setWasSubmitted(true);
      }
      // check of there was a 400/401 response (error from server)
      else if (res.status === 400 || res.status === 401) {
        const dataObj = await res.json();
        toast.error(dataObj.message);
      }
    } catch (error) {
      // check if there were non-server errors
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
      {" "}
      <div className="text-2xl font-bold">Subscribe</div>
      <div className="text-sm color-gray-200">
        {" "}
        Interested in keeping up to date with latest news and updates?. Sign up
        for our weekly newsletter.
      </div>
      <Input
        type="email"
        className="my-3 text-black"
        placeholder="Enter in your email"
      />
      <button
        className="btn"
        onClick={() => {
          handleSubmit();
        }}
      >
        Sign Up
      </button>
    </div>
  );
};

export default Subscribe;
