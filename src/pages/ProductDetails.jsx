import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faCartPlus,
  faArrowLeft,
  faShieldHalved,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  const numericProductId = parseInt(productId || "0", 10);

  useEffect(() => {
    if (!numericProductId || isNaN(numericProductId)) {
      console.error("Invalid productId:", numericProductId);
      return;
    }

    axios
      .get(`https://fakestoreapi.com/products/${numericProductId}`)
      .then((response) => {
        setProduct(response.data);
      });
  }, [numericProductId]);

  if (!product) {
    return (
      <section className="min-h-[60vh] bg-slate-50 py-20">
        <div className="container mx-auto px-5 text-center text-slate-500">
          Loading product details...
        </div>
      </section>
    );
  }

  const fullStars = Math.floor(product.rating.rate);
  const hasHalfStar = product.rating.rate - fullStars >= 0.5;

  return (
    <section className="relative overflow-hidden bg-slate-50 py-16">
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-100 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-indigo-100 blur-3xl" />

      <div className="container relative z-10 mx-auto px-5">
        <Link
          to="/home"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-600 shadow-sm transition hover:border-blue-600 hover:bg-blue-600 hover:text-white"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          Back to products
        </Link>

        <div className="grid grid-cols-1 gap-10 rounded-[2rem] border border-slate-200 bg-white/80 p-5 shadow-2xl shadow-slate-200/70 backdrop-blur lg:grid-cols-2 lg:p-8">
          <div className="flex min-h-[420px] items-center justify-center rounded-[2rem] bg-slate-50 p-8">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-[360px] w-full object-contain transition duration-500 hover:scale-105"
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="mb-4 w-fit rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold capitalize text-blue-600">
              {product.category}
            </span>

            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl">
              {product.title}
            </h1>

            <div className="mb-5 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => {
                  if (index < fullStars) {
                    return (
                      <FontAwesomeIcon
                        key={index}
                        icon={faStar}
                        className="text-yellow-400"
                      />
                    );
                  }

                  if (index === fullStars && hasHalfStar) {
                    return (
                      <FontAwesomeIcon
                        key={index}
                        icon={faStarHalfAlt}
                        className="text-yellow-400"
                      />
                    );
                  }

                  return (
                    <FontAwesomeIcon
                      key={index}
                      icon={faStar}
                      className="text-slate-300"
                    />
                  );
                })}
              </div>

              <span className="text-sm font-medium text-slate-500">
                {product.rating.rate} / 5
              </span>

              <span className="text-sm text-slate-400">
                ({product.rating.count} reviews)
              </span>
            </div>

            <p className="mb-6 text-base leading-8 text-slate-600">
              {product.description}
            </p>

            <div className="mb-8 flex items-end gap-3">
              <span className="text-4xl font-extrabold text-blue-600">
                ${product.price}
              </span>
              <span className="pb-1 text-sm font-medium text-slate-400">
                inclusive of taxes
              </span>
            </div>

            <div className="mb-8 flex flex-col gap-3 sm:flex-row">
              <button className="flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 font-semibold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-1 hover:bg-blue-700">
                <FontAwesomeIcon icon={faCartPlus} />
                Add to Cart
              </button>

              <button className="rounded-full border border-slate-200 bg-white px-8 py-3.5 font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600">
                Buy Now
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4 border-t border-slate-200 pt-6 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <FontAwesomeIcon icon={faTruckFast} />
                </span>
                <div>
                  <h4 className="font-bold text-slate-800">Fast Delivery</h4>
                  <p className="text-sm text-slate-500">Reliable shipping</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <FontAwesomeIcon icon={faShieldHalved} />
                </span>
                <div>
                  <h4 className="font-bold text-slate-800">Secure Payment</h4>
                  <p className="text-sm text-slate-500">Safe checkout</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

