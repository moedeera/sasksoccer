"use client";

import { useParams } from "next/navigation";

const PropertyPage = () => {
  const { id } = useParams();
  return <div>SinglePropertyPage : {id} </div>;
};

export default PropertyPage;
