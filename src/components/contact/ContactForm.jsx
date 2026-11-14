import { useState } from "react";
import { Check, Phone } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionLabel from "@/components/site/SectionLabel";
import { clinicPhone, clinicPhoneHref } from "@/components/site/clinicInfo";
import { useI18n } from "@/lib/i18n";
import { sendFormEmail } from "@/lib/sendFormEmail";
import ContactFormFields, { SUBJECTS } from "./ContactFormFields";

/* The stored subject stays in English; only the label the visitor reads changes. */
const EMPTY = {
  name: "",
  email: "",
  phone: "",
  subject: "General enquiry",
  message: "",
  consent: false,
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE = /^[+()\d\s.\-]{6,}$/;

function validate(form, t) {
  const errors = {};
  if (form.name.trim().length < 2) errors.name = t("error.name");
  if (!EMAIL.test(form.email.trim())) errors.email = t("error.email");
  if (form.phone.trim() && !PHONE.test(form.phone.trim())) errors.phone = t("error.phone");
  if (!form.subject) errors.subject = t("error.subject");
  if (form.message.trim().length < 10) errors.message = t("error.message");
  return errors;
}

const COPY = {
  tr: {
    label: "Mesaj gönderin",
    heading: "Size nasıl yardımcı olabileceğimizi anlatın",
    intro:
      "Ayrıntıları bize gönderin; seçeneklerle, en yakın randevu zamanıyla ve tedavinin neleri kapsadığıyla size geri dönelim.",
  },
  en: {
    label: "Send a message",
    heading: "Tell us how we can help",
    intro:
      "Send us the details and we will come back to you with the options, the next available appointment and what the treatment involves.",
  },
};

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const { lang, t } = useI18n();
  const copy = COPY[lang] ?? COPY.en;

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    setForm((current) => ({ ...current, [name]: type === "checkbox" ? checked : value }));
    if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate(form, t);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setStatus("sending");
    try {
      // E-mailed straight to the clinic's inbox (see src/lib/sendFormEmail.js).
      const subject = SUBJECTS.find((s) => s.value === form.subject);
      await sendFormEmail({
        subject: `Web sitesi mesajı — ${form.name.trim()}`,
        replyTo: form.email.trim(),
        fields: {
          [t("form.fullName")]: form.name,
          [t("form.email")]: form.email,
          [t("form.phone")]: form.phone,
          [t("form.subject")]: subject ? t(subject.labelKey) : form.subject,
          [t("form.message")]: form.message,
        },
      });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const reset = () => {
    setForm(EMPTY);
    setErrors({});
    setStatus("idle");
  };

  return (
    <section id="contact-form">
      <div className="padding-global">
        <div className="section-y">
          <div className="mb-8 max-w-[50rem]">
            <Reveal className="mb-2">
              <SectionLabel>{copy.label}</SectionLabel>
            </Reveal>
            <Reveal as="h2" delay={80} className="mb-4">
              {copy.heading}
            </Reveal>
            <Reveal delay={140}>{copy.intro}</Reveal>
          </div>

          <Reveal delay={100} className="card-pad rounded-lg bg-[#eff1f5]">
            {status === "sent" ? (
              <div className="flex max-w-[42rem] items-start gap-4">
                <Check className="mt-1 h-6 w-6 shrink-0 text-[#37465c]" />
                <div className="text-[#313131]">
                  {t("contact.sent")} <span className="font-medium">{form.email}</span>.{" "}
                  {t("contact.sentUrgent")}{" "}
                  <a href={clinicPhoneHref} className="font-medium">
                    {clinicPhone}
                  </a>
                  .
                  <button
                    type="button"
                    onClick={reset}
                    className="mt-4 block text-[0.9rem] uppercase text-[#37465c] underline"
                  >
                    {t("form.sendAnother")}
                  </button>
                </div>
              </div>
            ) : (
              <>
                {status === "error" && (
                  <div
                    role="alert"
                    className="mb-6 flex max-w-[42rem] items-start gap-4 rounded-lg bg-white/70 p-5"
                  >
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                    <div className="text-[#313131]">
                      {t("contact.error")}{" "}
                      <a href={clinicPhoneHref} className="font-medium">
                        {clinicPhone}
                      </a>
                      .
                    </div>
                  </div>
                )}
                <ContactFormFields
                  form={form}
                  errors={errors}
                  sending={status === "sending"}
                  onChange={handleChange}
                  onSubmit={handleSubmit}
                />
              </>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}