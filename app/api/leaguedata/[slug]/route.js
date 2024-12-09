import { getSessionUser } from "@/app/components/getSessionUser";
import { generateSlug } from "@/app/utlils/functions";
import connectDB from "@/config/database";
import LeagueData from "@/models/LeagueData";
import { setCorsHeaders } from "../../custommiddleware";

// GET /api/leaguedata/:id
export const GET = async (request, { params }) => {
  console.log("params slug is:", params.slug);
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
// PUT /api/leagues/:id
export const PUT = async (request, { params }) => {
  const response = new Response();

  // Set CORS headers
  const corsResponse = setCorsHeaders(request, response);
  if (corsResponse) return corsResponse; // If it's an OPTIONS request, return early

  try {
    await connectDB();

    const sessionUser = await getSessionUser();
    if (!sessionUser || !sessionUser.userId) {
      return new Response("User id not obtained", { status: 401 });
    }
    const { userId } = sessionUser;

    const body = await request.json();
    console.log(body.details);
    const leagueSlug = params.slug;

    // Find the existing league
    const league = await LeagueData.findOne({ slug: leagueSlug });
    if (!league) {
      return new Response("League not found", { status: 404 });
    }

    // Ensure the user is the owner of the league
    if (league.owner.toString() !== userId) {
      return new Response("Unauthorized", { status: 403 });
    }

    // Update the league fields
    const changed = league.name !== body.name;

    league.admin = sessionUser.user.name;
    league.name = body.name;
    league.description = body.description;
    league.type = body.type;

    if (changed) {
      let slug = body.name.toLowerCase().replace(/[\s]+/g, "-");
      const existingLeague = await League.findOne({ slug: slug });

      if (existingLeague) {
        let alternateSlug = generateSlug(body.name, userId);
        league.slug = alternateSlug;
      } else {
        league.slug = slug;
      }
    }

    league.teams = body.teams;
    league.games = body.games;
    league.details = body.details;
    league.updatedAt = new Date();

    await league.save();

    response.headers.set("Content-Type", "application/json");
    return new Response(JSON.stringify(league), {
      status: 200,
      headers: response.headers,
    });
  } catch (error) {
    console.log(error);
    return new Response("Failed to update League", { status: 500 });
  }
};
