import { useState, useEffect, useCallback } from 'react';
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

  // 앱 접근 시 로그인 여부와 'isSplashed' 상태 변수 값에 따른 action 결정
  const [isSplashed, setIsSplashed] = useState(false);
  // 앱의 초기 설정이 전부 다 완료 되었는지 체크하는 상태 변수 선언
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    setIsSplashed(sessionStorage.getItem('isSplashed') === 'true');
    setIsInitialized(true);
  }, []);

  const navigate = useNavigate();
  const navigateUser = useCallback(() => {
    if (loginUserData) {
      navigate('/library/booktree');
    } else {
      navigate('/login');
    }
  }, [navigate]);

  useEffect(() => {
    if (isInitialized && !isSplashed) {
      const timer = setTimeout(() => {
        sessionStorage.setItem('isSplashed', 'true');
        setIsSplashed(true);

        navigateUser();
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      navigateUser();
    }
  }, [isInitialized, isSplashed, navigateUser]);

  // isSplashed 상태 변수와 URL의 path 값에 따라 App 컴포넌트의 return 값을 다르게 설정
  const { pathname } = useLocation();

  if (!isInitialized) return null;

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
