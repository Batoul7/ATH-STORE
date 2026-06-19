import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactCard = ({ data }) => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {data.map((item, index) => (
        <div
          key={index}
          className={index === 0 ? "sm:col-span-2" : ""}
        >
          <div className="group rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-xl shadow-slate-200/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-100">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
              <FontAwesomeIcon icon={item.icon} />
            </div>

            <h4 className="mb-2 text-lg font-bold text-slate-800">
              {item.title}
            </h4>

            <p className="text-sm text-slate-500">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactCard;