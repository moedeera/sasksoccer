import React from "react";
import Landing2 from "../components/Landing2/Landing2";
import Link from "next/link";

const page = () => {
  const pageHeader = {
    title: "Admin",

    button: null,
    mini: true,
    image:
      "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage0.c1c04e41.jpg&w=640&q=75",
  };

  const mockItems = [
    { name: "Messages", link: "/messages" },
    { name: "FrontPage", link: "/content" },
    { name: "Posts", link: "/" },
  ];
  const mockData = {
    messages: [
      {
        read: false,
        id: "123abc",
        date: "July 8 2023",
        message: "Hello world",
      },
    ],
    posts: ["post1", "post2"],
    bulletins: [
      { id: "123", header: "hello world", content: "header1", link: "abc" },
    ],
    frontPage: [
      {
        id: "123",
        header: "Hello world",
        content: "Lorem Ipsum Lorem Ipsum",
        link: "/",
      },
      {
        id: "567",
        header: "Hello world 2",
        content: "Lorem Ipsum Lorem Ipsum",
        link: "/",
      },
    ],
  };

  return (
    <div className=" color-white h-min-screen">
      <Landing2 data={pageHeader} />
      <div className="component-container">
        {" "}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {mockItems.map((item, index) => (
            <div
              key={index}
              className="border border-black p-10 min-h-10 flex flex-col justify-center items-center gap-10"
            >
              <div className="text-2xl">{item.name}</div>
              <Link className="btn" href={item.link}>
                Read
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
