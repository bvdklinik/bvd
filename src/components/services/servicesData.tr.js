import {
  alignerCloseUp,
  bridgeOnBase,
  procedureCloseUp,
  shadeGuideInUse,
  smileCloseUp,
  xrayConsultation,
} from "@/components/site/clinicPhotos";

/**
 * The clinic's treatments in Turkish. Same slugs, imagery and order as the
 * English list — only the wording differs, so a link works in either language.
 */
export const servicesTr = [
  {
    slug: "dental-veneers",
    title: "Diş Laminaları",
    tagline: "Gülüşünüze göre şekillendirilmiş ve renklendirilmiş porselen yapraklar.",
    summary:
      "Kırılmış, lekelenmiş veya düzensiz ön dişleri yeniden şekillendiren özel üretim porselen laminalar. Her parça, yapıştırılmadan önce kendi gülüşünüzün rengine ve ışık geçirgenliğine uyumlanır.",
    img: shadeGuideInUse,
    alt: "Klinikte renk skalası ile diş rengini karşılaştıran hasta",
  },
  {
    slug: "dental-crowns",
    title: "Diş Kronları",
    tagline: "Hasar görmüş dişlerin görünümü için dayanıklı kaplamalar.",
    summary:
      "Kron; kırılmış, aşınmış veya yoğun tedavi görmüş bir dişin şeklini, boyutunu ve dayanıklılığını yeniden kazandırır ve renk eşlemesi yapılarak yanındaki dişlerin arasında doğal durur.",
    img: bridgeOnBase,
    alt: "Diş modeli üzerinde hazırlanmış porselen kronlar",
  },
  {
    slug: "dental-implants",
    title: "Diş İmplantları",
    tagline: "Eksik diş için sağlam ve doğal görünen bir çözüm.",
    summary:
      "Eksik dişin yerine konulan, dayanıklı ve doğal görünen bir çözüm. İmplant çene kemiğiyle bütünleşerek yeni dişe sağlam bir temel ve kalıcı bir ağız sağlığı kazandırır.",
    img: xrayConsultation,
    alt: "İmplant konsültasyonunda alınan diş röntgeni",
  },
  {
    slug: "teeth-whitening",
    title: "Diş Beyazlatma",
    tagline: "Etkili beyazlatma tedavileriyle daha parlak bir gülüş.",
    summary:
      "Gülüşünüzü güvenle aydınlatan profesyonel beyazlatma; kanıtlanmış jel ajanları kullanılır ve tedavi öncesi ile sonrasında renk kontrolü yapılarak sonucun eşit kalması sağlanır.",
    img: smileCloseUp,
    alt: "Eşit ve parlak bir gülüşün yakın çekimi",
  },
  {
    slug: "invisalign",
    title: "Invisalign",
    tagline: "Dişleri sabit tel olmadan düzelten şeffaf plaklar.",
    summary:
      "Dişleri planlanmış küçük adımlarla sıraya sokan, şeffaf ve çıkarılabilir bir plak serisi. Tüm sıralama dijital tarama üzerinde kurgulanır ve tedavi boyunca klinikte takip edilir.",
    img: alignerCloseUp,
    alt: "Diş düzeltme için üretilmiş şeffaf plakların yakın çekimi",
  },
  {
    slug: "teeth-extraction",
    title: "Diş Çekimi",
    tagline: "Kurtarılamayan dişler için nazik bir çözüm.",
    summary:
      "Artık onarılamayan veya korunamayan bir dişin çekilmesi; röntgen üzerinden planlanır, lokal anestezi altında yapılır ve boşluk için seçenekler önceden konuşulur.",
    img: procedureCloseUp,
    alt: "Diş çekimi yapan diş hekimi",
  },
];