/**
 * Verified clinic details — the single source every section, page and link reads
 * from. Only information the clinic has actually supplied lives here, so a change
 * lands everywhere at once (booking panel, footer, contact page, map).
 */

export const clinicName = "BVD Clinic";

/* — Contact — */
export const clinicPhone = "+90 501 606 01 23";
export const clinicPhoneHref = "tel:+905016060123";
export const clinicEmail = "info@bvdklinik.com";
export const clinicEmailHref = "mailto:info@bvdklinik.com";
export const clinicWhatsapp = "https://api.whatsapp.com/send?phone=905016060123";

/* — Where we are — */
export const clinicAddressLines = [
  "Merkez Mah. Atatürk Cad. No:52/B",
  "Güngören, İstanbul 34160",
  "Türkiye",
];
export const clinicAddressLine = clinicAddressLines.join(", ");
export const clinicDistrict = "Güngören, İstanbul";

/* — The Google profile the clinic supplied, and the map links built from it — */
export const clinicGoogleProfile = "https://share.google/QebkELqa4EeytNHXO";

/* — Opening hours, as listed on the Google profile — */
export const clinicHours = [
  { tr: "Pazartesi – Cuma", en: "Monday – Friday", time: "09:30 – 20:30" },
  { tr: "Cumartesi", en: "Saturday", time: "09:30 – 18:30" },
  { tr: "Pazar", en: "Sunday", time: null },
];

/* — Social — */
export const clinicInstagram = "https://www.instagram.com/bvdklinik";
export const clinicFacebook = "https://www.facebook.com/profile.php?id=61588465496915";
export const clinicCoordinates = { lat: 41.0223405, lng: 28.8777916 };
export const clinicDirections =
  "https://www.google.com/maps/dir/?api=1&destination=41.0223405,28.8777916";
export const clinicMapEmbed =
  "https://maps.google.com/maps?ll=41.0223405,28.8777916&q=41.0223405,28.8777916&z=16&hl=en&output=embed";