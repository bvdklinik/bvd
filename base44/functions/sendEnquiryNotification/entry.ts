import { createClientFromRequest } from 'npm:@base44/sdk@0.8.52';

/**
 * Puts a website form submission in the clinic's own mailbox. Both forms that
 * call this are open to visitors who are not signed in, so the recipient is
 * fixed here and never taken from the request.
 */
const CLINIC_EMAIL = "info@bvdklinik.com";

export default async function (req: Request): Promise<Response> {
  try {
    const payload = await req.json();
    const text = (value, max) => (typeof value === "string" ? value.trim().slice(0, max) : "");

    const isBooking = payload?.source === "booking";
    const name = text(payload?.name, 120);
    const email = text(payload?.email, 160);
    const phone = text(payload?.phone, 40);
    const preferredDate = text(payload?.preferred_date, 40);
    const preferredTime = text(payload?.preferred_time, 40);
    const subject = text(payload?.subject, 80);
    const message = text(payload?.message, 2000);

    if (!name || !email) {
      return Response.json({ error: "A name and an e-mail address are needed." }, { status: 400 });
    }

    const lines = isBooking
      ? [
          "New appointment request from the website.",
          "",
          `Name: ${name}`,
          `E-mail: ${email}`,
          phone ? `Phone: ${phone}` : "",
          preferredDate ? `Preferred date: ${preferredDate}` : "",
          preferredTime ? `Preferred time: ${preferredTime}` : "",
          `Treatment: ${text(payload?.treatment, 80) || "Not sure"}`,
          "",
          text(payload?.notes, 1000),
        ]
      : [
          "New enquiry from the website.",
          "",
          `Name: ${name}`,
          `E-mail: ${email}`,
          phone ? `Phone: ${phone}` : "",
          subject ? `Subject: ${subject}` : "",
          "",
          message,
        ];

    const base44 = createClientFromRequest(req);
    await base44.asServiceRole.integrations.Core.SendEmail({
      to: CLINIC_EMAIL,
      from_name: "BVD Clinic website",
      subject: isBooking ? `Appointment request — ${name}` : `Website enquiry — ${subject || name}`,
      body: lines.filter(Boolean).join("\n"),
    });

    return Response.json({ ok: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}