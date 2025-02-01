// import { Outlet } from "react-router-dom";
// import Sidebar from "./Sidebar";

// function Layout() {
//   return (
//     <div className="flex">
//       <div className="fixed">
// <Sidebar/>
//       </div>
     
//         <div className="overflow-y-scroll w-full ml-[220px] mr-[50px] mt-[50px]">
//           <Outlet />
//         </div>
//     </div>
//   );
// }

// export default Layout;




import { Outlet, useNavigate, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Sidebar from "./Sidebar";

function Layout({ isAuthenticated, onLogout }) {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
  };

  // Don't render anything while redirecting
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="flex">
      <div className="fixed">
        <Sidebar onLogout={handleLogout} />
      </div>
      <div className="overflow-y-scroll w-full ml-[220px] mr-[50px] mt-[50px]">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;