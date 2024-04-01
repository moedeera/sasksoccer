import PropertyCard from "./PropertyCard";

import Pagination from "./Pagination";
import { fetchProperties } from "../utlils/request";

const Properties = async () => {
  const loading = false;
  const page = 1;
  const pageSize = 6;
  const totalItems = 0;

  const properties = await fetchProperties();
  console.log(properties);

  const handlePageChange = (newPage) => {
    // setPage(newPage);
    console.log("hello");
  };
  if (properties === undefined) {
    return <>Loading</>;
  }
  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {properties?.length === 0 ? (
          <p>No properties found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties?.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}
        {/* <Pagination
          page={page}
          pageSize={pageSize}
          totalItems={totalItems}
          onPageChange={handlePageChange}
        /> */}
      </div>
    </section>
  );
  ////
  // return loading ? (
  //   <Spinner />
  // ) : (
  //   <section className="px-4 py-6">
  //     <div className="container-xl lg:container m-auto px-4 py-6">
  //       {properties.length === 0 ? (
  //         <p>No properties found</p>
  //       ) : (
  //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  //           {properties.map((property) => (
  //             <PropertyCard key={property._id} property={property} />
  //           ))}
  //         </div>
  //       )}
  //       <Pagination
  //         page={page}
  //         pageSize={pageSize}
  //         totalItems={totalItems}
  //         onPageChange={handlePageChange}
  //       />
  //     </div>
  //   </section>
  // );
};
export default Properties;
