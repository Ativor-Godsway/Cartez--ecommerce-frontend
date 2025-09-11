import { NavLink, useNavigate } from "react-router-dom";
import { Home, ShoppingBag, Users, Settings } from "lucide-react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("cartezAdminToken");
    navigate("/");
  };

  return (
    <div className="z-50">
      <RxHamburgerMenu
        size={30}
        className="btn btn-circle p-2 block md:hidden m-3 fixed bg-[#ffffff7c]"
        onClick={() => setShowSidebar(!showSidebar)}
      />
      <div
        className={`${
          showSidebar && "hidden"
        } md:flex min-h-screen w-[50vw] md:w-64 bg-base-200 shadow-lg fixed left-0 top-0  flex-col transition-all duration-200`}
      >
        <div className="flex items-center w-[50vw]">
          <IoClose
            size={40}
            className="block md:hidden m-3"
            onClick={() => setShowSidebar(!showSidebar)}
          />
          <h1 className="p-4 text-3xl font-bold ">Admin Panel</h1>
        </div>

        <nav className="flex-1 p-2 flex gap-1 flex-col ">
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg hover:bg-[#202020] hover:text-white ${
                isActive ? "bg-black text-white" : ""
              }`
            }
          >
            <Home />
            <h2> DashBoard</h2>
          </NavLink>

          <NavLink
            to="/admin/products"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg hover:bg-[#202020] hover:text-white ${
                isActive ? "bg-black text-white" : ""
              }`
            }
          >
            <ShoppingBag />
            <h2>Products</h2>
          </NavLink>

          <NavLink
            to="/admin/orders"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg hover:bg-[#202020] hover:text-white ${
                isActive ? "bg-black text-white" : ""
              }`
            }
          >
            <Users />
            <h2>Orders</h2>
          </NavLink>
          <div className="dropdown">
            <div tabIndex={0} role="button">
              <div
                to="/admin/settings"
                className={`flex items-center gap-3 p-3 rounded-lg hover:bg-[#202020] hover:text-white `}
              >
                <Settings />
                <h2>Account</h2>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-full p-2 shadow-sm"
            >
              <li>
                <a>Change Password</a>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
