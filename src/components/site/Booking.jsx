import { useState } from "react";
import { CalendarCheck, Phone } from "lucide-react";
import ArrowIcon from "./ArrowIcon";
import GlassPanel from "./GlassPanel";
import ParallaxMedia from "./ParallaxMedia";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import BookingExtras from "./BookingExtras";
import { smileWide, doctorPortraits } from "./clinicPhotos";
import { clinicEmail, clinicEmailHref, clinicPhone, clinicPhoneHref } from "./clinicInfo";
import { useI18n } from "@/lib/i18n";
import { sendFormEmail } from "@/lib/sendFormEmail";

const COPY = {
  tr: {
    heading: "Online randevu alın",
    intro: "Size uygun zamanı bize bildirin, randevunuzu e-posta ile onaylayalım.",
    smileAlt: "Sağlıklı ve kendinden emin bir gülüşün yakın çekimi",
    portraitAlt: "BVD Clinic'te bir diş hekiminin portresi",
    nextStep: "Sırada ne var: ekibimiz talebinizi inceler ve bir iş günü içinde e-posta veya telefonla uygun saati teyit eder. Randevunuz bu onaydan sonra kesinleşir.",
  },
  en: {
    heading: "Book online",
    intro: "Tell us when it suits you and we will confirm your appointment by e-mail.",
    smileAlt: "Close-up of a healthy, confident smile",
    portraitAlt: "Portrait of a dentist at BVD Clinic",
    nextStep: "What happens next: our team reviews your request and confirms a time by e-mail or phone within one working day. Your appointment is final once confirmed.",
  },
};

