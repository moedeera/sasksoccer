"use client";

import BookMarkButton from "@/app/components/BookMarkButton";
import PropertyContactForm from "@/app/components/PropertyContactForm";
import PropertyDetails from "@/app/components/PropertyDetails";
import PropertyHeaderImage from "@/app/components/PropertyHeaderImage";
import PropertyImages from "@/app/components/PropertyImages";
import ShareButtons from "@/app/components/ShareButtons";
import Spinner from "@/app/components/Spinner";
import { fetchProperty } from "@/app/utlils/request";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const PropertyPage = () => {
  const { id } = useParams();

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPropertyData = async () => {
      if (!id) {
        return;
      }
      try {
        const propertyData = await fetchProperty(id);
        setProperty(propertyData);
        console.log(propertyData);
      } catch (error) {
        console.error("Error fetching property", error);
      } finally {
        setLoading(false);
      }
    };

    if (property === null) {
      fetchPropertyData();
    }
  }, []);
  fetchProperty;

  return (
    <div>
      {" "}
      {loading && <Spinner loading={loading} />}
      {!loading && property && (
        <>
          <PropertyHeaderImage image={property.images[0]} />
          <section>
            <div className="container m-auto py-6 px-6">
              <Link
                href="/properties"
                className="text-blue-500 hover:text-blue-600 flex items-center"
              >
                Back to Properties
              </Link>
            </div>
          </section>

          <section className="bg-blue-50">
            <div className="container m-auto py-10 px-6">
              <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                <PropertyDetails property={property} />
                <aside className="space-y-4">
                  <BookMarkButton property={property} />
                  <ShareButtons property={property} />
                  <PropertyContactForm property={property} />
                </aside>
              </div>
            </div>
          </section>
          <PropertyImages images={property.images} />
        </>
      )}
    </div>
  );
};

export default PropertyPage;
