import { useState } from "react";
import { CalendarCheck } from "lucide-react";
import ArrowIcon from "./ArrowIcon";
import GlassPanel from "./GlassPanel";
import ParallaxMedia from "./ParallaxMedia";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import BookingExtras from "./BookingExtras";
import { smileWide, doctorPortraits } from "./clinicPhotos";
import { clinicEmail, clinicEmailHref, clinicPhone, clinicPhoneHref } from "./clinicInfo";
import { useI18n } from "@/lib/i18n";
import { buildWhatsAppMessage, openWhatsApp } from "@/lib/whatsapp";

const COPY = {
  tr: {
    heading: "Online randevu alın",
    intro: "Size uygun zamanı bize bildirin, randevunuzu WhatsApp üzerinden onaylayalım.",
    smileAlt: "Sağlıklı ve kendinden emin bir gülüşün yakın çekimi",
    portraitAlt: "BVD Clinic'te bir diş hekiminin portresi",
    nextStep: "Randevu Al'a bastığınızda WhatsApp, bilgilerinizle hazırlanmış bir mesajla açılır; talebinizi iletmek için WhatsApp'ta gönder'e basın. Ekibimiz bir iş günü içinde uygun saati teyit eder. Randevunuz bu onaydan sonra kesinleşir.",
  },
  en: {
    heading: "Book online",
    intro: "Tell us when it suits you and we will confirm your appointment on WhatsApp.",
    smileAlt: "Close-up of a healthy, confident smile",
    portraitAlt: "Portrait of a dentist at BVD Clinic",
    nextStep: "When you press Book Appointment, WhatsApp opens with a message containing your details; press send in WhatsApp to deliver it. Our team confirms a time within one working day. Your appointment is final once confirmed.",
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

  // Delivered over WhatsApp: opens a pre-filled message to the clinic's number.
  // Runs synchronously so the browser does not block the new tab.
  const handleSubmit = (event) => {
    event.preventDefault();
    openWhatsApp(
      buildWhatsAppMessage([
        `*${t("whatsapp.bookingTitle")}*`,
        "",
        [t("form.fullName"), form.name],
        [t("form.email"), form.email],
        [t("form.phone"), form.phone],
        [t("form.date"), form.date],
        [t("form.time"), form.time],
        [t("whatsapp.treatment"), form.treatment || t("whatsapp.unsure")],
        "",
        form.notes.trim(),
      ])
    );
    setStatus("sent");
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
                  <div className="text-[#313131]">{t("whatsapp.sent")}</div>
                </div>
              ) : (
                <>
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
                      className="group/cta inline-flex items-center justify-center gap-2 rounded-full bg-[#37465c] px-7 py-3 text-[0.8rem] font-medium uppercase tracking-[0.05em] text-[#f9f9f9] transition-colors duration-500 hover:bg-[#2c3a4e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#37465c] focus-visible:ring-offset-2 disabled:cursor-default disabled:opacity-60"
                    >
                      {t("form.book")}
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