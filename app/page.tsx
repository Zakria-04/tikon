import Image from "next/image";

import Header from "@/components/landingPage/Header";
import Hero from "@/components/landingPage/Hero";
import Categories from "@/components/landingPage/Categories";
import Professionals from "@/components/landingPage/Professionals";
import PostJobCTA from "@/components/landingPage/PostJobCTA";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Categories />
      <Professionals />
      <PostJobCTA />
      <Footer />
    </div>
  );
};

export default page;
