"use client";
import FilterBar from "./components/FilterBar";
import Header from "@/components/Header";
import { Suspense } from "react";
import ProfessionalsContent from "./components/ProfessionalsContent";

const Professionals = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header />
      <div className="mx-auto max-w-6xl">
        <FilterBar />
        <Suspense fallback={<div className="p-6">Loading...</div>}>
          <ProfessionalsContent />
        </Suspense>
      </div>
    </div>
  );
};

export default Professionals;
