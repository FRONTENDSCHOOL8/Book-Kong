import { Outlet, useLocation } from 'react-router-dom';
import GlobalNavigator from '/src/components/organisms/GlobalNavigator/GlobalNavigator';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { loginUserData } from '../utils/controlUserData';
import SplashPage from '../components/pages/SplashPage/SplashPage';

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [splashing, isSplashing] = useState(true);

  useEffect(() => {
    if (pathname === '/') navigate('/library/booktree');
  }, [pathname, navigate]);

  useEffect(() => {
    if (!loginUserData) {
      if (pathname !== '/register') navigate('/login');
    }
  }, [navigate, pathname]);

  useEffect(() => {
    const splashDisplayed = sessionStorage.getItem('splashDisplayed');

    if (!splashDisplayed) {
      setTimeout(() => {
        isSplashing(false);
        sessionStorage.setItem('splashDisplayed', 'true');
      }, 3000);
    } else {
      isSplashing(false);
    }
  }, []);

  if (splashing) {
    return <SplashPage />;
  }

  if (pathname === '/login' || pathname === '/register') {
    return <Outlet />;
  }

  return (
    <>
      <Outlet />
      <GlobalNavigator />
    </>
  );
}

export default App;
