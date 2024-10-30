import "@/assets/styles/globals.css";

import AuthProvider from "./components/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalProvider } from "./context/GlobalContext";
import "photoswipe/dist/photoswipe.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar2 from "./components/Navbar/Navbar";
import FooterComponent from "./components/Footer/Footer";
import NavbarJS from "./components/NavbarJS/NavbarJS";

export const metadata = {
  title: "SaskSoccerHub",
  description: "Saskatoon Soccer News",
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
