"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import profileDefault from "../../assets/images/profile.png";
import { useSession } from "next-auth/react";
import Spinner from "../components/Spinner";

import Link from "next/link";
import { toast } from "react-toastify";
toast;
const ProfilePage = () => {
  const { data: session } = useSession();
  const profileImage = session?.user?.image;
  const profileName = session?.user?.name;
  const profileEmail = session?.user?.email;

  const [loading, setLoading] = useState(true);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchUserProperties = async (userId) => {
      if (!userId) {
        return;
      }
      try {
        const res = await fetch(`api/properties/user/${userId}`);

        if (res.status === 200) {
          const data = await res.json();
          setProperties(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    // fetch only if user is available
    if (session) {
      fetchUserProperties(session.user.id);
    }
  }, [session]);

  const handleDeleteProperty = async (propertyId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this property?"
    );
    if (!confirmed) {
      return;
    }

    try {
      const res = await fetch(`api/properties/${propertyId}`, {
        method: "DELETE",
      });

      if (res.status === 200) {
        const updatedProperties = properties.filter((property) => property._id);
        setProperties(updatedProperties);
        toast.success("property deleted");
      } else {
        toast.error("failed to delete property");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete property");
    }
  };

  return (
    <section className="bg-blue-50">
      <div className="container m-auto py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <h1 className="text-3xl font-bold mb-4">Your Profile</h1>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 mx-20 mt-10">
              <div className="mb-4">
                {profileImage ? (
                  <Image
                    className="h-32 w-32 md:h-48 md:w-48 rounded-full mx-auto md:mx-0"
                    src={profileImage}
                    width={400}
                    height={300}
                    alt="profile image"
                  />
                ) : (
                  <Image
                    className="h-32 w-32 md:h-48 md:w-48 rounded-full mx-auto md:mx-0"
                    src={profileDefault}
                    alt="User"
                    width={400}
                    height={300}
                  />
                )}
              </div>
              <h2 className="text-2xl mb-4">
                <span className="font-bold block">Name: </span>
                {profileName ? profileName : "John Doe"}
              </h2>
              <h2 className="text-2xl">
                <span className="font-bold block">Email: </span>
                {profileEmail ? profileEmail : "john@gmail.com"}
              </h2>
            </div>

            <div className="md:w-3/4 md:pl-4">
              <h2 className="text-xl font-semibold mb-4">
                {profileName ? profileName : ""} Listings
              </h2>
              {loading && <Spinner loading={loading} />}
              {properties.length && !loading === 0
                ? "No Properties"
                : properties?.map((property) => (
                    <div className="mb-10" key={property._id}>
                      <Link href={`/properties/${property._id}`}>
                        <Image
                          className="h-32 w-full rounded-md object-cover"
                          src={property.images[0]}
                          alt="Property 1"
                          width={400}
                          height={300}
                        />
                      </Link>
                      <div className="mt-2">
                        <p className="text-lg font-semibold">{property.name}</p>
                        <p className="text-gray-600">
                          {property.location.street} {property.location.city}{" "}
                          {property.location.state}
                        </p>
                      </div>
                      <div className="mt-2">
                        <Link
                          href={`${property._id}/edit`}
                          className="bg-blue-500 text-white px-3 py-3 rounded-md mr-2 hover:bg-blue-600"
                        >
                          Edit
                        </Link>
                        <button
                          className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600"
                          type="button"
                          onClick={() => {
                            handleDeleteProperty(property._id);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
