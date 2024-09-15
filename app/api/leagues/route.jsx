import { getSessionUser } from "@/app/components/getSessionUser";
import { generateSlug } from "@/app/utlils/functions";
import connectDB from "@/config/database";
import League from "@/models/League";
import { setCorsHeaders } from "../custommiddleware";

// GET /api/leagues
export const GET = async (request) => {
  // try {
  //   await connectDB();

  //   const page = request?.nextUrl?.searchParams?.get("page") || 1;
  //   const pageSize = request?.nextUrl.searchParams.get("pageSize") || 3;

  //   const skip = (page - 1) * pageSize;

  //   const total = await League.countDocuments({});

  //   const leagues = await League.find({}).skip(skip).limit(pageSize);

  //   const result = { total, leagues };

  //   return new Response(JSON.stringify(result), { status: 200 });
  // } catch (error) {
  //   console.log(error);
  //   return new Response("Something went wrong", { status: 500 });
  // }
  const response = new Response();

  // Set CORS headers
  const corsResponse = setCorsHeaders(request, response);
  if (corsResponse) return corsResponse; // If it's an OPTIONS request, return early

  try {
    await connectDB();

    const page = request?.nextUrl?.searchParams?.get("page") || 1;
    const pageSize = request?.nextUrl?.searchParams?.get("pageSize") || 3;
    const skip = (page - 1) * pageSize;

    const total = await League.countDocuments({});
    const leagues = await League.find({}).skip(skip).limit(pageSize);

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

// Adding new League
export const POST = async (request) => {
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

    const newLeague = new League({
      ...body,
      slug: slug,
      admin: sessionUser.user.name,
      owner: userId,
    });

    await newLeague.save();

    return new Response(JSON.stringify(newLeague), { status: 201 });
    // return Response.redirect(
    //   `${process.env.NEXTAUTH_URL}/leagues/${newLeague.slug}`
    // );
  } catch (error) {
    console.log(error);
    return new Response("Failed to add League", { status: 500 });
  }
};
