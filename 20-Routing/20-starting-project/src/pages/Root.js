import { Outlet } from "react-router-dom";

import MainNavigation from "../component/MainNaigation";

export default function Root() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}