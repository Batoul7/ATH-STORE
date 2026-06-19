import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faUser,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showUsernameHint, setShowUsernameHint] = useState(false);
  const [showPasswordHint, setShowPasswordHint] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Admin Login
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("token", "admin-token");
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("role", "admin");

      window.dispatchEvent(new Event("authChange"));

      navigate("/dashboard");
      return;
    }

    // User Login
    if (username === "johnd" && password === "m38rmF$") {
      try {
        const response = await axios.post(
          "https://fakestoreapi.com/auth/login",
          {
            username: "johnd",
            password: "m38rmF$",
          }
        );

        localStorage.setItem("token", response.data.token);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("role", "user");

        window.dispatchEvent(new Event("authChange"));

        navigate("/home");
      } catch (error) {
        console.error(error);
        alert("Login failed");
      }

      return;
    }

    alert("Invalid username or password");
  };

  return (
    <section className="min-h-screen bg-slate-50 flex items-center justify-center px-5 py-12">
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-70" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-indigo-100 blur-3xl opacity-70" />

      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-200/70"
      >
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-2xl text-white shadow-lg shadow-blue-200">
            <FontAwesomeIcon icon={faRightToBracket} />
          </div>

          <h2 className="text-3xl font-extrabold text-slate-800">
            Welcome Back
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Sign in to continue shopping
          </p>
        </div>

        {/* Username */}
        <div className="mb-5">
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Username
          </label>

          <div className="relative">
            <FontAwesomeIcon
              icon={faUser}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onFocus={() => setShowUsernameHint(true)}
              onBlur={() => setShowUsernameHint(false)}
              placeholder="Enter username"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
              required
            />
          </div>

          {showUsernameHint && (
            <div className="mt-2 rounded-2xl bg-blue-50 p-3 text-sm text-slate-600">
              <p>
                User: <strong className="text-blue-600">johnd</strong>
              </p>

              <p>
                Admin: <strong className="text-blue-600">admin</strong>
              </p>
            </div>
          )}
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Password
          </label>

          <div className="relative">
            <FontAwesomeIcon
              icon={faLock}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setShowPasswordHint(true)}
              onBlur={() => setShowPasswordHint(false)}
              placeholder="Enter password"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
              required
            />
          </div>

          {showPasswordHint && (
            <div className="mt-2 rounded-2xl bg-blue-50 p-3 text-sm text-slate-600">
              <p>
                User: <strong className="text-blue-600">m38rmF$</strong>
              </p>

              <p>
                Admin: <strong className="text-blue-600">admin123</strong>
              </p>
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full rounded-full bg-blue-600 py-3.5 font-semibold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
        >
          Login
        </button>

        <p className="mt-5 text-center text-sm text-slate-500">
          Demo credentials are available inside the input hints.
        </p>
      </form>
    </section>
  );
};

export default LoginForm;