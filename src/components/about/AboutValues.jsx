import Reveal from "@/components/site/Reveal";
import { useI18n } from "@/lib/i18n";

const VALUES = {
  tr: [
    {
      title: "Hasta odaklı",
      body: "Planladığımız her randevuya konforunuz, sorularınız ve tercihleriniz yön verir.",
    },
    {
      title: "Dijital diş hekimliği",
      body: "Dijital görüntüleme ve ağız içi tarama, tedavi başlamadan önce net bir tablo sunar.",
    },
    {
      title: "Klinik standartlar",
      body: "Kliniğin tamamında yüksek hijyen standartları ve özenle korunan steril bir ortam.",
    },
  ],
  en: [
    {
      title: "Patient-focused",
      body: "Your comfort, your questions and your choices guide every appointment we plan.",
    },
    {
      title: "Digital dentistry",
      body: "Digital imaging and intraoral scanning give us a precise picture before treatment starts.",
    },
    {
      title: "Clinical standards",
      body: "High hygiene standards and a carefully maintained, sterile environment throughout the clinic.",
    },
  ],
};

export default function AboutValues() {
  const { lang } = useI18n();
  const values = VALUES[lang] ?? VALUES.en;

  return (
    <div className="grid gap-8 md:grid-cols-3 md:gap-10">
      {values.map((value, index) => (
        <Reveal key={value.title} delay={index * 90} className="border-t border-[#d0d0d0] pt-6">
          <div className="text-meta mb-3 text-[#c8a27a]">{`0${index + 1}`}</div>
          <h3 className="mb-2">{value.title}</h3>
          <p>{value.body}</p>
        </Reveal>
      ))}
    </div>
  );
}