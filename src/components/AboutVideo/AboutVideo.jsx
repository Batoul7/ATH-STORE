import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export default function AboutVideo() {
  return (
    <section className="relative py-20 overflow-hidden bg-slate-50">
      <div className="absolute left-0 top-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-70" />
      <div className="absolute right-0 bottom-0 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-70" />

      <div className="container mx-auto px-5 relative z-10">
        <div className="max-w-3xl mx-auto text-center video-content">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm mb-4">
            Watch Our Story
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-5">
            Discover What Makes Us Different
          </h2>

          <p className="text-slate-600 leading-8 mb-12">
            Learn more about our mission, our products, and how we create an
            exceptional shopping experience for our customers around the world.
          </p>
        </div>

        <div className="video-wrapper">
          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-slate-200">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/ScMzIvxBSi4"
              title="About Store"
              allowFullScreen
            />

            <div className="absolute top-6 left-6">
              <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xl animate-pulse">
                <FontAwesomeIcon icon={faPlay} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          .video-content {
            animation: fadeUp 0.8s ease-out both;
          }

          .video-wrapper {
            animation: scaleFade 0.9s ease-out 0.2s both;
          }

          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes scaleFade {
            from {
              opacity: 0;
              transform: scale(0.95);
            }

            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>
    </section>
  );
}