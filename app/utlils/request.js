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

// fetch League
const fetchLeague = async (slug) => {
  try {
    // handle case where domain is not available
    if (!apiDomain) {
      return null;
    }
    const res = await fetch(`${apiDomain}/leagues/${slug}`);

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
//
const fetchLeagueData = async (slug) => {
  console.log("slug is:", slug);
  try {
    // handle case where domain is not available
    if (!apiDomain) {
      return null;
    }
    const res = await fetch(`${apiDomain}/leaguedata/${slug}`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    console.log("data is :", data);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export { generateRentalBasisString, fetchLeague, fetchLeagueData };
