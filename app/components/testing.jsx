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
  return <section className="px-4 py-6"></section>;
};
export default Properties;
