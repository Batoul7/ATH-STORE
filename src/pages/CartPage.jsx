import { useDispatch, useSelector } from "react-redux";
import { updateCart, deleteFromCart } from "../redux/slice/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartArrowDown,
  faMinus,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state) => state.cart);

  const handleIncrease = (productId, currentQuantity) => {
    dispatch(updateCart({ productId, quantity: currentQuantity + 1 }));
  };

  const handleDecrease = (productId, currentQuantity) => {
    if (currentQuantity > 1) {
      dispatch(updateCart({ productId, quantity: currentQuantity - 1 }));
    }
  };

  const handleDelete = (productId) => {
    dispatch(deleteFromCart(productId));
  };

  return (
    <section className="min-h-[70vh] bg-slate-50 py-14">
      <div className="container mx-auto px-5">
        <h2 className="mb-8 flex items-center gap-3 text-3xl font-extrabold text-slate-800">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-200">
            <FontAwesomeIcon icon={faCartArrowDown} />
          </span>
          Your Shopping Cart
        </h2>

        {items.length === 0 ? (
          <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-xl shadow-slate-200/70">
            <p className="text-xl font-semibold text-slate-700">
              Your cart is empty
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="space-y-5 lg:col-span-2">
              {items.map((item) => (
                <div
                  key={item.productId}
                  className="flex flex-col gap-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-xl hover:shadow-blue-100 sm:flex-row"
                >
                  <div className="flex h-40 w-full items-center justify-center rounded-2xl bg-slate-50 p-4 sm:w-40 sm:shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between gap-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="line-clamp-2 font-bold text-slate-800">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-lg font-extrabold text-blue-600">
                          ${item.price}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleDelete(item.productId)}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500 transition hover:bg-red-500 hover:text-white"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex w-fit items-center rounded-full border border-slate-200 bg-slate-50 p-1">
                        <button
                          type="button"
                          onClick={() =>
                            handleDecrease(item.productId, item.quantity)
                          }
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-700 shadow-sm transition hover:bg-blue-600 hover:text-white"
                        >
                          <FontAwesomeIcon icon={faMinus} />
                        </button>

                        <span className="min-w-10 text-center font-bold text-slate-800">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            handleIncrease(item.productId, item.quantity)
                          }
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm transition hover:bg-blue-700"
                        >
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                      </div>

                      <p className="font-semibold text-slate-700">
                        Total:{" "}
                        <span className="text-blue-600">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="h-fit rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70">
              <h3 className="mb-5 text-2xl font-extrabold text-slate-800">
                Order Summary
              </h3>

              <div className="space-y-4 border-b border-slate-200 pb-5 text-slate-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping Cost</span>
                  <span className="font-semibold">$0.00</span>
                </div>

                <div className="flex justify-between">
                  <span>Discount</span>
                  <span className="font-semibold">$0.00</span>
                </div>
              </div>

              <div className="mt-5 flex justify-between text-xl font-extrabold text-slate-900">
                <span>Total</span>
                <span className="text-blue-600">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>

              <button
                type="button"
                className="mt-6 w-full rounded-full bg-blue-600 py-3.5 font-semibold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;