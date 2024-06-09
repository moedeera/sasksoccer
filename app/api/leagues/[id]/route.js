// GET api/properties/:id

import { getSessionUser } from "@/app/components/getSessionUser";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import League from "@/models/League";

export const GET = async (request, { params }) => {
  try {
    await connectDB();
    // Find property by slug
    console.log("slug is", params.id, params);
    // const league = await League.findById(params.id);
    const league = await League.findOne({ slug: params.id });
    // If property is not found
    if (!league) {
      return new Response("Property not found", { status: 404 });
    } else {
      return new Response(JSON.stringify(league), { status: 200 });
    }
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};

// DELETE /api/properties/:id
export const DELETE = async (request, { params }) => {
  try {
    const leagueId = params.id;
    // Check for session
    const sessionUser = await getSessionUser();
    if (!sessionUser || !sessionUser.userId) {
      return new Response("User ID is required");
    }
    // Get ID
    const { userId } = sessionUser;
    // Connect
    await connectDB();
    // Find property by ID
    const league = await Property.findById(leagueId);
    // If property is not found
    if (!league) {
      return new Response("Property not found", { status: 404 });
    }
    // Verify Ownership
    if (league.owner.toString() !== userId) {
      return new Response("Unauthorized Access", { status: 401 });
    }
    //
    await league.deleteOne();
    return new Response("Property Deleted", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};

// PUT /api/properties/:id
export const PUT = async (request, { params }) => {
  try {
    const { id } = params;
    await connectDB();

    const sessionUser = await getSessionUser();
    if (!sessionUser || !sessionUser.userId) {
      return new Response("User id not obtained", { status: 401 });
    }
    const { userId } = sessionUser;

    const formData = await request.formData();

    // Access all values from amenities
    const amenities = formData.getAll("amenities");
    // get property to update
    const existingProperty = await Property.findById(id);
    // make sure it exists
    if (!existingProperty) {
      return new Response("Property does not exist", { status: 404 });
    }
    //Verify OwnerShip
    if (existingProperty.owner.toString() !== userId) {
      return new Response("Unauthorized action", { status: 401 });
    }
    // create propertyData Object for database
    const propertyData = {
      type: formData.get("type"),
      name: formData.get("name"),
      description: formData.get("description"),
      location: {
        street: formData.get("location.street"),
        city: formData.get("location.city"),
        state: formData.get("location.state"),
        zipcode: formData.get("location.zipcode"),
      },
      beds: formData.get("beds"),
      baths: formData.get("baths"),
      square_feet: formData.get("square_feet"),
      amenities,
      rates: {
        weekly: formData.get("rates.weekly"),
        monthly: formData.get("rates.monthly"),
        nightly: formData.get("rates.nightly."),
      },
      seller_info: {
        name: formData.get("seller_info.name"),
        email: formData.get("seller_info.email"),
        phone: formData.get("seller_info.phone"),
      },

      owner: userId,
    };
    // Update property in database
    const updatedProperty = await Property.findByIdAndUpdate(id, propertyData);

    return new Response(JSON.stringify(updatedProperty), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to add property", { status: 500 });
  }
};
