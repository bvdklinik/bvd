import { useI18n } from "@/lib/i18n";

const COPY = {
  tr: "Bilgilerimin, talebime yanıt verilmesi amacıyla BVD Clinic tarafından işlenmesine onay veriyorum.",
  en: "I agree to BVD Clinic processing my details to respond to my request.",
};

export default function ConsentCheckbox({ checked, onChange }) {
  const { lang } = useI18n();
  return (
    <label className="flex cursor-pointer items-start gap-3 text-[0.85rem] leading-relaxed text-[#616161]">
      <input
        type="checkbox"
        name="consent"
        required
        checked={checked}
        onChange={onChange}
        className="mt-1 h-4 w-4 shrink-0 accent-[#37465c]"
      />
      <span>{COPY[lang] ?? COPY.en}</span>
    </label>
  );
}