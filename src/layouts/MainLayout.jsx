import { NavLink, Outlet } from 'react-router';
// MainLayout.jsx
export default function MainLayout() {
  return (
    <div>
      <nav className=" flex gap-4">
        <NavLink to="/">login</NavLink>
        <NavLink to="/post">post</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
