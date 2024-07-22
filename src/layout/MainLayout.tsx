import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "@/components/footer/Footer";

export default function MainLayout() {
  return (
    <div className="font-roboto">
      <div className="bg-blue-100">
        <div className="mx-auto w-full max-w-[1200px]">
          <Header />
        </div>
      </div>
      <div className="bg-blue-50 py-4 dark:bg-slate-600">
        <div className="mx-auto w-full max-w-[1200px]">
          <Outlet />
        </div>
      </div>

      <div className="bg-blue-100">
        <div className="mx-auto w-full max-w-[1200px]">
          <Footer />
        </div>
      </div>
    </div>
  );
}
