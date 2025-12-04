import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function AccountLayout() {
  return (
    <div className="flex gap-8 py-6">
      <Sidebar />
      <div className="flex-1 bg-white shadow-md border rounded-lg p-6">
        <Outlet />
      </div>
    </div>
  );
}
