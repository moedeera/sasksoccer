const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;
// fetch all properties
const fetchProperties = async () => {
  try {
    // handle case where domain is not available
    if (!apiDomain) {
      return [];
    }
    const res = await fetch(`${apiDomain}/properties`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

// fetch Single property
const fetchProperty = async (id) => {
  try {
    // handle case where domain is not available
    if (!apiDomain) {
      return null;
    }
    const res = await fetch(`${apiDomain}/properties/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export { fetchProperties, fetchProperty };
