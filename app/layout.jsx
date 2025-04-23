import "../assets/styles/globals.css";

import AuthProvider from "./components/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalProvider } from "./context/GlobalContext";
import "photoswipe/dist/photoswipe.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "../lib/utils";
import { GoogleAnalytics } from "@next/third-parties/google";
import FooterComponent from "./components/Footer/Footer";
import NavbarJS from "./components/NavbarJS/NavbarJS";

export const metadata = {
  title: "SaskSoccerHub - Saskatoon's Ultimate Soccer News & Updates",
  description:
    "Stay updated with the latest Saskatoon soccer news, game schedules, player highlights, league updates, and more on SaskSoccerHub.",
  keywords:
    "Saskatoon soccer, soccer news, SaskSoccerHub, Saskatoon leagues, soccer updates, player highlights, game schedules, soccer events",
  author: "SaskSoccerHub Team",
  robots: "index, follow", // Ensures your page is indexed and links are followed by search engines
  canonical: "https://www.sasksoccerhub.com", // Indicates the preferred URL for this page
  og: {
    title: "SaskSoccerHub - Saskatoon's Ultimate Soccer News",
    description:
      "Discover Saskatoon's premier source for soccer news, events, and updates. Stay informed with SaskSoccerHub.",
    url: "https://www.sasksoccerhub.com",
    type: "website",
    image: "https://www.sasksoccerhub.com/og-image.jpg", // Add a representative image for social sharing
  },
  twitter: {
    card: "summary_large_image",
    title: "SaskSoccerHub - Saskatoon's Ultimate Soccer News",
    description:
      "Explore the latest soccer updates, game schedules, and highlights with Saskatoon's #1 soccer news source.",
    image: "https://www.sasksoccerhub.com/twitter-image.jpg", // Same or different image from the OG image
    site: "@SaskSoccerHub", // Your Twitter handle if applicable
  },
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const MainLayout = ({ children }) => {
  return (
    <GlobalProvider>
      <AuthProvider>
        <html lang="en">
          <head>
            {/* Google Analytics */}
            <GoogleAnalytics gaId="G-Q818263H9V" />
          </head>
          <body
            className={cn(
              "min-h-screen bg-background font-sans antialiased",
              fontSans.variable
            )}
          >
            {/* <Navbar2 /> */}
            <NavbarJS />

            <main
              style={{
                minHeight: "100vh",
                Width: "100vw",
                margin: "0 auto",
              }}
            >
              {children}
            </main>
            <FooterComponent />
            <ToastContainer />
          </body>
        </html>
      </AuthProvider>
    </GlobalProvider>
  );
};

export default MainLayout;
