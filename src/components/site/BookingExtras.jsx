import { getServices } from "@/components/services/servicesData";
import { useI18n } from "@/lib/i18n";
import ConsentCheckbox from "./ConsentCheckbox";

const COPY = {
  tr: { treatment: "Tedavi", unsure: "Emin değilim / muayene", notes: "Notlar (isteğe bağlı)", notesPh: "Şikâyetiniz, sorularınız veya bilmemizi istedikleriniz" },
  en: { treatment: "Treatment", unsure: "Not sure / check-up", notes: "Notes (optional)", notesPh: "Your concern, questions or anything we should know" },
};

export default function BookingExtras({ form, onChange }) {
  const { lang } = useI18n();
  const c = COPY[lang] ?? COPY.en;

  return (
    <>
      <div className="field-group md:col-span-2">
        <label className="field-label" htmlFor="treatment">{c.treatment}</label>
        <select id="treatment" name="treatment" value={form.treatment} onChange={onChange} className="field-premium rounded-lg px-4 py-3 text-[0.95rem]">
          <option value="">{c.unsure}</option>
          {getServices(lang).map((s) => (
            <option key={s.slug} value={s.title}>{s.title}</option>
          ))}
        </select>
      </div>
      <div className="field-group md:col-span-2">
        <label className="field-label" htmlFor="notes">{c.notes}</label>
        <textarea id="notes" name="notes" rows={3} maxLength={1000} value={form.notes} onChange={onChange} placeholder={c.notesPh} className="field-premium rounded-lg px-4 py-3 text-[0.95rem]" />
      </div>
      <div className="md:col-span-2">
        <ConsentCheckbox checked={form.consent} onChange={onChange} />
      </div>
    </>
  );
}