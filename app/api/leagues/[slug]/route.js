import { getSessionUser } from "@/app/components/getSessionUser";
import connectDB from "@/config/database";
import League from "@/models/League";

// GET /api/leagues/:id
export const GET = async (request, { params }) => {
  try {
    await connectDB();
    // Find league by slug
    console.log("params:", params.slug);
    // const league = await League.findById(params.id);
    const league = await League.findOne({ slug: params.slug });
    // If league is not found
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

// PUT /api/leagues/:id
export const PUT = async (request, { params }) => {
  try {
    await connectDB();

    const sessionUser = await getSessionUser();
    if (!sessionUser || !sessionUser.userId) {
      return new Response("User id not obtained", { status: 401 });
    }
    const { userId } = sessionUser;

    const body = await request.json();
    const leagueId = params.id;

    // Find the existing league
    const league = await League.findById(leagueId);
    if (!league) {
      return new Response("League not found", { status: 404 });
    }

    // Ensure the user is the owner of the league
    if (league.owner.toString() !== userId) {
      return new Response("Unauthorized", { status: 403 });
    }

    // Update the league fields
    league.name = body.name;
    league.description = body.description;
    league.type = body.type;
    league.teams = body.teams;
    league.games = body.games;
    league.updatedAt = new Date();

    await league.save();

    return new Response(JSON.stringify(league), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to update League", { status: 500 });
  }
};
