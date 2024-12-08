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

    // const page = request?.nextUrl?.searchParams?.get("page") || 1;
    // const pageSize = request?.nextUrl?.searchParams?.get("pageSize") || 3;
    // const skip = (page - 1) * pageSize;

    // const total = await LeagueData.countDocuments({});
    // const leagues = await LeagueData.find({}).skip(skip).limit(pageSize);
    const leagues = await LeagueData.find();

    response.headers.set("Content-Type", "application/json");
    return new Response(JSON.stringify(leagues), {
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
  console.log("called POST route");
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

    // const body = await request.json();
    // console.log("this is the body:", body);

    // let slug = body.name.toLowerCase().replace(/[\s]+/g, "-");
    // const existingLeague = await League.findOne({ slug: slug });

    // if (existingLeague) {
    //   slug = generateSlug(body.name, userId);
    // }
    let x = Math.floor(Math.random() * 9);
    let randomId = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
    let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    const newLeague = new LeagueData({
      //   ...body,
      //   slug: slug,
      owner: userId,
      admin: sessionUser.user.name,
      name: "Men's turf division 1",
      type: "Mens",
      year: 2023,
      description: "Turf divisions for Mens 2019-2020 season",
      category: "indoor",
      slug: `${letters[x]}-${randomId}`,
      details: [
        {
          group: "Mens 1",
          games: "",
          description: "Mens turf division 1",
          completed: false,
          winner: "n/a",
          runnerUp: "n/a",
          playoffs1: "tba",
          playoffs2: "tba",
          final: "tba",
          link: "n/a",
        },
      ],
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
