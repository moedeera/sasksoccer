import connectDB from "../../../../config/database";
import Message from "../../../../models/Messages";
import { getSessionUser } from "../../../components/getSessionUser";

export const dynamic = "force-dynamic";

// GET/api/messages/unread-count

export const GET = async (request, { params }) => {
  try {
    await connectDB();

    const sessionUser = await getSessionUser();
    const { userId } = sessionUser;
    if (!sessionUser || !sessionUser.user) {
      return new Response("User ID is required", {
        status: 401,
      });
    }
    const unreadMessagesCount = await Message.countDocuments({
      recipient: userId,
      read: false,
    });

    return new Response(JSON.stringify({ count: unreadMessagesCount }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
