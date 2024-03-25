import React from "react";

const PropertyHeaderImage = ({ image }) => {
  return (
    <>
      {" "}
      <section>
        <div className="container-xl m-auto">
          <div className="grid grid-cols-1">
            <img
              src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="object-cover h-[400px] w-full"
              width="1800"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertyHeaderImage;
