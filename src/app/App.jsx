import { Outlet } from 'react-router-dom';
import GlobalNavigator from '/src/components/organisms/GlobalNavigator/GlobalNavigator';
import {loginWithEmail} from './../utils/controlUserData';


function App() {
  loginWithEmail('juhyun@naver.com','123456789')
  return (
    <>
      <Outlet />
      <GlobalNavigator />
    </>
  );
}

export default App;
