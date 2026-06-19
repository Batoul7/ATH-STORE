import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { links } from '../../Data/SideBarLink';
export default function SideBar() {
    const isOpen = useSelector((state) => state.sidebar.isOpen);
    return (<>    
        <div className={` sticky left-0 z-10 px-4 py-8 bg-blue-400 flex flex-col gap-4 
        ${isOpen ? "w-64" : "w-[70px] overflow-hidden"}`} style={{ height: 'calc(100vh - 70px)' }}>
            {links.map((link, key) => (<NavLink key={key} to={link.path} className={({ isActive }) => `flex items-center gap-2 p-2  rounded-lg  text-xl hover:bg-white hover:text-blue-400
                    ${isActive ? "bg-white text-blue-400" : "text-white"}`}>
                <FontAwesomeIcon icon={link.icon}/>
                <span className={`overflow-hidden ${isOpen ? "ml-3 opacity-100" : "w-0 opacity-0"}`}>
                    {link.name}
                </span>
                </NavLink>))}
        </div>
        </>);
}
