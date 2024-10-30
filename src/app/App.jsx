import { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import SplashPage from '../components/pages/SplashPage/SplashPage';
import GlobalNavigator from '/src/components/organisms/GlobalNavigator/GlobalNavigator';
import { loginUserData } from '../utils/controlUserData';

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isSplashed, setIsSplashed] = useState(false);

  useEffect(() => {
    const navigateUser = () => {
      if (loginUserData) {
        navigate('/library/booktree');
      } else {
        navigate('/login');
      }
    };

    if (!isSplashed) {
      const timer = setTimeout(() => {
        setIsSplashed(true);

        navigateUser();
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      navigateUser();
    }
  }, [isSplashed, navigate]);

  if (!isSplashed) return <SplashPage />;

  if (pathname === ('/login' || '/register')) return <Outlet />;

  return (
    <>
      <Outlet />
      <GlobalNavigator />
    </>
  );
}

export default App;
