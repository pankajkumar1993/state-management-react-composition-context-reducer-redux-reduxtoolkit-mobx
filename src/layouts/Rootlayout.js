import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
