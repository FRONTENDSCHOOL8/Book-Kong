import { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import SplashPage from '../components/pages/SplashPage/SplashPage';
import GlobalNavigator from '/src/components/organisms/GlobalNavigator/GlobalNavigator';
import { loginUserData } from '../utils/controlUserData';
import { useQueryClient } from '@tanstack/react-query';
import { getAllUserLibRecs } from '../utils/controlBookData';

function App() {
  // 서재 페이지에 필요한 데이터 prefetch
  const queryClient = useQueryClient();

  useEffect(() => {
    if (loginUserData)
      queryClient.prefetchQuery({
        queryKey: ['library', loginUserData],
        queryFn: getAllUserLibRecs,
      });
  }, [queryClient]);

  // 앱 접근 시 사용자에게 보여줄 컴포넌트 결정 및 isSplashed 상태 변수 관리
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
