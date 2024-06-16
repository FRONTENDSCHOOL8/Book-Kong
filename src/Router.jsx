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
import BookDetailPage from './components/pages/BookDetailPage/BookDetailPage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import StatisticsMemo from './components/atoms/StatisticsMemo/StatisticsMemo';
import { HelmetProvider } from 'react-helmet-async';
import { getLibraryData } from './utils/controlBookData';
import MemoDetailPage from './components/pages/MemoDetailPage/MemoDetailPage';
import SplashPage from './components/pages/SplashPage/SplashPage';
import FeedRegistrationPage from './components/pages/FeedRegistrationPage/FeedRegistrationPage';
import FeedDetailPage from './components/pages/FeedDetailPage/FeedDetailPage';
import { getMemoData } from './utils/controlMemoData';

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
        path: 'library/book-detail/:recordId?',
        element: <BookDetailPage />,
        loader: async ({ params }) => await getLibraryData(params.recordId),
      },
      {
        path: 'library/book-search',
        element: <BookSearchPage />,
      },
      {
        path: 'library/book-registration',
        element: <BookRegisterPage />,
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
        path: 'record/memo/:memoId',
        element: <MemoDetailPage />,
        loader: async ({ params }) =>
          await getMemoData(params.memoId, { expand: 'book_id' }),
      },
      {
        path: 'feed/registration',
        element: <FeedRegistrationPage />,
      },
      {
        path: 'feed',
        element: <FeedPage />,
      },
      {
        path: 'feed/feed-detail',
        element: <FeedDetailPage />,
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
