import { createBrowserRouter } from 'react-router-dom';
import App from '/src/app/App';
import LibraryPage from '/src/components/pages/LibraryPage';
import RecordPage from '/src/components/pages/RecordPage';
import FeedPage from '/src/components/pages/FeedPage';
import CharacterPage from '/src/components/pages/CharacterPage';
import MypagePage from '/src/components/pages/MypagePage';
import MemoList from './components/organisms/MemoList/MemoList';
import SearchPage from './components/pages/SearchPage';
import BookRegistrationPage from './components/pages/BookRegistrationPage';
import BookTree from './components/organisms/BookTree/BookTree';
import Bookshelf from './components/organisms/Bookshelf/Bookshelf';
import DetailPage from './components/pages/DetailPage';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import StatisticsMemo from './components/atoms/StatisticsMemo/StatisticsMemo';
import { HelmetProvider } from 'react-helmet-async';
import SplashPage from './components/pages/SplashPage';

// 이 코드는 createroutesfromelements 를 사용하도록 수정해 보셔요.
// 선언형 코드를 작성하면 눈의 피로가 줄어드는 효과가 있었습니다.
// https://reactrouter.com/en/main/utils/create-routes-from-elements
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <HelmetProvider>
        <App />
      </HelmetProvider>
    ),
    children: [
      {
        path: 'library/detail',
        element: <DetailPage />,
      },
      {
        path: 'library/search',
        element: <SearchPage />,
      },
      {
        path: 'library/book-registration',
        element: <BookRegistrationPage />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'library',
        element: <LibraryPage />,
        children: [
          { path: 'booktree', element: <BookTree /> },
          { path: 'bookshelf', element: <Bookshelf /> },
        ],
      },
      {
        path: 'record',
        element: <RecordPage />,
        children: [
          {
            path: 'memo',
            element: <MemoList />,
          },
          {
            path: 'statistics',
            element: <StatisticsMemo />,
          },
        ],
      },
      {
        path: 'feed',
        element: <FeedPage />,
      },
      {
        path: 'character',
        element: <CharacterPage />,
      },
      {
        path: 'mypage',
        element: <MypagePage />,
      },
      {
        path: 'splash',
        element: <SplashPage />,
      },
    ],
  },
]);

export default router;
