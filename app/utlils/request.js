const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// Basic functions
function generateRentalBasisString(rates) {
  // Get all keys from the object
  const keys = Object.keys(rates);

  // Convert the keys array into a string that lists all rental bases
  const rentalBases = keys.reduce((acc, key, index) => {
    // Format according to the position of the key in the array for proper grammar
    if (index === 0) {
      return key;
    } else if (index === keys.length - 1) {
      return `${acc} or ${key}`;
    } else {
      return `${acc}, ${key}`;
    }
  }, "");

  // Return the final string
  return `${rentalBases}`;
}

async function fetchProperties({ showFeatured = false } = {}) {
  try {
    // Handle the case where the domain is not available yet
    if (!apiDomain) {
      return [];
    }

    const res = await fetch(
      `${apiDomain}/properties${showFeatured ? "/featured" : ""}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

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

export { fetchProperties, fetchProperty, generateRentalBasisString };
