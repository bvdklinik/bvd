import Booking from "@/components/site/Booking";
import FAQ from "@/components/site/FAQ";
import PageMeta from "@/components/site/PageMeta";
import PageShell from "@/components/site/PageShell";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";
import { useI18n } from "@/lib/i18n";

export default function Services() {
  const { t } = useI18n();

  return (
    <PageShell>
      <PageMeta title={t("seo.services.title")} description={t("seo.services.description")} />
      <ServicesHero />
      <ServicesList />
      <FAQ />
      <Booking />
    </PageShell>
  );
}