import Image from "next/image";
import Link from "next/link";
import {
  FaArrowLeft,
  FaEnvelope,
  FaLock,
  FaUser,
  FaCheckCircle,
} from "react-icons/fa";
import Hero from "./components/Hero";
import RegisterForm from "./components/RegisterForm";
import Footer from "@/components/Footer";

const CustomerRegisterPage = () => {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden md:pb-0">
        <Hero />
        <RegisterForm />
        <div className="pt-36 md:pt-0">
          <Footer />
        </div>
      </section>
    </main>
  );
};

export default CustomerRegisterPage;
