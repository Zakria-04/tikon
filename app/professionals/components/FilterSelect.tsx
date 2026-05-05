import React from "react";

interface FilterSelectOption {
  label: string;
  value: string;
}

interface FilterSelectProps {
  value: string;
  onChange: (v: string) => void;
  options: FilterSelectOption[];
  placeholder: string;
  icon: React.ReactNode;
}

const FilterSelect = ({
  value,
  onChange,
  options,
  placeholder,
  icon,
}: FilterSelectProps) => {
  return (
    <div className="relative">
      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#FEBC37]">
        {icon}
      </span>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none rounded-xl border border-slate-200 bg-slate-50 py-2 pl-8 pr-9 text-[13px] font-medium text-[#00132F] transition focus:border-[#FEBC37] focus:bg-white focus:outline-none"
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      <svg
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M1 1l4 4 4-4" />
      </svg>
    </div>
  );
};

export default FilterSelect;
