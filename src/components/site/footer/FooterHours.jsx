import { useI18n } from "@/lib/i18n";
import { clinicHours } from "../clinicInfo";

export default function FooterHours() {
  const { lang } = useI18n();
  return (
    <div className="mb-5">
      <div className="mb-1 text-[0.72rem] uppercase tracking-[0.1em] text-[#8a8a8a]">
        {lang === "en" ? "Opening hours" : "Çalışma saatleri"}
      </div>
      {clinicHours.map((row) => (
        <div key={row.en} className="flex justify-between gap-4 text-[0.95rem] text-[#313131]">
          <span>{row[lang] ?? row.en}</span>
          <span>{row.time ?? (lang === "en" ? "Closed" : "Kapalı")}</span>
        </div>
      ))}
    </div>
  );
}