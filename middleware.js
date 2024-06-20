export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/leagues/create",
    "/profile",
    "/leagues/saved",
    "/messages",
    "/account",
  ],
};
