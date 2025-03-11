import React from "react";
import "./BlogLanding.css";

const BlogLanding = () => {
  return (
    <div className="blog-landing-container">
      <div className="blog-header-main">
        {/* Featured content over the background image */}
        <div className="blog-header-content">
          <h2>Featured Article Title</h2>
          <p>
            A short description of the article goes here. This text sits near
            the bottom half of the image.
          </p>
          <button>Read More</button>
        </div>
      </div>

      {/* Side container that has two items. 
          They’re side by side below 768px and stacked from 768px up. */}
      <div className="blog-header-side">
        <div className="blog-header-side-item">Side Item 1</div>
        <div className="blog-header-side-item">Side Item 2</div>
      </div>
    </div>
  );
};

export default BlogLanding;
