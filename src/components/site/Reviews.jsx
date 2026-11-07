import { Star } from "lucide-react";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { clinicGoogleProfile } from "./clinicInfo";
import { useI18n } from "@/lib/i18n";

/* Real Google reviews, quoted as written by the patient. */
const REVIEWS = [
  { name: "Zaki Aweys", text: "As a foreigner, finding a trustworthy dental clinic was very important for me. The team was professional, caring, and honest. I felt safe and comfortable throughout the whole process. Highly recommended!" },
  { name: "Aslan Yılmaz", text: "İşinin hakını yapan bir diş kliniği. Temiz, hijyenik, güler yüzlü diş hekimleri; özellikle Volkan hoca ve Ömer hocaya teşekkürler. Tüm çalışan personellere de teşekkür ederim." },
  { name: "Fatma Bilgin", text: "Volkan Bey'e ilgisi ve yardımları için teşekkürler. Tüm dişçi korkuma rağmen sabırla implant, kanal tedavisi, dolgu, kaplama gibi işlemlerde yardımcı olduğu için. Ekibi de gayet güler yüzlü ve endişe etmeden kendinizi rahat hissedebilirsiniz." },
];

const COPY = {
  tr: { label: "Hasta yorumları", heading: "Hastalarımız ne diyor", more: "Tüm yorumlar Google'da" },
  en: { label: "Patient reviews", heading: "What our patients say", more: "All reviews on Google" },
};

export default function Reviews() {
  const { lang } = useI18n();
  const c = COPY[lang] ?? COPY.en;

  return (
    <section id="reviews">
      <div className="padding-global">
        <div className="section-y">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <Reveal className="mb-2"><SectionLabel>{c.label}</SectionLabel></Reveal>
              <Reveal as="h2" delay={80}>{c.heading}</Reveal>
            </div>
            <a href={clinicGoogleProfile} target="_blank" rel="noreferrer" className="text-[0.9rem] uppercase text-[#37465c]">{c.more}</a>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 100} className="card-pad flex flex-col rounded-lg bg-[#eff1f5]">
                <div className="mb-4 flex gap-1 text-[#c8a27a]">
                  {[0, 1, 2, 3, 4].map((s) => <Star key={s} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mb-6 flex-1 text-[#313131]">“{r.text}”</p>
                <div className="text-meta">{r.name} · Google</div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}