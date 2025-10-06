import { createBrowserRouter } from 'react-router';
import LoginPage from '../pages/LoginPage';
import PostsPage from '../pages/PostsPage';
import MainLayout from '../layouts/MainLayout';
// index.jsx
export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <LoginPage /> },
      { path: '/post', element: <PostsPage /> },
    ],
  },
]);
