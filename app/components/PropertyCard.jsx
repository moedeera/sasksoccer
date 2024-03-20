"use client";

import Image from "next/image";
import Link from "next/link";

import FaBed from "@/assets/images/beds.png";
import FaBath from "@/assets/images/baths.png";
import FaRulerCombined from "@/assets/images/clip.png";
import FaMoneyBill from "@/assets/images/price.png";
import FaMapMarker from "@/assets/images/stack.png";
import image1 from "@/app/components/house-placeholder.png";
const PropertyCard = ({ property }) => {
  console.log(property);
  const getRateDisplay = () => {
    const { rates } = property;

    if (rates.monthly) {
      return `${rates.monthly.toLocaleString()}/mo`;
    } else if (rates.weekly) {
      return `${rates.weekly.toLocaleString()}/wk`;
    } else if (rates.nightly) {
      return `${rates.nightly.toLocaleString()}/night`;
    }
  };

  let images = [
    "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/5524166/pexels-photo-5524166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/5524167/pexels-photo-5524167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7578847/pexels-photo-7578847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/11018238/pexels-photo-11018238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/5524166/pexels-photo-5524166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/5524167/pexels-photo-5524167.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7578847/pexels-photo-7578847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/11018238/pexels-photo-11018238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  return (
    <div className="rounded-xl shadow-md relative">
      {/* <Image
        // src={property.images[0]}
        src={image1}
        alt="dsdsd"
        style={{ width: "100%", maxWidth: "20px" }}
        sizes="100vw"
        className="w-full h-auto rounded-t-xl"
      /> */}
      <img src={images[property._id]} alt="blah" />
      <div className="p-4">
        <div className="text-left md:text-center lg:text-left mb-6">
          <div className="text-gray-600">{property.type}</div>
          <h3 className="text-xl font-bold">{property.name}</h3>
        </div>
        <h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
          ${getRateDisplay()}
        </h3>

        <div className="flex justify-center gap-4 text-gray-500 mb-4">
          <p>
            <Image
              src={FaBed}
              alt="fudge"
              style={{
                width: "100%",
                maxWidth: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            />{" "}
            {property.beds} <span className="md:hidden lg:inline">Beds</span>
          </p>
          <p>
            <Image
              src={FaBath}
              alt="fudge"
              style={{ width: "100%", maxWidth: "20px" }}
            />{" "}
            {/* <FaBath className="inline mr-2" /> */}
            {property.baths} <span className="md:hidden lg:inline">Baths</span>
          </p>
          <p>
            <Image
              src={FaMapMarker}
              alt="fudge"
              style={{ width: "100%", maxWidth: "20px" }}
            />
            {property.square_feet}{" "}
            <span className="md:hidden lg:inline">sqft</span>
          </p>
        </div>

        <div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
          {property.rates.nightly && (
            <p>{/* <FaMoneyBill className="inline mr-2" /> Nightly */}</p>
          )}

          {property.rates.weekly && (
            <p>{/* <FaMoneyBill className="inline mr-2" /> Weekly */}</p>
          )}

          {property.rates.monthly && (
            <p>{/* <FaMoneyBill className="inline mr-2" /> Monthly */}</p>
          )}
        </div>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="flex align-middle gap-2 mb-4 lg:mb-0">
            {/* <FaMapMarker className="text-orange-700 mt-1" /> */}
            <span className="text-orange-700">
              {" "}
              {property.location.city} {property.location.state}{" "}
            </span>
          </div>
          <Link
            href={`/properties/${property._id}`}
            className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PropertyCard;
