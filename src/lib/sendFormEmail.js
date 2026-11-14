/**
 * Website form submissions are e-mailed to the clinic through FormSubmit
 * (https://formsubmit.co), a free form-to-email relay, so the static site needs
 * no backend of its own.
 *
 * One-time activation: the first submission makes FormSubmit send an
 * "Activate Form" e-mail to the address below. Until that link is clicked,
 * submissions are not delivered and the forms show their error message.
 * After activating, FormSubmit also e-mails a random alias string; it can
 * replace the address here so the Gmail address is not visible in the site.
 */
const FORM_EMAIL_TO = "bvdklinik@gmail.com";
const ENDPOINT = `https://formsubmit.co/ajax/${FORM_EMAIL_TO}`;

/**
 * @param {object}   options
 * @param {string}   options.subject  e-mail subject line
 * @param {string}   options.replyTo  visitor's e-mail, so "Reply" answers them
 * @param {object}   options.fields   label → value pairs shown in the e-mail
 */
export async function sendFormEmail({ subject, replyTo, fields }) {
  const body = { _subject: subject, _template: "table", _captcha: "false" };
  if (replyTo) body._replyto = replyTo;
  for (const [label, value] of Object.entries(fields)) {
    const text = typeof value === "string" ? value.trim() : value;
    if (text) body[label] = text;
  }

  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(body),
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok || String(data.success) !== "true") {
    throw new Error(data.message || `Form e-mail failed (${response.status})`);
  }
}
