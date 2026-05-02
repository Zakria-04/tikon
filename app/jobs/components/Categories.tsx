import React from "react";

interface Categories {
  categories: string[];
}

const Categories = ({ categories }: Categories) => {
  return (
    <section className="px-5 pt-6">
      <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto pb-2">
        {categories.map((category, index) => (
          <button
            key={category}
            className={`shrink-0 rounded-full border px-4 py-2 text-sm font-bold transition ${
              index === 0
                ? "border-[#FEBC37] bg-[#FEBC37] text-[#00132F]"
                : "border-slate-200 bg-white text-slate-600 hover:border-[#FEBC37] hover:text-[#00132F]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Categories;
