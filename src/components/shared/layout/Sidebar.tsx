import { Link, useLocation } from "react-router-dom";
import {
  SIDEBAR_NAVIGATION_LINKS,
  SIDEBAR_BOTTOM_NAVIGATION_LINKS,
} from "../../../lib/consts/navigations";
import classNames from "classnames";
import {
  Bell,
  Search,
  ChevronLeft,
  CheckCircle,
  Menu,
  Home,
  Clock,
  Calendar,
  Settings,
  HelpCircle,
  LogOut,
  ChevronRight,
  Star,
  AlertTriangle,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const linkClasses =
  "flex item-center font-light gap-2 px-3 py-2 hover:bg-neutral-600 active:bg-sky-600 rounded-sm text-base";
const linkClass = "w-full justify-start hover:bg-gray-800";
export default function Sidebar() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const SidebarLink = ({ item }) => {
    const { pathname } = useLocation();
    return (
      <Link
        className={classNames(pathname === item.path ? "text-blue-400" : "")}
        to={item.path}
      >
        <Button variant="ghost" className={linkClass}>
          <item.icon className="h-5 w-5 mr-2" />
          <span className={sidebarCollapsed ? "hidden" : "block"}>
            {item.label}
          </span>
        </Button>
      </Link>
    );
  };
  return (
    <div>
      {/* Sidebar */}
      <div
        className={`h-screen bg-gray-900 text-white flex flex-col transition-all duration-300 ${
          sidebarCollapsed ? "w-16" : "w-64"
        }`}
      >
        <div className="p-4 flex justify-between items-center">
          <h1
            className={`text-2xl font-bold ${
              sidebarCollapsed ? "hidden" : "block"
            }`}
          >
            Dashboard
          </h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Main Navigation */}
        <nav className="flex-1 flex flex-col space-y-2 p-2">
          {SIDEBAR_NAVIGATION_LINKS.map((naviData) => (
            <SidebarLink key={naviData.key} item={naviData} />
          ))}
        </nav>

        {/* Bottom Navigation */}
        <nav className="flex flex-col space-y-2 p-2">
          <Separator className="my-2 bg-gray-700" />
          {SIDEBAR_BOTTOM_NAVIGATION_LINKS.map((naviData) => (
            <SidebarLink key={naviData.key} item={naviData} />
          ))}
        </nav>
      </div>
    </div>
  );
}
