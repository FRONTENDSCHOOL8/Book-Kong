import { createBrowserRouter } from 'react-router-dom';
import App from '/src/app/App';
import LibraryPage from './components/pages/LibraryPage/LibraryPage';
import RecordPage from '/src/components/pages/RecordPage';
import FeedPage from '/src/components/pages/FeedPage';
import CharacterPage from '/src/components/pages/CharacterPage';
import MypagePage from '/src/components/pages/MypagePage';
import MemoList from './components/organisms/MemoList/MemoList';
import BookSearchPage from './components/pages/BookSearchPage';
import BookRegisterPage from './components/pages/BookRegisterPage/BookRegisterPage';
import BookTree from './components/organisms/BookTree/BookTree';
import Bookshelf from './components/organisms/Bookshelf/Bookshelf';
import BookDetailPage from './components/pages/BookDetailPage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import StatisticsMemo from './components/atoms/StatisticsMemo/StatisticsMemo';
import { HelmetProvider } from 'react-helmet-async';
import { getBookData } from './api/searchAladin';
import SplashPage from './components/pages/SplashPage/SplashPage';

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
        path: 'library/book-detail',
        element: <BookDetailPage />,
      },
      {
        path: 'library/book-search',
        element: <BookSearchPage />,
      },
      {
        path: 'library/book-registration/:isbn13?',
        element: <BookRegisterPage />,
        loader: async ({ params }) => {
          if (!params.isbn13) return null;

          return await getBookData(params.isbn13);
        },
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
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
