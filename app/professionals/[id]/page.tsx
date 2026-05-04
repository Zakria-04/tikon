"use client";
import { useParams } from "next/navigation";
import React from "react";
import ProfessionalProfile from "./components/ProfessionalProfile";

const page = () => {
  const id = useParams().id as string;

  return (
    <div>
      <ProfessionalProfile />
    </div>
  );
};

export default page;
