import {
  faBars,
  faCartShopping,
  faSearch,
  faUser,
  faXmark,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLinksData } from "../../Data/NavLinks";
import NavItems from "../NavBar/NavItems";

export default function Header() {
  const [active, setActive] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const navigate = useNavigate();
  const cartCount = useSelector((state) => state.cart.cartCount);

  useEffect(() => {
    const handleScroll = () => setIsFixed(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const handleAuthChange = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };

    window.addEventListener("authChange", handleAuthChange);
    window.addEventListener("authChange", () => {
  setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
});

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("authChange", handleAuthChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("role");
    setIsLoggedIn(false);
    setActive(false);
    navigate("/");
  };

  return (
    <>
      <header
        className={`w-full px-4 sm:px-6 bg-white/90 backdrop-blur-xl text-slate-800 border-b border-slate-100 transition-all duration-300
        ${isFixed ? "fixed top-0 z-50 shadow-lg shadow-slate-200/60" : "relative"}`}
      >
        <div className="container mx-auto flex justify-between items-center py-4">
          <Link to="/home" className="flex items-center gap-2 group">
            <span className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center shadow-md group-hover:rotate-6 transition">
              <FontAwesomeIcon icon={faCartShopping} />
            </span>
            <h1 className="text-xl md:text-2xl font-bold tracking-tight">
              Online<span className="text-blue-600">Shop</span>
            </h1>
          </Link>

          <div className="relative flex-grow max-w-xl mx-8 hidden md:block">
            <input
              className="w-full rounded-full bg-slate-100 border border-slate-200 text-slate-700 pl-11 pr-4 py-2.5 outline-none focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition"
              type="search"
              placeholder="Search products..."
            />
            <FontAwesomeIcon
              className="text-slate-400 absolute left-4 top-1/2 -translate-y-1/2"
              icon={faSearch}
            />
          </div>

          <div className="flex gap-4 items-center">
            {isLoggedIn ? (
              <button
                type="button"
                onClick={handleLogout}
                className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full hover:bg-slate-100 transition"
              >
                <FontAwesomeIcon icon={faRightFromBracket} />
                <span>Logout</span>
              </button>
            ) : (
              <Link
                to="/"
                className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full hover:bg-slate-100 transition"
              >
                <FontAwesomeIcon icon={faUser} />
                <span>Login</span>
              </Link>
            )}

            <Link
              to="/home/cart"
              className="relative w-11 h-11 rounded-full bg-slate-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
            >
              <FontAwesomeIcon icon={faCartShopping} className="text-xl" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs min-w-5 h-5 px-1 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <button
              type="button"
              className="md:hidden w-11 h-11 rounded-full bg-slate-100 flex items-center justify-center text-xl"
              onClick={() => setActive((prev) => !prev)}
            >
              <FontAwesomeIcon icon={active ? faXmark : faBars} />
            </button>
          </div>
        </div>

        <div className="hidden md:flex justify-center border-t border-slate-100">
          <NavItems items={NavLinksData} show={setActive} />
        </div>
      </header>

      <div
        className={`md:hidden fixed top-0 right-0 z-50 w-[80%] max-w-sm h-screen bg-white text-slate-800 shadow-2xl transition-transform duration-300 p-5
        ${active ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">
            Online<span className="text-blue-600">Shop</span>
          </h2>
          <button
            type="button"
            className="w-10 h-10 rounded-full bg-slate-100"
            onClick={() => setActive(false)}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <div className="relative mb-6">
          <input
            className="w-full rounded-full bg-slate-100 border border-slate-200 text-slate-700 pl-11 pr-4 py-2.5 outline-none"
            type="search"
            placeholder="Search products..."
          />
          <FontAwesomeIcon
            className="text-slate-400 absolute left-4 top-1/2 -translate-y-1/2"
            icon={faSearch}
          />
        </div>

        <NavItems items={NavLinksData} show={setActive} />

        {isLoggedIn ? (
          <button
            type="button"
            onClick={handleLogout}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-red-500 py-3 font-semibold text-white transition hover:bg-red-600"
          >
            <FontAwesomeIcon icon={faRightFromBracket} />
            <span>Logout</span>
          </button>
        ) : (
          <Link
            to="/"
            onClick={() => setActive(false)}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            <FontAwesomeIcon icon={faUser} />
            <span>Login</span>
          </Link>
        )}
      </div>

      {active && (
        <div
          className="md:hidden fixed inset-0 bg-black/40 z-40"
          onClick={() => setActive(false)}
        />
      )}
    </>
  );
}