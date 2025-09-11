import { Outlet } from "react-router-dom";
import Sidebar from "./components/SideBar";
import { Toaster } from "react-hot-toast";

const Admin = ({ children }) => {
  return (
    <div className="flex ">
      <Toaster />
      <Sidebar />
      <main className="md:pl-[16rem] pt-14 flex items-start  min-h-screen w-full ">
        <Outlet />
      </main>
    </div>
  );
};

export default Admin;
