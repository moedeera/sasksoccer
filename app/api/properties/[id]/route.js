// GET api/properties/:id

import { getSessionUser } from "@/app/components/getSessionUser";
import connectDB from "@/config/database";
import Property from "@/models/Property";

export const GET = async (request, { params }) => {
  try {
    await connectDB();
    // Find property by ID
    const property = await Property.findById(params.id);
    // If property is not found
    if (!property) {
      return new Response("Property not found", { status: 404 });
    } else {
      return new Response(JSON.stringify(property), { status: 200 });
    }
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};

// DELETE /api/properties/:id
export const DELETE = async (request, { params }) => {
  try {
    const propertyId = params.id;
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
    const property = await Property.findById(propertyId);
    // If property is not found
    if (!property) {
      return new Response("Property not found", { status: 404 });
    }
    // Verify Ownership
    if (property.owner.toString() !== userId) {
      return new Response("Unauthorized Access", { status: 401 });
    }
    //
    await property.deleteOne();
    return new Response("Property Deleted", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
