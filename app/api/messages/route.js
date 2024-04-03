import { getSessionUser } from "@/app/components/getSessionUser";
import connectDB from "@/config/database";

import Message from "@/models/Messages";

export const dynamic = "force-dynamic";

// POST api/messages
export const POST = async (request) => {
  try {
    await connectDB();
    // Extract data from the request body
    const { sender, recipient, property, name, email, phone, message } =
      request.json();
    // Check for session User

    const sessionUser = await getSessionUser();
    if (!sessionUser || !sessionUser.user) {
      return new Response("User Id is required", { status: 401 });
    }
    const { user } = sessionUser;

    // cannot send message to self
    if (user.id === recipient) {
      return new Response(
        JSON.stringify(
          { message: "cannot send a message to yourself" },
          { status: 400 }
        )
      );
    }
    // Create a new message document
    const newMessage = await Message.create({
      sender: user.id,
      recipient,
      property,
      name,
      email,
      phone,
      message,
    });
    return new Response(
      JSON.stringify({ message: "Message Sent" }, { status: 200 })
    );
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ message: "Failed to send Message" }, { status: 500 })
    );
  }
};
