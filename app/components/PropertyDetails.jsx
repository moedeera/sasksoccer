import React from "react";
import { generateRentalBasisString } from "../utlils/request";
import FaBed from "@/assets/images/beds.png";
import FaBath from "@/assets/images/baths.png";
import FaMapMarker from "@/assets/images/stack.png";
import FaCheck from "@/assets/images/check.png";
import Image from "next/image";

import PropertyMap from "./PropertyMap";

const PropertyDetails = ({ property }) => {
  const details = [
    { name: "beds", info: property?.beds, image: FaBed },
    { name: "baths", info: property?.baths, image: FaBath },
    { name: "sqft", info: property?.square_feet, image: FaMapMarker },
  ];

  return (
    <main>
      <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
        <div className="text-gray-500 mb-4">{property.type}</div>
        <h1 className="text-3xl font-bold mb-4">{property.name}</h1>
        <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
          <i className="fa-solid fa-location-dot text-lg text-orange-700 mr-2"></i>
          <p className="text-orange-700">
            {property.location.street} {property.location.city},{" "}
            {property.location.state} {property.location.zipcode}
          </p>
        </div>

        <h3 className="text-lg font-bold my-6 bg-gray-800 text-white p-2">
          Rates & Options
        </h3>
        <div className="flex flex-col md:flex-row justify-around">
          {property?.rates?.nightly && (
            <div className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
              <div className="text-gray-500 mr-2 font-bold">Nightly</div>
              <div className="text-2xl font-bold">
                <i className="fa fa-xmark text-red-700"></i>
              </div>
            </div>
          )}

          {property?.rates?.weekly && (
            <div className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
              <div className="text-gray-500 mr-2 font-bold">Weekly</div>
              <div className="text-2xl font-bold text-blue-500">
                ${property?.rates?.weekly}
              </div>
            </div>
          )}

          {property?.rates?.monthly && (
            <div className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
              <div className="text-gray-500 mr-2 font-bold">Monthly</div>
              <div className="text-2xl font-bold text-blue-500">
                ${property?.rates?.monthly}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-lg font-bold mb-6">Description & Details</h3>
        <div className="flex justify-center gap-4 text-blue-500 mb-4 text-xl space-x-9">
          {details.map((detail, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src={detail.image} // Dynamic source based on property._id
                alt="blah" // Alt text for the image
                style={{
                  width: "100%",
                  maxWidth: "20px",
                  marginBottom: "5px",
                }}
                className="w-full h-auto rounded-t-xl"
                layout="responsive" // Optional: Adjusts the layout behavior of the image (e.g., fill, fixed, responsive)
              />
              <p>
                {" "}
                {detail.info}{" "}
                <span className="hidden sm:inline capitalize">
                  {detail.name}
                </span>
              </p>
            </div>
          ))}
        </div>
        <p className="text-gray-500 mb-4">{property.description}</p>
        <p className="text-gray-500 mb-4">
          We have a beautiful apartment located near the commons. It is a{" "}
          {property.beds}
          bedroom apartment with a full kitchen and {property.baths} bathroom.
          It is available for {generateRentalBasisString(property.rates)}{" "}
          rentals.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h3 className="text-lg font-bold mb-6">Amenities</h3>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none">
          {property.amenities.map((amenity, index) => (
            <li key={index} className="flex gap-x-1.5">
              {/* <i className="fas fa-check text-green-600 mr-2 mt-3"></i> */}
              <Image
                src={FaCheck} // Dynamic source based on property._id
                alt="blah" // Alt text for the image
                style={{
                  width: "100%",
                  maxWidth: "20px",
                  marginBottom: "5px",
                }}
                className="w-full h-auto rounded-t-xl"
                layout="responsive" // Optional: Adjusts the layout behavior of the image (e.g., fill, fixed, responsive)
              />

              {amenity}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <div id="map">
          <PropertyMap property={property} />
        </div>
      </div>
    </main>
  );
};

export default PropertyDetails;
