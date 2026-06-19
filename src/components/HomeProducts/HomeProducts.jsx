import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../redux/slice/categoriesSlice";
import {
  fetchProducts,
  filterProductsByCategory,
} from "../../redux/slice/productsSlice";
import {
  nextPage,
  prevPage,
  setPage,
  setTotalItems,
} from "../../redux/slice/paginationSlice";
import ProductCard from "../ProductCard/ProductCard";
import Title from "../Title/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faBoxesStacked,
} from "@fortawesome/free-solid-svg-icons";

const HomeProducts = ({ page }) => {
  const dispatch = useDispatch();

  const { items: categories } = useSelector((state) => state.categories);
  const { filteredItems: products } = useSelector((state) => state.products);
  const { currentPage, itemsPerPage, totalItems } = useSelector(
    (state) => state.pagination
  );

  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setTotalItems(products.length));
  }, [products, dispatch]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    dispatch(filterProductsByCategory(category));
    dispatch(setPage(1));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = products.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <section className="relative overflow-hidden bg-white py-16">
      <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-70" />
      <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-indigo-100 blur-3xl opacity-70" />

      <div
        className={`container relative z-10 mx-auto px-5 home-products-section ${
          page ? "lg:flex lg:items-start lg:gap-10" : ""
        }`}
      >
        <aside
          className={`home-sidebar-animate ${
            page ? "mb-8 lg:mb-0 lg:w-72 lg:shrink-0" : "w-full"
          }`}
        >
          {!page && <Title name="Categories" desc="Various products" />}

          {page && (
            <div className="mb-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-100">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-2xl text-white shadow-lg shadow-blue-200">
                <FontAwesomeIcon icon={faBoxesStacked} />
              </div>

              <h3 className="mb-3 text-2xl font-extrabold text-slate-800">
                Categories & Products
              </h3>

              <p className="text-sm leading-7 text-slate-500">
                Discover our diverse range of categories and products that meet
                your needs and suit your taste.
              </p>
            </div>
          )}

          <div
            className={`mb-10 flex gap-3 overflow-x-auto whitespace-nowrap pb-2 scrollbar-hide ${
              page
                ? "lg:flex-col lg:overflow-visible lg:whitespace-normal"
                : "justify-start md:justify-center"
            }`}
          >
            <button
              type="button"
              onClick={() => handleCategoryClick(null)}
              className={`category-btn-animate rounded-full px-5 py-2.5 text-sm font-semibold capitalize transition-all duration-300 ${
                page ? "lg:w-full lg:text-left" : ""
              } ${
                selectedCategory === null
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                  : "bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
              style={{ animationDelay: "0s" }}
            >
              All
            </button>

            {categories.map((category, index) => (
              <button
                type="button"
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`category-btn-animate rounded-full px-5 py-2.5 text-sm font-semibold capitalize transition-all duration-300 ${
                  page ? "lg:w-full lg:text-left" : ""
                } ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                    : "bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                }`}
                style={{ animationDelay: `${(index + 1) * 0.08}s` }}
              >
                {category}
              </button>
            ))}
          </div>
        </aside>

        <div className="flex-1 home-products-content-animate">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <h3
                key={selectedCategory || "all"}
                className="text-xl font-extrabold text-slate-800 product-title-animate"
              >
                {selectedCategory || "All Products"}
              </h3>

              <p className="text-sm text-slate-500">
                Showing {paginatedProducts.length} of {products.length} products
              </p>
            </div>
          </div>

          <div
            key={`${selectedCategory || "all"}-${currentPage}`}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4"
          >
            {paginatedProducts.map((product, index) => (
              <div
                key={product.id}
                className="product-card-animate"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-10 flex flex-wrap items-center justify-center gap-2 pagination-animate">
              <button
                type="button"
                onClick={() => dispatch(prevPage())}
                disabled={currentPage === 1}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-blue-600 hover:bg-blue-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:bg-white disabled:hover:text-slate-700"
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>

              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (pageNumber) => (
                  <button
                    type="button"
                    key={pageNumber}
                    onClick={() => dispatch(setPage(pageNumber))}
                    className={`h-11 min-w-11 rounded-full px-4 text-sm font-bold transition ${
                      currentPage === pageNumber
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                        : "border border-slate-200 bg-white text-slate-700 hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600"
                    }`}
                  >
                    {pageNumber}
                  </button>
                )
              )}

              <button
                type="button"
                onClick={() => dispatch(nextPage())}
                disabled={currentPage === totalPages}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-blue-600 hover:bg-blue-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:bg-white disabled:hover:text-slate-700"
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          )}
        </div>
      </div>

      <style>
        {`
          .home-sidebar-animate {
            animation: homeFadeUp 0.65s ease-out both;
          }

          .home-products-content-animate {
            animation: homeFadeUp 0.7s ease-out 0.08s both;
          }

          .category-btn-animate {
            opacity: 0;
            transform: translateY(14px);
            animation: homeFadeUp 0.45s ease-out forwards;
          }

          .product-title-animate {
            animation: homeFadeUp 0.45s ease-out both;
          }

          .product-card-animate {
            opacity: 0;
            transform: translateY(24px) scale(0.97);
            animation: productFadeUp 0.55s ease-out forwards;
          }

          .pagination-animate {
            animation: homeFadeUp 0.55s ease-out both;
          }

          @keyframes homeFadeUp {
            from {
              opacity: 0;
              transform: translateY(18px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes productFadeUp {
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        `}
      </style>
    </section>
  );
};

export default HomeProducts;