import Form from "./components/Form";
import Hero from "./components/Hero";

const ProfessionalRegisterPage = () => {
  return (
    <main className="min-h-screen bg-slate-50 px-5 py-10" dir="rtl">
      <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Hero />
        <Form />
      </div>
    </main>
  );
};

export default ProfessionalRegisterPage;
