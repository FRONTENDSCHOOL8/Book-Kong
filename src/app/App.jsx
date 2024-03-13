import { Outlet, useLocation } from 'react-router-dom';
import GlobalNavigator from '/src/components/organisms/GlobalNavigator/GlobalNavigator';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { loginUserData, loginWithEmail } from '../utils/controlUserData';

function App() {
  loginWithEmail('juhyun@naver.com', '123456789');
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/') navigate('/library/booktree');
  }, [pathname, navigate]);

  useEffect(() => {
    if (!loginUserData) navigate('/login');
  }, [navigate]);

  return (
    <>
      <Outlet />
      {pathname === '/login' || pathname === '/register' ? (
        ''
      ) : (
        <GlobalNavigator />
      )}
    </>
  );
}

export default App;
