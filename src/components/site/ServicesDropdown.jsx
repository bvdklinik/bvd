import { ChevronDown } from "lucide-react";
import ArrowIcon from "./ArrowIcon";
import { getServiceMenu } from "./serviceMenu";
import { useI18n } from "@/lib/i18n";

export default function ServicesDropdown({ label }) {
  const { lang } = useI18n();
  const groups = getServiceMenu(lang);

  return (
    <div className="group/dd relative">
      <a
        href="/services"
        className="flex items-center gap-1 px-[0.2rem] text-[0.9rem] uppercase text-[#313131] no-underline"
      >
        {label}
        <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover/dd:rotate-180 group-focus-within/dd:rotate-180" />
      </a>

      <div className="invisible absolute left-1/2 top-full z-[400] -translate-x-1/2 translate-y-2 pt-5 opacity-0 transition-all duration-300 group-hover/dd:visible group-hover/dd:translate-y-0 group-hover/dd:opacity-100 group-focus-within/dd:visible group-focus-within/dd:translate-y-0 group-focus-within/dd:opacity-100">
        <div className="grid w-[40rem] grid-cols-3 gap-6 rounded-lg border border-black/[0.06] bg-white p-6 shadow-[0_30px_60px_-30px_rgba(20,20,20,0.45)]">
          {groups.map((g) => (
            <div key={g.label}>
              <div className="text-meta mb-3 border-b border-[#c8a27a]/50 pb-2 text-[#37465c]">
                {g.label}
              </div>
              <ul className="m-0 flex list-none flex-col gap-1 p-0">
                {g.items.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="group/item flex items-center justify-between rounded-md px-3 py-2.5 text-[0.95rem] text-[#313131] no-underline transition-colors duration-300 hover:bg-[#eff1f5] hover:text-[#37465c]"
                    >
                      <span className="transition-transform duration-300 group-hover/item:translate-x-1">
                        {item.title}
                      </span>
                      <ArrowIcon className="h-4 w-4 -translate-x-1 text-[#c8a27a] opacity-0 transition-all duration-300 group-hover/item:translate-x-0 group-hover/item:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}