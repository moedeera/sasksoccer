import { getSessionUser } from "@/app/components/getSessionUser";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import User from "@/models/User";

export const dynamic = "force-dynamic";

// GET /api/bookmarks
export const GET = async () => {
  try {
    await connectDB();

    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.userId) {
      return new Response("User ID is required", { status: 401 });
    }

    const { userId } = sessionUser;

    // Find user in database
    const user = await User.findOne({ _id: userId });

    // Get users bookmarks
    const bookmarks = await Property.find({ _id: { $in: user.bookmarks } });

    return new Response(JSON.stringify(bookmarks), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};

export const POST = async (request) => {
  try {
    await connectDB();

    const { leagueId } = await request.json();
    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.userId) {
      return new Response("User Id is required", { status: 401 });
    }

    const { userId } = sessionUser;
    // find User
    const user = await User.findOne({ _id: userId });
    console.log(user.bookmarks);
    // Check if property is bookmarked
    let isBookmarked = user.bookmarks.includes(leagueId);

    let message;
    if (isBookmarked) {
      user.bookmarks.pull(leagueId);
      message = "Bookmark removed successfully";
      isBookmarked = false;
    } else {
      //if not bookmarked, add it
      user.bookmarks.push(leagueId);
      message = "Bookmark added successfully";
      isBookmarked = true;
    }

    await user.save();

    return new Response(JSON.stringify({ message, isBookmarked }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Failed to bookmark", { status: 500 });
  }
};
