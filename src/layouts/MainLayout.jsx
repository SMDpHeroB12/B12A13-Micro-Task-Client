import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-amber-300">
      {/* Navbar will go here later */}
      <Outlet />
      {/* Navbar will go here later */}
    </div>
  );
};

export default MainLayout;
