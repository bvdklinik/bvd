import AboutApproach from "@/components/about/AboutApproach";
import AboutClinic from "@/components/about/AboutClinic";
import AboutCta from "@/components/about/AboutCta";
import AboutDoctors from "@/components/about/AboutDoctors";
import AboutHero from "@/components/about/AboutHero";
import PageMeta from "@/components/site/PageMeta";
import PageShell from "@/components/site/PageShell";
import { useI18n } from "@/lib/i18n";

export default function About() {
  const { t } = useI18n();

  return (
    <PageShell>
      <PageMeta title={t("seo.about.title")} description={t("seo.about.description")} />
      <AboutHero />
      <AboutClinic />
      <AboutDoctors />
      <AboutApproach />
      <AboutCta />
    </PageShell>
  );
}