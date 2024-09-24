import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";


export default function PageLayout() {
 return (
 <main>
  <div>
    <Header />
  </div>
  <div>
    <Sidebar />
  </div>
  <div>{<Outlet />}</div>
  <div><Footer /></div>
</main>
) 
}