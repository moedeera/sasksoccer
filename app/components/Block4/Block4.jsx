"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Block4 = ({ data }) => {
  const defaultInfo = {
    title: "Summer Soccer Is Here",

    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum,
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`,
    content_sec: ``,
    button: null,
    buttonText: "",
    buttonLink: "",
  };
  const [info, setInfo] = useState(defaultInfo);

  useEffect(() => {
    if (data) {
      setInfo(data);
    }
  }, []);

  return (
    <div className="component-container modified-container p-4">
      <p className="text-left text-sm">{info?.date}</p>
      <div className="text-left h3-header text-xl font-bold mb-2">
        {info.title}
      </div>
      <p className="text-left text-base">{info.content}</p>
      <p className="text-left mt-2 text-base">{info.content_sec}</p>
      {info.button && (
        <Link className="btn my-1" href={info.buttonLink}>
          {info.buttonText}
        </Link>
      )}
    </div>
  );
};

export default Block4;
