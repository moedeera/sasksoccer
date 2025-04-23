import GoogleProvider from "next-auth/providers/google";
import connectDB from "../../config/database";
import User from "../../models/User";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    // Invoked on successfull signin
    async signIn({ profile }) {
      // connect to datatbase
      await connectDB();
      // check if user logging in exist
      const userExists = await User.findOne({ email: profile.email });
      // if not, add user to database
      if (!userExists) {
        //truncate user name if too long
        const username = profile.name.slice(0, 20);
        await User.create({
          email: profile.email,
          username,
          image: profile.picture,
        });
      }

      // return true to allow sign in
      return true;
    },

    //Modify the session object
    async session({ session }) {
      // get user from database
      const user = await User.findOne({ email: session.user.email });
      // assign user id to the session
      session.user.id = user._id.toString();
      // return session
      return session;
    },
  },
};
