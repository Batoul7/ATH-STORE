import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLatestProducts } from "../../redux/slice/productsSlice";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../ProductCard/ProductCard";
import Title from "../Title/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const LatestProducts = () => {
  const dispatch = useDispatch();
  const sliderRef = useRef(null);

  const { items, status, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchLatestProducts(10));
  }, [dispatch]);

  const handlePrev = () => sliderRef.current?.slickPrev();
  const handleNext = () => sliderRef.current?.slickNext();

  if (status === "loading") {
    return (
      <div className="container mx-auto py-16 text-center text-slate-500">
        Loading Best Selling Products...
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="container mx-auto py-16 text-center text-red-500">
        Error: {error}
      </div>
    );
  }

  if (status === "succeeded" && items.length === 0) {
    return (
      <div className="container mx-auto py-16 text-center text-slate-500">
        No Products
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="relative overflow-hidden bg-slate-50 py-16">
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-100 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-indigo-100 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-8">
          <Title
            name="Best Selling Products"
            desc="Customer Preferred"
          />

          <div className="mt-4 flex justify-end gap-3">
            <button
              type="button"
              onClick={handlePrev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-blue-600 hover:bg-blue-600 hover:text-white"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-blue-600 hover:bg-blue-600 hover:text-white"
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white/70 p-4 shadow-xl shadow-slate-200/70 backdrop-blur md:p-6">
          <Slider ref={sliderRef} {...settings}>
            {items.map((product) => (
              <div key={product.id} className="px-3 py-6">
                <ProductCard product={product} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;