import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

import SlideImg1 from "../../assets/sliderImg/st.webp";
import SlideImg2 from "../../assets/sliderImg/s1.webp";
import SlideImg3 from "../../assets/sliderImg/s3.webp";
import SlideImg4 from "../../assets/sliderImg/s4.webp";
import SlideImg5 from "../../assets/sliderImg/s5.webp";

const sliderData = [
  {
    title: "Timeless Men's Fashion",
    description:
      "Discover a refined collection of men's fashion that blends comfort with sophistication for every occasion.",
    image: SlideImg2,
  },
  {
    title: "Smart Tech, Smarter Living",
    description:
      "Explore the latest electronic devices and innovative gadgets designed to enhance your everyday life.",
    image: SlideImg1,
  },
  {
    title: "Elegant Women's Style",
    description:
      "Shop the finest selection of women's fashion, designed to keep you trendy and elegant in every season.",
    image: SlideImg3,
  },
  {
    title: "Luxury in Every Detail",
    description:
      "Indulge in exquisite jewelry collections that embody elegance, sophistication, and timeless beauty.",
    image: SlideImg4,
  },
  {
    title: "Trendy & Urban Wear",
    description:
      "Express your unique style with our trendy and contemporary fashion pieces designed for modern youth.",
    image: SlideImg5,
  },
];

export default function Carousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);

  const activeItem = sliderData[activeSlide];

  const handlePrev = () => sliderRef.current?.slickPrev();
  const handleNext = () => sliderRef.current?.slickNext();

  const settings = {
    infinite: true,
    speed: 650,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "48px",
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    beforeChange: (_, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "24px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "32px",
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <section className="relative w-full max-w-full min-h-[calc(100vh-121px)] overflow-hidden bg-slate-950">
      <div
        key={activeItem.image}
        className="absolute inset-0 bg-cover bg-center scale-105 hero-bg-zoom"
        style={{ backgroundImage: `url(${activeItem.image})` }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-900/40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(37,99,235,0.28),transparent_35%)] pulse-glow" />

      <div className="container mx-auto relative z-10 min-h-[calc(100vh-121px)] flex items-center px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center w-full">
          <div
            key={activeSlide}
            className="text-center lg:text-left hero-content-animate"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-blue-200 text-sm mb-5 backdrop-blur-md hero-badge-animate">
              <FontAwesomeIcon icon={faCartShopping} />
              New Season Collection
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-5 hero-title-animate">
              {activeItem.title}
            </h1>

            <p className="text-base md:text-lg text-slate-200 max-w-xl mx-auto lg:mx-0 leading-8 mb-8 hero-desc-animate">
              {activeItem.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start hero-actions-animate">
              <button className="px-7 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-lg shadow-blue-600/30 hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300">
                Shop Now
              </button>

              <button className="px-7 py-3 rounded-full bg-white/10 text-white font-semibold border border-white/20 backdrop-blur-md hover:bg-white hover:text-slate-900 transition-all duration-300">
                Explore More
              </button>
            </div>
          </div>

          <div className="relative w-full max-w-full overflow-hidden pb-4 hero-slider-animate">
            <div className="absolute -inset-4 rounded-[2rem] bg-blue-500/20 blur-2xl pointer-events-none" />

            <Slider ref={sliderRef} {...settings}>
              {sliderData.map((item, index) => (
                <div key={index} className="px-2 py-8">
                  <div
                    className={`relative h-[250px] md:h-[350px] rounded-[2rem] overflow-hidden transition-all duration-500
                    ${
                      index === activeSlide
                        ? "scale-100 opacity-100 shadow-2xl shadow-blue-950/60"
                        : "scale-95 opacity-70"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg line-clamp-1">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>

            <div className="flex justify-center lg:justify-end gap-3 mt-1">
              <button
                type="button"
                onClick={handlePrev}
                className="w-11 h-11 rounded-full bg-white text-slate-900 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:-translate-y-1"
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="w-11 h-11 rounded-full bg-white text-slate-900 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:-translate-y-1"
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          .hero-bg-zoom {
            animation: heroBgZoom 4s ease-out both;
          }

          .pulse-glow {
            animation: pulseGlow 3s ease-in-out infinite alternate;
          }

          .hero-content-animate {
            animation: fadeUp 0.65s ease-out both;
          }

          .hero-badge-animate {
            animation: fadeUp 0.5s ease-out both;
          }

          .hero-title-animate {
            animation: fadeUp 0.65s ease-out 0.08s both;
          }

          .hero-desc-animate {
            animation: fadeUp 0.65s ease-out 0.16s both;
          }

          .hero-actions-animate {
            animation: fadeUp 0.65s ease-out 0.24s both;
          }

          .hero-slider-animate {
            animation: slideInRight 0.75s ease-out both;
          }

          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(24px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(35px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes heroBgZoom {
            from {
              opacity: 0.75;
              transform: scale(1);
            }
            to {
              opacity: 1;
              transform: scale(1.05);
            }
          }

          @keyframes pulseGlow {
            from {
              opacity: 0.65;
            }
            to {
              opacity: 1;
            }
          }
        `}
      </style>
    </section>
  );
}