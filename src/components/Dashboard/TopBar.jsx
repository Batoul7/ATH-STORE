import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../redux/slice/sidebarSlice";
export default function TopBar() {
    const dispatch = useDispatch();
    return (<div className="fixed pl-6 top-0 left-0 h-[70px] w-full bg-blue-400 shadow-sm z-30 flex items-center justify-between gap-4 ">
            <div className="flex items-center gap-8 text-white text-2xl"> 
              <FontAwesomeIcon cursor={"pointer"} icon={faBars} onClick={() => dispatch(toggleSidebar())} className="text-2xl"/>
              <h2>Dashboard</h2>
            </div>
        </div>);
}
