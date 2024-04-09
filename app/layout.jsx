import "@/assets/styles/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AuthProvider from "./components/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalProvider } from "./context/GlobalContext";
import "photoswipe/dist/photoswipe.css";

export const metadata = {
  title: "nextjs-template",
  description: "next js template",
};

const MainLayout = ({ children }) => {
  return (
    <GlobalProvider>
      <AuthProvider>
        <html lang="en">
          <body>
            <Navbar />
            <main
              style={{
                minHeight: "100vh",
                maxWidth: "1400px",
                margin: "0 auto",
              }}
            >
              {children}
            </main>
            <Footer />
            <ToastContainer />
          </body>
        </html>
      </AuthProvider>
    </GlobalProvider>
  );
};

export default MainLayout;
