import { Outlet } from "react-router-dom";
import { Header } from "../header/header";

export function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
