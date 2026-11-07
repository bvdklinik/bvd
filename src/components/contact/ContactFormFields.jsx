import { Loader } from "lucide-react";
import ArrowIcon from "@/components/site/ArrowIcon";
import { useI18n } from "@/lib/i18n";
import ContactField from "./ContactField";
import ConsentCheckbox from "@/components/site/ConsentCheckbox";

/**
 * The options the enquiry form offers. `value` is the stored subject — the
 * English wording the clinic's records already use — and `labelKey` is what the
 * visitor reads, so switching language never changes the saved value.
 */
const SUBJECTS = [
  { value: "General enquiry", labelKey: "subject.general" },
  { value: "Appointment & consultation", labelKey: "subject.appointment" },
  { value: "Dental implants", labelKey: "subject.implants" },
  { value: "Orthodontics & clear aligners", labelKey: "subject.orthodontics" },
  { value: "Aesthetic dentistry & smile design", labelKey: "subject.aesthetic" },
  { value: "Something else", labelKey: "subject.other" },
];

export default function ContactFormFields({ form, errors, sending, onChange, onSubmit }) {
  const { t, lang } = useI18n();

  const subjects = SUBJECTS.map((subject) => ({
    value: subject.value,
    label: t(subject.labelKey),
  }));

  return (
    <form className="grid w-full gap-5 md:grid-cols-2" onSubmit={onSubmit} noValidate>
      <ContactField
        id="name"
        label={t("form.fullName")}
        autoComplete="name"
        value={form.name}
        onChange={onChange}
        error={errors.name}
      />
      <ContactField
        id="email"
        label={t("form.email")}
        type="email"
        autoComplete="email"
        value={form.email}
        onChange={onChange}
        error={errors.email}
      />
      <ContactField
        id="phone"
        label={t("form.phone")}
        type="tel"
        autoComplete="tel"
        value={form.phone}
        onChange={onChange}
        error={errors.phone}
      />
      <ContactField
        id="subject"
        label={t("form.subject")}
        type="select"
        options={subjects}
        value={form.subject}
        onChange={onChange}
        error={errors.subject}
      />

      <div className="md:col-span-2">
        <ContactField
          id="message"
          label={t("form.message")}
          type="textarea"
          value={form.message}
          onChange={onChange}
          error={errors.message}
        />
      </div>

      <div className="md:col-span-2">
        <ConsentCheckbox checked={form.consent} onChange={onChange} />
      </div>

      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={sending}
          className="group/cta flex w-full items-center justify-center gap-2 rounded-full bg-[#37465c] px-8 py-4 text-[0.9rem] font-medium uppercase tracking-[0.05em] text-[#f9f9f9] transition-colors duration-500 hover:bg-[#2c3a4e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37465c] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {sending ? (
            <>
              <Loader className="h-4 w-4 animate-spin" />
              {t("form.sending")}
            </>
          ) : (
            <>
              {t("form.send")}
              <ArrowIcon className="h-4 w-4 transition-transform duration-500 ease-out group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1" />
            </>
          )}
        </button>
        <p className="mt-3 text-[0.8rem] text-[#616161]">
          {lang === "en"
            ? "We reply to every message within one working day."
            : "Tüm mesajlara bir iş günü içinde yanıt veriyoruz."}{" "}
          {t("form.privacy")}
        </p>
      </div>
    </form>
  );
}