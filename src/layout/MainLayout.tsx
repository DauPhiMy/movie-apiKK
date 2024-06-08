import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "@/components/footer/Footer";

export default function MainLayout() {
  return (
    <div className="max-w-[1400px] mx-auto w-full font-roboto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
