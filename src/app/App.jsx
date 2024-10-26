import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import SplashPage from '../components/pages/SplashPage/SplashPage';
import GlobalNavigator from '/src/components/organisms/GlobalNavigator/GlobalNavigator';

function App() {
  const { pathname } = useLocation();
  const [isSplashed, setIsSplashed] = useState(false);

  if (!isSplashed) {
    setIsSplashed(true);

    return <SplashPage />;
  }

  if (pathname === ('/login' || '/register')) return <Outlet />;

  return (
    <>
      <Outlet />
      <GlobalNavigator />
    </>
  );
}

export default App;
