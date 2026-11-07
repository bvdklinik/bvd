import {
  alignerCloseUp,
  bridgeOnBase,
  procedureCloseUp,
  shadeGuideInUse,
  smileCloseUp,
  xrayConsultation,
} from "@/components/site/clinicPhotos";
import { servicesTr } from "./servicesData.tr";

/**
 * Every treatment the clinic offers, in the order the services page presents
 * them. This list is the single source for the services page cards, the offers
 * slider on the home page and the treatments column in the footer. The Turkish
 * set lives in servicesData.tr.js with the same slugs and imagery.
 *
 * `tagline` is the short line the slider shows; `summary` is the longer
 * paragraph on the services page card. Imagery comes from the clinic's own set.
 */
const servicesEn = [
  {
    slug: "dental-veneers",
    title: "Dental Veneers",
    tagline: "Ceramic shells shaped and shaded for your own smile.",
    summary:
      "Custom-made ceramic veneers that reshape chipped, stained or uneven front teeth. Each one is matched to the shade and translucency of your own smile before it is bonded.",
    img: shadeGuideInUse,
    alt: "Patient matching a tooth shade with the clinic's shade guide",
  },
  {
    slug: "dental-crowns",
    title: "Dental Crowns",
    tagline: "Durable caps for the appearance of damaged teeth.",
    summary:
      "A crown restores the shape, size and strength of a tooth that is broken, worn down or heavily treated, and is colour-matched so it sits naturally among the teeth around it.",
    img: bridgeOnBase,
    alt: "Ceramic crowns prepared on a dental model",
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    tagline: "A stable, natural-looking replacement for a missing tooth.",
    summary:
      "A durable, natural-looking replacement for a missing tooth. The implant integrates with the jawbone to give the new tooth a stable foundation and lasting oral health.",
    img: xrayConsultation,
    alt: "Dental X-ray taken during an implant consultation",
  },
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    tagline: "Brighten your smile with effective whitening treatments.",
    summary:
      "Professional whitening that brightens your smile safely, using proven bleaching agents and a shade check before and after treatment so the result stays even.",
    img: smileCloseUp,
    alt: "Close-up of an even, brightened smile",
  },
  {
    slug: "invisalign",
    title: "Invisalign",
    tagline: "Clear aligners that straighten teeth without fixed braces.",
    summary:
      "A series of clear, removable aligners that move the teeth into line in small planned steps. The whole sequence is mapped on a digital scan and reviewed in the clinic as it goes.",
    img: alignerCloseUp,
    alt: "Close-up of clear aligners made for teeth straightening",
  },
  {
    slug: "teeth-extraction",
    title: "Teeth Extraction",
    tagline: "Gentle removal when a tooth cannot be saved.",
    summary:
      "Removing a tooth that can no longer be repaired or maintained — planned from an X-ray, carried out under local anaesthetic, with the options for the gap discussed first.",
    img: procedureCloseUp,
    alt: "Dentist carrying out a tooth extraction",
  },
];

const BY_LANGUAGE = { tr: servicesTr, en: servicesEn };

export const getServices = (lang) => BY_LANGUAGE[lang] ?? BY_LANGUAGE.tr;