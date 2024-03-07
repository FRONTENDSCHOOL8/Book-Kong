import { Outlet } from 'react-router-dom';
import GlobalNavigator from '/src/components/organisms/GlobalNavigator/GlobalNavigator';

function App() {
  return (
    <>
      <div className="m-auto max-w-md min-w-80 h-screen bg-background-gray">
        <Outlet />
        <GlobalNavigator />
      </div>
    </>
  );
}

export default App;
