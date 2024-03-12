import { Outlet, useLocation } from 'react-router-dom';
import GlobalNavigator from '/src/components/organisms/GlobalNavigator/GlobalNavigator';


function App() {
  const {pathname} = useLocation();
  return (
    <>
      <Outlet />
      {pathname === '/login' || pathname === '/register'  ?  '' : <GlobalNavigator />}
    </>
  );
}

export default App;
