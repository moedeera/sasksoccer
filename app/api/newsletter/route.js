import { getSessionUser } from "@/app/components/getSessionUser";
import connectDB from "@/config/database";

import Message from "@/models/Messages";

export const dynamic = "force-dynamic";

// POST api/newsletter
export const POST = async (request) => {
  try {
    await connectDB();

    const { email } = await request.json();
    console.log(
      "email:",
      email,
      "request.email",
      request.email,
      "request",
      request
    );
    const newMessage = new Message({
      recipient: "66693f8716b9933b34ef7ecb",
      name: "Visitor",
      email,
      body: "Would like to join Newsletter list",
    });

    await newMessage.save();

    return new Response(JSON.stringify({ message: "Message Sent" }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
