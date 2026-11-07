import * as AccordionPrimitive from "@radix-ui/react-accordion";
import ArrowIcon from "./ArrowIcon";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import { useI18n } from "@/lib/i18n";

const FAQS = {
  tr: [
    {
      q: "İlk ziyaretimde beni ne bekliyor?",
      a: "İlk ziyaretinizde kapsamlı bir diş muayenesi yapılır; gerekirse röntgen alınır. Diş geçmişinizi ve endişelerinizi konuşur, size özel bir tedavi planı hazırlarız.",
    },
    {
      q: "Diş hekimine ne sıklıkla gitmeliyim?",
      a: "Hastalarımızın yılda en az iki kez kontrol ve temizlik için gelmesini öneriyoruz. Ancak diş sağlığınızın durumuna göre daha sık ziyaret önerebiliriz.",
    },
    {
      q: "Tedavi maliyetleri nasıl açıklanıyor?",
      a: "Bir tedavi planının maliyeti, tedavi başlamadan önce açıklanır ve birlikte kararlaştırılır. Plan birkaç ziyarete yayılıyorsa her aşamanın neleri kapsadığını ve maliyetini ortaya koyarız; böylece süreç içinde sürpriz yaşanmaz.",
    },
    {
      q: "Gebelik döneminde diş tedavisi yaptırabilir miyim?",
      a: "Evet, rutin diş bakımı gebelikte güvenlidir. Hatta hormonal değişimler nedeniyle ağız sağlığını korumak daha da önemlidir. Bazı tedaviler için kadın doğum hekiminizden onay alınması gerekebilir.",
    },
    {
      q: "Tedavilerinizde hangi teknolojileri kullanıyorsunuz?",
      a: "Dijital görüntüleme ve ağız içi tarama ile çalışıyoruz. Bunlar tedavi başlamadan önce dişleri ve kemiği gösterir; böylece her adım koltukta karar verilmek yerine önceden planlanabilir.",
    },
  ],
  en: [
    {
      q: "What should I expect during my first visit?",
      a: "During your first visit, you'll receive a comprehensive dental examination, including X-rays if needed. We'll discuss your dental history, any concerns you have, and create a personalized treatment plan.",
    },
    {
      q: "How often should I visit the dentist?",
      a: "We recommend that patients come in for a check-up and cleaning at least twice a year. However, depending on your specific dental needs, we may suggest more frequent visits.",
    },
    {
      q: "How are treatment costs explained?",
      a: "The cost of a treatment plan is explained and agreed before it starts. Where a plan runs over several visits, we set out what each stage involves and what it costs, so nothing is a surprise partway through.",
    },
    {
      q: "Can I get dental treatments if I’m pregnant?",
      a: "Yes, routine dental care is safe during pregnancy. In fact, due to changes in hormones, it's important to maintain good oral health. Some treatments may require clearance from your obstetrician.",
    },
    {
      q: "What technologies do you use in your treatments?",
      a: "We work with digital imaging and intraoral scanning. They show us the teeth and the bone before treatment starts, so each step can be planned in advance rather than decided in the chair.",
    },
  ],
};

const HEADINGS = {
  tr: { heading: "Sıkça sorulan sorular" },
  en: { heading: "Frequently asked questions" },
};

export default function FAQ() {
  const { lang, t } = useI18n();
  const faqs = FAQS[lang] ?? FAQS.en;
  const copy = HEADINGS[lang] ?? HEADINGS.en;

  return (
    <section id="faq" className="section-faq">
      <div className="padding-global">
        <div className="section-y">
          <Reveal className="mb-2">
            <SectionLabel>{t("label.faq")}</SectionLabel>
          </Reveal>
          <Reveal as="h2" delay={80} className="mb-4">
            {copy.heading}
          </Reveal>

          <Reveal delay={140} className="rounded-lg bg-[#f1efea]">
            <div className="card-pad-xl">
              <AccordionPrimitive.Root type="single" collapsible defaultValue="faq-0">
                {faqs.map((f, idx) => (
                  <AccordionPrimitive.Item
                    key={f.q}
                    value={`faq-${idx}`}
                    className="mb-4 overflow-hidden rounded-[4px] border-b border-[#d0d0d0] last:mb-0"
                  >
                    <AccordionPrimitive.Header className="flex">
                      <AccordionPrimitive.Trigger className="group relative flex w-full items-center pr-8 pb-8 text-left transition-colors duration-300 hover:text-[#37465c] data-[state=open]:border-b data-[state=open]:border-black/10">
                        <span className="text-question">{f.q}</span>
                        <ArrowIcon className="accordion-icon h-auto group-data-[state=open]:rotate-[135deg]" />
                      </AccordionPrimitive.Trigger>
                    </AccordionPrimitive.Header>
                    <AccordionPrimitive.Content className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                      <div className="p-8 max-[767px]:px-0 max-[767px]:pb-8 max-[767px]:pt-0">
                        <div className="mb-2">
                          <p>{f.a}</p>
                        </div>
                      </div>
                    </AccordionPrimitive.Content>
                  </AccordionPrimitive.Item>
                ))}
              </AccordionPrimitive.Root>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}