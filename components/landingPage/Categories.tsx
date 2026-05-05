'use client'
import Image from "next/image";
import { categories } from "@/assets/res/data";
import { useRouter } from "next/navigation";

const Categories = () => {
  const router = useRouter();
  const navigateToProfessionalsPage = (selectedCategory: string) => {
    router.push(
      `/professionals?category=${selectedCategory}&region=all&city=all`,
    );
  };

  return (
    <section className="px-5 pb-10 mt-10">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-[#00132F]">
              בעלי המקצוע הכי מבוקשים לבית
            </h2>

            <p className="mt-1 text-sm leading-6 text-slate-500">
              מצאו במהירות איש מקצוע לעבודות תיקון, שיפוץ ותחזוקה בבית
            </p>
          </div>

          {/* <button className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-[#00132F] shadow-sm transition hover:border-[#FEBC37] hover:bg-[#FEBC37]/10 sm:flex">
            כל הקטגוריות
            <FaArrowLeft className="text-xs" />
          </button> */}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {categories.map((category, index) => (
            <button
              key={`${category.category}-${index}`}
              className="group rounded-3xl border border-slate-100 bg-white p-4 text-right shadow-sm transition hover:-translate-y-1 hover:border-[#FEBC37]/60 hover:shadow-lg"
              onClick={() => navigateToProfessionalsPage(category.category)}
            >
              <div className="flex items-center gap-3">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gray-50 transition group-hover:bg-gray-100">
                  <Image
                    src={category.image}
                    alt={`${category.name} category`}
                    width={34}
                    height={34}
                    className="object-contain"
                  />
                </div>

                <div>
                  <h3 className="font-bold text-[#00132F]">{category.name}</h3>

                  <p className="mt-0.5 text-xs text-slate-500">
                    {category.bio || "בעלי מקצוע זמינים"}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Mobile Button */}
        {/* <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-[#00132F] shadow-sm transition hover:border-[#FEBC37] hover:bg-[#FEBC37]/10 sm:hidden">
          כל הקטגוריות
          <FaArrowLeft className="text-xs" />
        </button> */}
      </div>
    </section>
  );
};

export default Categories;
