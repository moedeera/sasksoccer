import { getSessionUser } from "@/app/components/getSessionUser";
import { generateSlug } from "@/app/utlils/functions";
import connectDB from "@/config/database";

import LeagueData from "@/models/LeagueData";
import { setCorsHeaders } from "../custommiddleware";

// GET /api/leagues
export const GET = async (request) => {
  const response = new Response();

  // Set CORS headers
  const corsResponse = setCorsHeaders(request, response);
  if (corsResponse) return corsResponse; // If it's an OPTIONS request, return early

  try {
    await connectDB();

    const page = request?.nextUrl?.searchParams?.get("page") || 1;
    const pageSize = request?.nextUrl?.searchParams?.get("pageSize") || 3;
    const skip = (page - 1) * pageSize;

    const total = await LeagueData.countDocuments({});
    const leagues = await LeagueData.find({}).skip(skip).limit(pageSize);

    const result = { total, leagues };

    response.headers.set("Content-Type", "application/json");
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: response.headers,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};

// Adding new LeagueData
export const POST = async (request) => {
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
    console.log("this is the body:", body);

    let slug = body.name.toLowerCase().replace(/[\s]+/g, "-");
    const existingLeague = await League.findOne({ slug: slug });

    if (existingLeague) {
      slug = generateSlug(body.name, userId);
    }

    const newLeague = new LeagueData({
      //   ...body,
      //   slug: slug,
      name: "James",
      type: "Soccer",
      year: "2023",
      description: "normal",
      category: "soccer",
      details: [
        {
          group: "sddsdas",
          description: "dsdasdsa",
          games: "",
          completed: false,
          winner: "n/a",
          runnerUp: "n/a",
          playoffs1: "tba",
          playoffs2: "tba",
          final: "tba",
          link: "n/a",
        },
      ],
      admin: sessionUser.user.name,
      owner: userId,
    });

    await newLeague.save();

    response.headers.set("Content-Type", "application/json");
    return new Response(JSON.stringify(newLeague), {
      status: 201,
      headers: response.headers,
    });
  } catch (error) {
    console.log(error);
    return new Response("Failed to add League", { status: 500 });
  }
};

// Update leagueData
// PUT /api/leagues/check-and-update
export const PUT = async (request) => {
  console.log("called");
  const response = new Response();

  // Set CORS headers
  const corsResponse = setCorsHeaders(request, response);
  if (corsResponse) return corsResponse; // If it's an OPTIONS request, return early

  try {
    await connectDB();

    const leagues = await League.find({});

    const currentYear = new Date().getFullYear();

    for (const league of leagues) {
      let updateFields = {};

      if (!league.category) {
        updateFields.category = "indoor";
      }

      if (!league.year) {
        updateFields.year = currentYear;
      }

      if (Object.keys(updateFields).length > 0) {
        await League.updateOne({ _id: league._id }, { $set: updateFields });
      }
    }

    response.headers.set("Content-Type", "application/json");
    return new Response(
      JSON.stringify({ message: "Leagues updated successfully" }),
      { status: 200, headers: response.headers }
    );
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};

// revised leagues
