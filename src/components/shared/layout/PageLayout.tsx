import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function PageLayout() {
  return (
    <main className="bg-neutral-100 flex flex-row h-screen w-screen overflow-hidden">
      <Sidebar />
      <div className="bg-slate-300 w-full flex flex-col min-h-screen">
        <div className="bg-sky-100">
          <Header />
        </div>
        <div className="p-4 flex-grow overflow-y-auto">{<Outlet />}</div>
      </div>
    </main>
  );
}
