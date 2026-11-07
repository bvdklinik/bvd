import { LANGUAGES, useI18n } from "@/lib/i18n";

const LABELS = { tr: "TR", en: "EN" };

/** Turkish / English switch, kept to two letters so it fits the header at any width. */
export default function LanguageSwitcher({ className = "" }) {
  const { lang, setLang, t } = useI18n();

  return (
    <div
      role="group"
      aria-label={t("nav.language")}
      className={`flex items-center gap-0.5 rounded-full border border-[#313131]/15 p-0.5 ${className}`.trim()}
    >
      {LANGUAGES.map((code) => {
        const active = code === lang;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={active}
            className={`rounded-full px-2.5 py-1 text-[0.72rem] font-medium uppercase leading-none tracking-[0.08em] transition-colors duration-300 ${
              active
                ? "bg-[#37465c] text-[#f9f9f9]"
                : "text-[#616161] hover:text-[#313131]"
            }`}
          >
            {LABELS[code]}
          </button>
        );
      })}
    </div>
  );
}