export default function Booking() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", time: "", treatment: "", notes: "", consent: false });
  const [status, setStatus] = useState("idle");
  const { lang, t } = useI18n();
  const copy = COPY[lang] ?? COPY.en;

  const fields = [
    { name: "name", type: "text", label: t("form.fullName"), autoComplete: "name" },
    { name: "email", type: "email", label: t("form.email"), autoComplete: "email" },
    { name: "phone", type: "tel", label: t("form.phone"), autoComplete: "tel" },
    { name: "date", type: "text", label: t("form.date"), placeholder: "DD.MM.YYYY" },
    { name: "time", type: "text", label: t("form.time"), placeholder: "HH:MM" },
  ];

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    const request = {
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      preferred_date: form.date.trim(),
      preferred_time: form.time.trim(),
      treatment: form.treatment,
      notes: form.notes.trim(),
      consent: form.consent,
    };

    try {
      // E-mailed straight to the clinic's inbox (see src/lib/sendFormEmail.js).
      await sendFormEmail({
        subject: `Randevu talebi — ${request.name}`,
        replyTo: request.email,
        fields: {
          [t("form.fullName")]: request.name,
          [t("form.email")]: request.email,
          [t("form.phone")]: request.phone,
          [t("form.date")]: request.preferred_date,
          [t("form.time")]: request.preferred_time,
          [lang === "en" ? "Treatment" : "Tedavi"]: request.treatment || (lang === "en" ? "Not sure / check-up" : "Emin değilim / muayene"),
          [lang === "en" ? "Notes" : "Notlar"]: request.notes,
        },
      });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="booking" className="section-book-online -mt-4">
      <div className="padding-global">
        <Reveal className="relative aspect-[1300/560] overflow-hidden rounded-lg max-[767px]:aspect-auto max-[767px]:h-[14rem] max-[479px]:h-[16rem]">
          <ParallaxMedia
            src={smileWide}
            alt={copy.smileAlt}
            frameClassName="h-full w-full"
            imageClassName="object-[50%_42%]"
            zoom="in"
            strength={1}
          />
        </Reveal>

        <Reveal
          delay={120}
          className="relative z-[1] -mt-4 overflow-hidden rounded-lg bg-white shadow-[0_60px_110px_-70px_rgba(20,20,20,0.6)] ring-1 ring-black/[0.06]"
        >
          <div className="grid lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
            <div className="relative aspect-[4/5] md:aspect-[16/9] lg:aspect-auto">
              <ParallaxMedia
                src={doctorPortraits[0]}
                alt={copy.portraitAlt}
                frameClassName="h-full w-full"
                imageClassName="object-[50%_22%]"
                zoom="in"
                strength={0.7}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12151c]/80 via-[#12151c]/20 to-transparent" />
              <div className="absolute inset-x-5 bottom-5">
                <GlassPanel tone="dark" className="px-6 py-5">
                  <div className="text-meta text-[#d2d2d2]">{t("label.preferToTalk")}</div>
                  <a
                    href={clinicPhoneHref}
                    className="mt-1 block text-[1.05rem] font-medium text-[#f9f9f9] no-underline transition-opacity duration-300 hover:opacity-70"
                  >
                    {clinicPhone}
                  </a>
                  <a
                    href={clinicEmailHref}
                    className="mt-1 block text-[0.85rem] text-[#d2d2d2] no-underline transition-opacity duration-300 hover:opacity-70"
                  >
                    {clinicEmail}
                  </a>
                </GlassPanel>
              </div>
            </div>

            <div className="p-8 md:p-12 lg:p-10 xl:p-12">
              <Reveal className="mb-2">
                <SectionLabel>{t("label.booking")}</SectionLabel>
              </Reveal>
              <Reveal as="h2" delay={60} className="mb-4">
                {copy.heading}
              </Reveal>
              <Reveal delay={120} className="mb-8 max-w-[32rem] text-[#616161]">
                {copy.intro}
              </Reveal>

              {status === "sent" ? (
                <div className="flex items-start gap-4 rounded-lg bg-[#f1efea] p-6">
                  <CalendarCheck className="mt-0.5 h-6 w-6 shrink-0 text-[#37465c]" />
                  <div className="text-[#313131]">{t("booking.sent")}</div>
                </div>
              ) : (
                <>
                  {status === "error" && (
                    <div
                      role="alert"
                      className="mb-6 flex items-start gap-4 rounded-lg bg-[#f1efea] p-5"
                    >
                      <Phone className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                      <div className="text-[#313131]">
                        {t("booking.error")}{" "}
                        <a href={clinicPhoneHref} className="font-medium">
                          {clinicPhone}
                        </a>
                        .
                      </div>
                    </div>
                  )}
                  <form className="grid w-full gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
                  {fields.map((field) => (
                    <div
                      key={field.name}
                      className={`field-group w-full ${
                        field.name === "time" ? "md:col-span-2" : ""
                      }`}
                    >
                      <label className="field-label" htmlFor={field.name}>
                        {field.label}
                      </label>
                      <input
                        id={field.name}
                        className="field-premium rounded-lg px-4 py-3 text-[0.95rem]"
                        name={field.name}
                        type={field.type}
                        autoComplete={field.autoComplete}
                        placeholder={field.placeholder}
                        required
                        value={form[field.name]}
                        onChange={handleChange}
                      />
                    </div>
                  ))}

                  <BookingExtras form={form} onChange={handleChange} />

                  <div className="md:col-span-2">
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="group/cta inline-flex items-center justify-center gap-2 rounded-full bg-[#37465c] px-7 py-3 text-[0.8rem] font-medium uppercase tracking-[0.05em] text-[#f9f9f9] transition-colors duration-500 hover:bg-[#2c3a4e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37465c] focus-visible:ring-offset-2 disabled:cursor-default disabled:opacity-60"
                    >
                      {status === "sending" ? t("form.bookingSending") : t("form.book")}
                      <ArrowIcon className="h-4 w-4 transition-transform duration-500 ease-out group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1" />
                    </button>
                    <p className="mt-3 text-[0.8rem] text-[#616161]">{copy.nextStep}</p>
                  </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}