import { Outlet, useNavigation } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';

export default function RootLayout() {
  // const navitation = useNavigation();

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navitation.state === "loading" && <p>loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}