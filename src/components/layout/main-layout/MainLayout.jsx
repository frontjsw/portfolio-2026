import { Outlet } from "react-router-dom";
import "./MainLayout.scss";
import { Header } from "@/components";
export const MainLayout = () => {
  return (
    <main className="main-continer">
      <Header />
      <Outlet />
    </main>
  );
};
