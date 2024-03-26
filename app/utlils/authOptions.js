import GoogleProvider from "next-auth/providers/google";

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
      // check if user logging in exist
      // if not, add user to database
      // return true to allow sign in
    },

    //Modify the session object
    async session({ session }) {
      // get user from database
      // assign user id to the session
    },
  },
};
