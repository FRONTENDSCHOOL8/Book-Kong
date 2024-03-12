import { Outlet } from 'react-router-dom';
import GlobalNavigator from '/src/components/organisms/GlobalNavigator/GlobalNavigator';


function App() {
  return (
    <>
      <div
        className="h-screen max-w-md m-auto min-w-80 bg-background-gray"
      >
        <Outlet />
        <GlobalNavigator />
      </div>
    </>
  );
}

export default App;
