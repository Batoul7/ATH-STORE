import "./Title.css";

export default function Title({ name, desc }) {
  return (
    <div className="title py-14">
      <div className="text-center max-w-3xl mx-auto px-4">
        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
          Our Collection
        </span>

        <h2 className="title-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-800">
          {name}
        </h2>

        <div className="title-line mx-auto mt-4 mb-5"></div>

        <p className="text-slate-500 text-base md:text-lg leading-8">
          {desc}
        </p>
      </div>
    </div>
  );
}