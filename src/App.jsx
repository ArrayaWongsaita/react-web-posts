import { RouterProvider } from 'react-router';
import { router } from './router';
// app.jsx
export default function App() {
  return <RouterProvider router={router} />;
}
