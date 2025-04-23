import connectDB from "../../../../config/database";
import Message from "../../../../models/Messages";
import { getSessionUser } from "../../../components/getSessionUser";

export const dynamic = "force-dynamic";

// PUT /api/messages/:id

export const PUT = async (request, { params }) => {
  try {
    await connectDB();

    const sessionUser = await getSessionUser();
    if (!sessionUser || !sessionUser.user) {
      return new Response("User ID is required", {
        status: 401,
      });
    }

    const { userId } = sessionUser;
    const message = await Message.findById(params.id);
    if (!message) {
      return new Response("Message not found", {
        status: 401,
      });
    }
    // verify ownership
    if (message.recipient.toString() !== userId) {
      return new Response("Unauthorized", {
        status: 401,
      });
    }

    // Update message to read or unread depending on the state
    message.read = true;
    await message.save();

    return new Response(JSON.stringify(message), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
// DELETE /api/messages/:id

export const DELETE = async (request, { params }) => {
  try {
    await connectDB();

    const sessionUser = await getSessionUser();
    if (!sessionUser || !sessionUser.user) {
      return new Response("User ID is required", {
        status: 401,
      });
    }

    const { userId } = sessionUser;
    const message = await Message.findById(params.id);
    if (!message) {
      return new Response("Message not found", {
        status: 401,
      });
    }
    // verify ownership
    if (message.recipient.toString() !== userId) {
      co;
      return new Response("Unauthorized", {
        status: 401,
      });
    }

    // Update message to read or unread depending on the state

    await message.deleteOne();

    return new Response("Message Deleted", { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
