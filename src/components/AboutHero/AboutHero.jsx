import heroImg from "../../assets/about/h3.webp";

export default function AboutHero() {
  return (
    <section
      className="relative h-[450px] md:h-[550px] bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="container mx-auto px-5 relative z-10 h-full flex items-center">
        <div className="max-w-xl text-white about-hero-content">
          <span className="about-badge inline-block px-4 py-1 rounded-full bg-blue-500/20 border border-blue-300 mb-4 text-sm">
            About Our Store
          </span>

          <h1 className="about-title text-4xl md:text-5xl font-bold leading-tight mb-4">
            Best Shopping Experience
          </h1>

          <p className="about-desc text-lg text-slate-200 leading-8 mb-6">
            Discover quality products, affordable prices and a smooth shopping
            experience designed to meet your everyday needs.
          </p>

          <button className="about-btn px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1">
            Browse Products
          </button>
        </div>
      </div>

      <style>
        {`
          .about-hero-content {
            animation: fadeUp 0.8s ease-out both;
          }

          .about-badge {
            animation: fadeUp 0.5s ease-out both;
          }

          .about-title {
            animation: fadeUp 0.7s ease-out 0.1s both;
          }

          .about-desc {
            animation: fadeUp 0.7s ease-out 0.2s both;
          }

          .about-btn {
            animation: fadeUp 0.7s ease-out 0.3s both;
          }

          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(25px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
}