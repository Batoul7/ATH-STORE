import aboutImg from "../../assets/about/a1.webp";
import { Counter } from "../Counter/Counter";

const AboutSection = () => {
  const stats = [
    { end: 10, label: "Years of Experience" },
    { end: 500, label: "Happy Customers" },
    { end: 50, label: "Product Choices" },
    { end: 20, label: "Global Brands" },
  ];

  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="hidden md:block about-image-animate">
            <div className="relative overflow-hidden rounded-3xl shadow-xl shadow-slate-200">
              <img
                src={aboutImg}
                alt="Our Store"
                className="h-[460px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent" />
            </div>
          </div>

          <div className="text-center lg:text-left about-content-animate">
            <span className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
              About Our Store
            </span>

            <h2 className="mb-5 text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl">
              The Best Online Store for Clothing and Jewelry
            </h2>

            <p className="text-base leading-8 text-slate-600 md:text-lg">
              We provide you with a seamless shopping experience where you can
              find the latest fashion trends in men's and women's clothing and
              luxurious jewelry. Our store is committed to delivering
              high-quality products at affordable prices, with carefully curated
              collections and exceptional customer service.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="counter-animate"
                  style={{ animationDelay: `${index * 0.12}s` }}
                >
                  <Counter end={stat.end} label={stat.label} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          .about-image-animate {
            animation: slideLeft 0.8s ease-out both;
          }

          .about-content-animate {
            animation: slideRight 0.8s ease-out both;
          }

          .counter-animate {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
            animation: counterFadeUp 0.6s ease-out forwards;
          }

          @keyframes slideLeft {
            from {
              opacity: 0;
              transform: translateX(-40px);
            }

            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideRight {
            from {
              opacity: 0;
              transform: translateX(40px);
            }

            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes counterFadeUp {
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

export default AboutSection;