import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  categories,
  customerService,
  icons,
  paymentMethods,
} from "../../Data/FooterData";
import { Link } from "react-router-dom";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 py-12 sm:px-6">
        <div className="mb-10 flex flex-col items-center justify-between gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-6 text-center backdrop-blur md:flex-row md:text-left">
          <div>
            <Link
              to="/"
              className="mb-3 flex items-center justify-center gap-2 text-2xl font-extrabold md:justify-start"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-900/40">
                <FontAwesomeIcon icon={faCartShopping} />
              </span>
              Online<span className="text-blue-400">Shop</span>
            </Link>

            <p className="max-w-xl text-sm leading-7 text-slate-300">
              Your online store for the latest tech gadgets, exquisite jewelry,
              and fashionable clothing for men and women.
            </p>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-300">
              Follow Us
            </p>

            <div className="flex items-center justify-center gap-3 md:justify-end">
              {icons.map((icon, index) => (
                <Link
                  key={index}
                  to={icon.path}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-lg text-white transition hover:-translate-y-1 hover:bg-blue-600"
                >
                  <FontAwesomeIcon icon={icon.name} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h5 className="mb-4 text-lg font-bold text-white">About Us</h5>
            <p className="text-sm leading-7 text-slate-400">
              We are committed to providing high-quality products, smooth
              shopping experience, secure payment, and excellent customer
              service.
            </p>
          </div>

          <div>
            <h5 className="mb-4 text-lg font-bold text-white">Categories</h5>
            <ul className="space-y-3">
              {categories.map((category, index) => (
                <li key={index}>
                  <Link
                    to={category.path}
                    className="text-sm text-slate-400 transition hover:pl-2 hover:text-blue-400"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="mb-4 text-lg font-bold text-white">
              Customer Service
            </h5>
            <ul className="space-y-3">
              {customerService.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-sm text-slate-400 transition hover:pl-2 hover:text-blue-400"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="mb-4 text-lg font-bold text-white">
              Secure Payment
            </h5>
            <p className="mb-4 text-sm leading-7 text-slate-400">
              We accept all major credit cards and ensure secure transactions.
            </p>

            <div className="flex flex-wrap gap-3">
              {paymentMethods.map((method, index) => (
                <div
                  key={index}
                  className="flex h-10 items-center rounded-xl bg-white px-3 shadow-sm"
                >
                  <img
                    src={method.img}
                    alt={method.name}
                    className="h-6 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 text-center text-sm text-slate-400">
          <p>&copy; 2025 Online Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}