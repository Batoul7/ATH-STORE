import { useEffect, useState } from "react";

export const Counter = ({ end, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 2000;
    const increment = Math.ceil(end / (duration / 50));

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setCount(start);
    }, 50);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div
      className="
        rounded-2xl
        border border-slate-200
        bg-white
        p-5
        text-center
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-lg hover:shadow-blue-100
      "
    >
      <h3 className="text-3xl font-extrabold text-blue-600">
        {count}+
      </h3>

      <p className="mt-2 text-sm font-medium text-slate-500">
        {label}
      </p>
    </div>
  );
};