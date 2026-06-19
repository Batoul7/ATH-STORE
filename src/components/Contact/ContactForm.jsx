const ContactForm = () => {
  return (
    <form className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70">
      <h3 className="mb-2 text-2xl font-extrabold text-slate-800">
        Send Message
      </h3>

      <p className="mb-6 text-sm text-slate-500">
        Have a question? Send us a message and we will get back to you soon.
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <input
          type="text"
          placeholder="Your Name"
          className="rounded-2xl border border-slate-200 bg-slate-50 p-3.5 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="rounded-2xl border border-slate-200 bg-slate-50 p-3.5 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
        />
      </div>

      <div className="mt-4">
        <input
          type="text"
          placeholder="Subject"
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-3.5 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
        />
      </div>

      <div className="mt-4">
        <textarea
          rows={5}
          placeholder="Message"
          className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 p-3.5 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
        />
      </div>

      <button
        type="button"
        className="mt-5 rounded-full bg-blue-600 px-8 py-3 font-semibold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-1 hover:bg-blue-700"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;