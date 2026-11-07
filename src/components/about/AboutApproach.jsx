import ParallaxMedia from "@/components/site/ParallaxMedia";
import Reveal from "@/components/site/Reveal";
import SectionLabel from "@/components/site/SectionLabel";
import { shadeGuideInUse } from "@/components/site/clinicPhotos";
import { useI18n } from "@/lib/i18n";

const COPY = {
  tr: {
    label: "Nasıl çalışıyoruz",
    heading: "Dinlemekle başlayan bakım",
    intro:
      "Her hasta kendi geçmişi ve kendi öncelikleriyle gelir. Yaklaşımımız bunların ne olduğunu ortaya çıkarmak üzerine kuruludur.",
    alt: "Diş rengini renk skalasıyla karşılaştıran diş hekimi",
    steps: [
      {
        title: "Konsültasyon",
        body: "Geçmişinizle, endişelerinizle ve ayrıntılı bir muayeneyle başlarız; böylece plan dişe ve o dişin sahibi olan kişiye yanıt verir.",
      },
      {
        title: "Kişiye özel tedavi planı",
        body: "Ağzınıza ve önceliklerinize göre kurulmuş bir planla ayrılırsınız: her adımın gerekçesi ve zaman çizelgesine dair gerçekçi bir tablo.",
      },
      {
        title: "Açık iletişim",
        body: "Neyin olup bittiğini, maliyetini ve ne bekleyeceğinizi her zaman bilirsiniz. Tedavinin herhangi bir aşamasında her şeyi sorabilirsiniz.",
      },
      {
        title: "Takip bakımı",
        body: "Tedavinin nasıl oturduğunu değerlendirir ve sonucun yıllarca doğru görünmesini sağlayan rutin bakımı veririz.",
      },
    ],
  },
  en: {
    label: "How we work",
    heading: "Care that begins with listening",
    intro:
      "Every patient arrives with their own history and their own priorities. Our approach is built around finding out what they are.",
    alt: "Dentist matching a tooth shade with a shade guide",
    steps: [
      {
        title: "Consultation",
        body: "We start with your history, your concerns and a full examination, so the plan answers the tooth — and the person attached to it.",
      },
      {
        title: "Personalised treatment planning",
        body: "You leave with a plan built for your mouth and your priorities: the reasoning behind each step, and a realistic picture of the timeline.",
      },
      {
        title: "Clear communication",
        body: "You will always know what is happening, what it costs and what to expect. Ask anything, at any point in the treatment.",
      },
      {
        title: "Follow-up care",
        body: "We review how the treatment has settled and give you the routine care that keeps the result looking right for years.",
      },
    ],
  },
};

export default function AboutApproach() {
  const { lang } = useI18n();
  const copy = COPY[lang] ?? COPY.en;

  return (
    <section id="approach">
      <div className="padding-global">
        <div className="section-y">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
            <div>
              <Reveal className="mb-2">
                <SectionLabel>{copy.label}</SectionLabel>
              </Reveal>
              <Reveal as="h2" delay={80} className="mb-4">
                {copy.heading}
              </Reveal>
              <Reveal delay={140} className="mb-8 max-w-[34rem]">
                {copy.intro}
              </Reveal>
              <Reveal delay={180} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <ParallaxMedia
                  src={shadeGuideInUse}
                  alt={copy.alt}
                  frameClassName="h-full w-full"
                  zoom="in"
                  strength={0.7}
                />
              </Reveal>
            </div>

            <div className="flex flex-col">
              {copy.steps.map((step, index) => (
                <Reveal
                  key={step.title}
                  delay={index * 80}
                  className="flex gap-5 border-t border-[#d0d0d0] py-6 last:border-b"
                >
                  <div className="text-meta pt-1 text-[#c8a27a]">{`0${index + 1}`}</div>
                  <div>
                    <h3 className="mb-2">{step.title}</h3>
                    <p className="max-w-[36rem]">{step.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}