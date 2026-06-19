import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faEye, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slice/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: product.id,
        quantity: 1,
        price: product.price,
        title: product.title,
        image: product.image,
      })
    );
  };

  return (
    <div className="group h-full rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-100">
      <div className="relative mb-4 flex h-52 items-center justify-center overflow-hidden rounded-2xl bg-slate-50">
        <span className="absolute left-3 top-3 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
          New
        </span>

        <img
          src={product.image}
          alt={product.title}
          className="h-36 w-36 object-contain transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute bottom-3 right-3 flex translate-y-4 gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <Link
            to={`/home/product/${product.id}`}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-blue-600 shadow-md transition hover:bg-blue-600 hover:text-white"
          >
            <FontAwesomeIcon icon={faEye} />
          </Link>

          <button
            type="button"
            onClick={handleAddToCart}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-blue-600 text-white shadow-md transition hover:bg-blue-700"
          >
            <FontAwesomeIcon icon={faCartPlus} />
          </button>
        </div>
      </div>

      <div className="flex min-h-[150px] flex-col">
        <span className="mb-2 w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
          {product.category}
        </span>

        <h3 className="mb-3 line-clamp-2 text-base font-bold leading-6 text-slate-800">
          {product.title}
        </h3>

        <div className="mt-auto flex items-center justify-between">
          <p className="text-xl font-extrabold text-slate-900">
            <span className="text-blue-600">${product.price}</span>
          </p>

          <span className="flex items-center gap-1 rounded-full bg-yellow-50 px-2.5 py-1 text-sm font-semibold text-yellow-500">
            {product.rating.rate}
            <FontAwesomeIcon icon={faStar} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;