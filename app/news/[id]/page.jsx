import { AspectRatio } from "../../../components/ui/aspect-ratio";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="component-container">
      {" "}
      <div className="component-container max-w-3xl mx-auto p-6">
        {/* Article Meta Information */}
        <div className="mb-2 flex align-center">
          {" "}
          <Link href={"/news"}>News</Link>{" "}
          <ChevronRight className="text-sm text-gray-400" />
        </div>
        <div className="text-gray-500 text-sm flex justify-between border-b pb-2">
          <span>March 19, 2025</span>
          <span>by John Doe</span>
          <span>5 min read</span>
        </div>

        {/* Article Header */}
        <h1 className="text-3xl font-bold mt-4">The Title of the Article</h1>

        {/* Article Image */}
        <div className="mt-4">
          <div>
            <div>
              {" "}
              <div className="text-md  my-2 text-gray-800">
                Description of Article.{" "}
              </div>
            </div>
          </div>
          <div>
            <AspectRatio ratio={16 / 9} className="bg-muted border">
              <Image
                src={
                  "https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg"
                }
                alt="Photo by Drew Beamer"
                fill
                className="h-full w-full rounded-md object-cover"
              />
            </AspectRatio>
          </div>
        </div>

        {/* Article Content */}
        <div className="mt-6 text-gray-800 leading-relaxed space-y-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
            malesuada. Curabitur dapibus risus non enim fringilla, nec accumsan
            lectus pretium. Donec euismod, nisi vel consectetur sollicitudin,
            nisi odio ultricies libero, in viverra metus nisi id eros.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
