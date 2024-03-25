// GET api/properties/:id

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
