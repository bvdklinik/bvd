import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import Clinic from "@/components/site/Clinic";
import Team from "@/components/site/Team";
import Insights from "@/components/site/Insights";
import Reviews from "@/components/site/Reviews";
import FAQ from "@/components/site/FAQ";
import Booking from "@/components/site/Booking";
import Footer from "@/components/site/Footer";
import PageMeta from "@/components/site/PageMeta";
import { useI18n } from "@/lib/i18n";

export default function Home() {
  const { t } = useI18n();

  return (
    <div>
      <PageMeta title={t("seo.home.title")} description={t("seo.home.description")} />
      <div className="relative z-[1] bg-[#f9f9f9]">
        <Header />
        <main>
          <Hero />
          <Services />
          <Clinic />
          <Team />
          <Insights />
          <Reviews />
          <FAQ />
          <Booking />
        </main>
      </div>
      <Footer />
    </div>
  );
}