import { useParams } from "react-router-dom";
import Booking from "@/components/site/Booking";
import PageMeta from "@/components/site/PageMeta";
import PageShell from "@/components/site/PageShell";
import PageNotFound from "@/lib/PageNotFound";
import TreatmentAftercare from "@/components/services/TreatmentAftercare";
import TreatmentBenefits from "@/components/services/TreatmentBenefits";
import TreatmentCta from "@/components/services/TreatmentCta";
import TreatmentFaq from "@/components/services/TreatmentFaq";
import TreatmentGallery from "@/components/services/TreatmentGallery";
import TreatmentHero from "@/components/services/TreatmentHero";
import TreatmentHighlights from "@/components/services/TreatmentHighlights";
import TreatmentOverview from "@/components/services/TreatmentOverview";
import TreatmentProcess from "@/components/services/TreatmentProcess";
import TreatmentSuitability from "@/components/services/TreatmentSuitability";
import { getTreatment } from "@/components/services/treatments";
import { getTreatmentLayout } from "@/components/services/treatmentLayouts";
import { useI18n } from "@/lib/i18n";

const OTHER_SIDE = { left: "right", right: "left" };

export default function Treatment() {
  const { slug } = useParams();
  const { lang } = useI18n();
  const treatment = getTreatment(slug, lang);

  if (!treatment) return <PageNotFound />;

  const layout = getTreatmentLayout(slug);

  return (
    <PageShell>
      <PageMeta title={treatment.metaTitle} description={treatment.metaDescription} />
      <TreatmentHero hero={treatment.hero} facts={treatment.facts} tone={layout.heroTone} />
      <TreatmentHighlights highlights={treatment.highlights} />
      <TreatmentOverview
        overview={treatment.overview}
        variant={layout.overviewStyle}
        mediaSide={layout.mediaSide}
      />
      <TreatmentBenefits benefits={treatment.benefits} />
      <TreatmentSuitability
        suitability={treatment.suitability}
        mediaSide={OTHER_SIDE[layout.mediaSide]}
      />
      <TreatmentProcess process={treatment.process} />
      <TreatmentGallery
        gallery={treatment.gallery}
        variant={layout.galleryStyle}
        side={layout.gallerySide}
      />
      <TreatmentAftercare aftercare={treatment.aftercare} mediaSide={layout.mediaSide} />
      <TreatmentCta cta={treatment.cta} tone={layout.bandTone} />
      <TreatmentFaq faqs={treatment.faqs} />
      <Booking />
    </PageShell>
  );
}