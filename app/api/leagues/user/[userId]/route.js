import connectDB from "../../../../../config/database";
import League from "../../../../../models/League";

// GET /api/properties/user/:userId
export const GET = async (request, { params }) => {
  try {
    await connectDB();

    const userId = params.userId;
    console.log("called for user:", params.userId);

    if (!userId) {
      return new Response("User ID is required", { status: 400 });
    }

    const leagues = await League.find({ owner: userId });

    return new Response(JSON.stringify(leagues), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something Went Wrong", { status: 500 });
  }
};
