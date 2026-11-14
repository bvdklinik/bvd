import { clinicWhatsappNumber } from "@/components/site/clinicInfo";

/**
 * Website forms are delivered to the clinic over WhatsApp: the submission is
 * written out as a pre-filled message to the clinic's number, and the visitor
 * presses send in WhatsApp. Nothing is stored or sent by the site itself.
 *
 * `rows` is a list of [label, value] pairs (or a plain string for a heading or
 * free text); empty values are left out.
 */
export function buildWhatsAppMessage(rows) {
  return rows
    .map((row) => {
      if (typeof row === "string") return row;
      const [label, value] = row;
      const text = typeof value === "string" ? value.trim() : value;
      return text ? `*${label}:* ${text}` : null;
    })
    .filter((line) => line !== null)
    .join("\n");
}

export function whatsAppUrl(message) {
  return `https://wa.me/${clinicWhatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Opens WhatsApp (app on phones, WhatsApp Web on desktop) with the message.
 * Must run synchronously inside the submit handler so browsers treat it as a
 * user action and do not block the new tab. Falls back to same-tab navigation
 * if the new tab is blocked.
 */
export function openWhatsApp(message) {
  const url = whatsAppUrl(message);
  const tab = window.open(url, "_blank");
  if (tab) tab.opener = null;
  else window.location.href = url;
  return url;
}
