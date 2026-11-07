import ClinicMap from "@/components/contact/ClinicMap";
import ContactCta from "@/components/contact/ContactCta";
import ContactDetails from "@/components/contact/ContactDetails";
import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";
import PageMeta from "@/components/site/PageMeta";
import PageShell from "@/components/site/PageShell";
import { useI18n } from "@/lib/i18n";

export default function Contact() {
  const { t } = useI18n();

  return (
    <PageShell>
      <PageMeta title={t("seo.contact.title")} description={t("seo.contact.description")} />
      <ContactHero />
      <ContactDetails />
      <ClinicMap />
      <ContactForm />
      <ContactCta />
    </PageShell>
  );
}