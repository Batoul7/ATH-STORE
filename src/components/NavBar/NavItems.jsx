import { NavLink, useLocation } from "react-router-dom";

export default function NavItems({ items, show }) {
  const { pathname } = useLocation();

  return (
    <ul className="flex flex-col md:flex-row md:items-center gap-2 md:gap-2">
      {items?.map((item, index) => {
        const isHome =
          item.name.toLowerCase() === "home" &&
          pathname === item.path;

        return (
          <li key={index} className="capitalize">
            <NavLink
              to={item.path}
              onClick={() => show(false)}
              className={({ isActive }) => {
                const active =
                  item.name.toLowerCase() === "home"
                    ? isHome
                    : isActive;

                return `relative block text-base md:text-[17px] font-semibold px-4 py-2 rounded-full transition-all duration-300
                ${
                  active
                    ? "text-blue-600 bg-blue-50"
                    : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                }
                after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[3px] after:rounded-full after:bg-blue-600 after:transition-all after:duration-300
                ${active ? "after:w-6" : "after:w-0 hover:after:w-5"}`;
              }}
            >
              {item.name}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}