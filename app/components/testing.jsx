import PropertyCard from "./PropertyCard";

const Properties = async () => {
  const fetchProperties = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_DOMAIN}/properties`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const properties = await fetchProperties();

  if (properties === undefined) {
    return <>Loading</>;
  }
  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {properties?.length === 0 ? (
          <>No properties found</>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties?.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
export default Properties;
