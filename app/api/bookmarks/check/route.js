import { getSessionUser } from "@/app/components/getSessionUser";
import connectDB from "@/config/database";
import User from "@/models/User";

export const dynamic = "force-dynamic";

export const POST = async (request) => {
  try {
    await connectDB();

    const { leagueId } = await request.json();
    console.log("leagueId:", leagueId);
    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.userId) {
      return new Response("User Id is required", { status: 401 });
    }

    const { userId } = sessionUser;
    // find User
    const user = await User.findOne({ _id: userId });
    // Check if property is bookmarked
    let isBookmarked = user.bookmarks.includes(leagueId);

    return new Response(JSON.stringify({ isBookmarked }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Failed to bookmark", { status: 500 });
  }
};
