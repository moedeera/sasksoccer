"use client";

import React, { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import { toast } from "react-toastify";
import Spinner from "../Spinner";
import Link from "next/link";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [wasSubmitted, setWasSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // You can add your form submission logic here
    const data = {
      name,
      email,
      message,
    };
    try {
      // set loading to true
      setLoading(true);
      const res = await fetch("/api/messages", {
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
      setName("");
      setEmail("");
      setMessage("");
      setLoading(false);
    }
  };
  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="component-container">
      <div className="max-w-2xl  p-4 border border-gray-300 rounded-md shadow-md">
        <h3 className="h3-header font-bold text-3xl py-3">
          Any concerns or inquiries? Send us a message
        </h3>
        <p className="mb-3 text-base">
          Please login with google in order use to form, Otherwise feel free to
          <Link href={"/contact"}>message us </Link>
          {/* <a className="font-bold" href="mailto:info@sasksoccerhub.ca">
            info@sasksoccerhub.ca
          </a> */}
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name:
            </label>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email:
            </label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Message:
            </label>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <Button type="submit" className="btn">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
