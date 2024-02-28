import { createBrowserRouter } from 'react-router-dom';
import App from '/src/app/App';
import Library from '/src/components/pages/Library';
import Record from '/src/components/pages/Record';
import Feed from '/src/components/pages/Feed';
import Character from '/src/components/pages/Character';
import Mypage from '/src/components/pages/Mypage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'library',
        element: <Library />,
      },
      {
        path: 'record',
        element: <Record />,
      },
      {
        path: 'feed',
        element: <Feed />,
      },
      {
        path: 'character',
        element: <Character />,
      },
      {
        path: 'mypage',
        element: <Mypage />,
      },
    ],
  },
]);

export default router;
