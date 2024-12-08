import { getSessionUser } from "@/app/components/getSessionUser";
import { generateSlug } from "@/app/utlils/functions";
import connectDB from "@/config/database";
import LeagueData from "@/models/LeagueData";
import { setCorsHeaders } from "../../custommiddleware";

// GET /api/leagues/:id
export const GET = async (request, { params }) => {
  const response = new Response();

  // Set CORS headers
  const corsResponse = setCorsHeaders(request, response);
  if (corsResponse) return corsResponse; // If it's an OPTIONS request, return early

  try {
    await connectDB();
    // Find league by slug
    console.log("params:", params.slug);
    const league = await LeagueData.findOne({ slug: params.slug });

    // If league is not found
    if (!league) {
      return new Response("League not found", { status: 404 });
    } else {
      response.headers.set("Content-Type", "application/json");
      return new Response(JSON.stringify(league), {
        status: 200,
        headers: response.headers,
      });
    }
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
