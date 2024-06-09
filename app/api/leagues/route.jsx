import { getSessionUser } from "@/app/components/getSessionUser";
import connectDB from "@/config/database";
import cloudinary from "@/config/cloudinary";
import League from "@/models/League";

// GET /api/leagues
export const GET = async (request) => {
  try {
    await connectDB();

    const page = request?.nextUrl?.searchParams?.get("page") || 1;
    const pageSize = request?.nextUrl.searchParams.get("pageSize") || 3;

    const skip = (page - 1) * pageSize;

    const total = await League.countDocuments({});

    const leagues = await League.find({}).skip(skip).limit(pageSize);

    const result = { total, leagues };

    return new Response(JSON.stringify(result), { status: 200 });
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

    const formData = await request.formData();

    // Access all values  images

    const images = formData
      .getAll("images")
      .filter((image) => image.name !== "");

    // create LeagueData Object for database
    const LeagueData = {
      type: formData.get("type"),
      name: formData.get("name"),
      description: formData.get("description"),
      teams: formData.get("teams"),
      // images,
      owner: userId,
    };

    // Upload images to cloudinary

    const imageUploadPromises = [];

    for (const image of images) {
      const imageBuffer = await image.arrayBuffer();
      const imageArray = Array.from(new Uint8Array(imageBuffer));
      const imageData = Buffer.from(imageArray);
      //convert to base64
      const imageBase64 = imageData.toString("base64");
      //Make request to Upload
      const result = await cloudinary.uploader.upload(
        `data:image/png;base64,${imageBase64}`,
        {
          folder: "sasksoccer",
        }
      );

      imageUploadPromises.push(result.secure_url);
      //Wait for all images to upload
      const uploadedImages = await Promise.all(imageUploadPromises);
      //add uploaded images to League data object
      LeagueData.images = uploadedImages;
    }

    const newLeague = new League(LeagueData);
    await newLeague.save();
    return Response.redirect(
      `${process.env.NEXTAUTH_URL}/properties/${newLeague._id}`
    );

    // return new Response(JSON.stringify({ message: "Success" }), {
    //   status: 200,
    // });
  } catch (error) {
    console.log(error);
    return new Response("Failed to add League", { status: 500 });
  }
};
//

// export const GET = async (request) => {
//   try {
//     await connectDB();
//     return new Response("Hello world", { status: 200 });
//   } catch (error) {
//     console.log(error);
//     return new Response("Something went wrong", { status: 500 });
//   }
// };
