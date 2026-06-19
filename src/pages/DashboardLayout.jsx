import { Outlet } from "react-router-dom";
import TopBar from "../components/Dashboard/TopBar";
import SideBar from "../components/Dashboard/SideBar";
export default function DashboardLayout() {
    return (<div className="relative " style={{ height: 'calc(100vh - 70px)' }}>
    <TopBar />
    <div className=" flex mt-[70px]">
        <SideBar />
        <div className="px-8 py-5 flex-1 ">
        <Outlet />
        </div>
    </div>
    </div>);
}
