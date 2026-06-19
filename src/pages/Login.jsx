import LoginForm from "../components/LoginForm/LoginForm";

export default function Login() {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-70" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-indigo-100 blur-3xl opacity-70" />

      <div className="relative z-10">
        <LoginForm />
      </div>
    </section>
  );
}