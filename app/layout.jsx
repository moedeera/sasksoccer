import "@/assets/styles/globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "nextjs-template",
  description: "next js template",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
