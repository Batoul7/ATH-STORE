import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiceCard = ({ data, display = "", gap = "" }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {data.map((item, index) => (
        <div
          key={index}
          className={`
            service-card-animate
            group relative overflow-hidden
            rounded-3xl border border-slate-200
            bg-white p-6
            transition-all duration-500
            hover:-translate-y-2
            hover:shadow-2xl hover:shadow-blue-100
            ${display}
            ${gap}
          `}
          style={{
            animationDelay: `${index * 0.15}s`,
          }}
        >
          <div className="absolute top-0 right-0 w-28 h-28 bg-blue-100 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

          <div
            className="
              relative z-10
              w-16 h-16
              rounded-2xl
              bg-gradient-to-br
              from-blue-500
              to-indigo-600
              text-white
              flex items-center justify-center
              text-2xl
              mb-5
              shadow-lg
              transition-transform duration-500
              group-hover:scale-110 group-hover:rotate-6
            "
          >
            <FontAwesomeIcon icon={item.icon} />
          </div>

          <h4 className="relative z-10 text-xl font-bold text-slate-800 mb-3">
            {item.h}
          </h4>

          <p className="relative z-10 text-slate-500 leading-7">{item.p}</p>

          <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-500 group-hover:w-full" />
        </div>
      ))}

      <style>
        {`
          .service-card-animate {
            opacity: 0;
            transform: translateY(26px) scale(0.96);
            animation: serviceFadeUp 0.65s ease-out forwards;
          }

          @keyframes serviceFadeUp {
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        `}
      </style>
    </div>
  );
};

export default ServiceCard;