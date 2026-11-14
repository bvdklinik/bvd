/**
 * Interface copy that appears in more than one place: navigation, actions, field
 * labels, form feedback and page metadata. Longer, section-specific copy sits
 * beside the component that renders it; treatment and service content lives in
 * the language variants of their own data files.
 */
export const ui = {
  /* — Navigation — */
  "nav.home": { tr: "Anasayfa", en: "Home" },
  "nav.clinic": { tr: "Kliniğimiz", en: "Our Clinic" },
  "nav.services": { tr: "Hizmetler", en: "Services" },
  "nav.about": { tr: "Hakkımızda", en: "About" },
  "nav.contact": { tr: "İletişim", en: "Contact" },
  "nav.bookOnline": { tr: "Online randevu", en: "Book online" },
  "nav.openMenu": { tr: "Menüyü aç", en: "Open menu" },
  "nav.closeMenu": { tr: "Menüyü kapat", en: "Close menu" },
  "nav.homeLabel": { tr: "BVD Clinic — anasayfa", en: "BVD Clinic — home" },
  "nav.language": { tr: "Dil seçimi", en: "Language" },
  "nav.breadcrumb": { tr: "Sayfa yolu", en: "Breadcrumb" },

  /* — Actions — */
  "cta.bookAppointment": { tr: "Randevu Al", en: "Book Appointment" },
  "cta.bookAnAppointment": { tr: "Randevu Alın", en: "Book an Appointment" },
  "cta.contactUs": { tr: "Bize ulaşın", en: "Contact us" },
  "cta.allServices": { tr: "Tüm hizmetler", en: "All services" },
  "cta.allTreatments": { tr: "Tüm tedaviler", en: "All treatments" },
  "cta.aboutUs": { tr: "Hakkımızda", en: "About us" },
  "cta.callClinic": { tr: "Kliniği arayın", en: "Call the clinic" },
  "cta.call": { tr: "Ara", en: "Call" },
  "cta.getDirections": { tr: "Yol tarifi alın", en: "Get directions" },
  "cta.viewService": { tr: "Hizmeti inceleyin", en: "View service" },
  "cta.googleListing": { tr: "Google kaydını açın", en: "Open the Google listing" },

  /* — Small caps labels — */
  "label.services": { tr: "Hizmetler", en: "Services" },
  "label.booking": { tr: "Randevu", en: "Booking" },
  "label.faq": { tr: "SSS", en: "FAQ" },
  "label.step": { tr: "Adım", en: "Step" },
  "label.worthKnowing": { tr: "Bilinmesi iyi olur", en: "Worth knowing" },
  "label.talkToUs": { tr: "Bize ulaşın", en: "Talk to us" },
  "label.phone": { tr: "Telefon", en: "Phone" },
  "label.email": { tr: "E-posta", en: "E-mail" },
  "label.whatsapp": { tr: "WhatsApp", en: "WhatsApp" },
  "label.address": { tr: "Adres", en: "Address" },
  "label.messageClinic": { tr: "Kliniğe mesaj gönderin", en: "Message the clinic" },
  "label.preferToTalk": { tr: "Konuşmayı mı tercih edersiniz?", en: "Prefer to talk?" },
  "label.unsureAfterwards": {
    tr: "Sonrasında bir konuda emin değil misiniz?",
    en: "Unsure about anything afterwards?",
  },

  /* — Forms — */
  "form.fullName": { tr: "Ad soyad", en: "Full name" },
  "form.email": { tr: "E-posta adresi", en: "E-mail address" },
  "form.phone": { tr: "Telefon numarası", en: "Phone number" },
  "form.date": { tr: "Tercih ettiğiniz tarih", en: "Preferred date" },
  "form.time": { tr: "Tercih ettiğiniz saat", en: "Preferred time" },
  "form.message": { tr: "Mesaj", en: "Message" },
  "form.subject": { tr: "Başvuru konusu", en: "Reason for enquiry" },
  "form.send": { tr: "Mesaj gönder", en: "Send message" },
  "form.sending": { tr: "Gönderiliyor", en: "Sending" },
  "form.bookingSending": { tr: "Gönderiliyor…", en: "Sending…" },
  "form.book": { tr: "Randevu Al", en: "Book Appointment" },
  "form.privacy": {
    tr: "Bilgileriniz yalnızca başvurunuzu yanıtlamak için kullanılır, klinikte saklanır ve başka kimseyle paylaşılmaz.",
    en: "We use your details only to answer your enquiry. They are stored with the clinic and never shared with anyone else.",
  },
  "form.sendAnother": { tr: "Yeni bir mesaj gönderin", en: "Send another message" },

  /* — Form subjects (the stored values stay English) — */
  "subject.general": { tr: "Genel bilgi talebi", en: "General enquiry" },
  "subject.appointment": { tr: "Randevu ve konsültasyon", en: "Appointment & consultation" },
  "subject.implants": { tr: "Diş implantları", en: "Dental implants" },
  "subject.orthodontics": { tr: "Ortodonti ve şeffaf plaklar", en: "Orthodontics & clear aligners" },
  "subject.aesthetic": {
    tr: "Estetik diş hekimliği ve gülüş tasarımı",
    en: "Aesthetic dentistry & smile design",
  },
  "subject.other": { tr: "Başka bir konu", en: "Something else" },

  /* — Validation — */
  "error.name": { tr: "Lütfen adınızı yazın.", en: "Please tell us your name." },
  "error.email": { tr: "Lütfen geçerli bir e-posta adresi girin.", en: "Please enter a valid e-mail address." },
  "error.phone": {
    tr: "Telefon numarası doğru görünmüyor, lütfen kontrol edin.",
    en: "That phone number does not look right — please check it.",
  },
  "error.subject": { tr: "Lütfen başvuru konusunu seçin.", en: "Please choose a reason for your enquiry." },
  "error.message": {
    tr: "Lütfen kısa bir mesaj yazın (en az 10 karakter).",
    en: "Please write a short message (at least 10 characters).",
  },

  /* — Submission feedback — */
  "booking.sent": {
    tr: "Teşekkürler, talebiniz kliniğe ulaştı. Randevunuzu e-posta ile onaylayacağız.",
    en: "Thank you — your request is with the clinic. We will confirm your appointment by e-mail.",
  },
  "booking.error": {
    tr: "Talebinizi şu anda gönderemedik. Lütfen tekrar deneyin veya bizi arayın:",
    en: "We could not send your request just now. Please try again, or call us on",
  },
  "contact.sent": {
    tr: "Teşekkürler, mesajınız ekibimize ulaştı. Şu adrese yanıt vereceğiz:",
    en: "Thank you — your message has been received and is with our team. We will reply to",
  },
  "contact.sentUrgent": { tr: "Acil bir durumsa bizi arayın:", en: "If it is urgent, call us on" },
  "contact.error": {
    tr: "Mesajınızı şu anda gönderemedik, kliniğe ulaşmadı. Lütfen tekrar deneyin veya bizi arayın:",
    en: "We could not send your message just now, so it has not reached the clinic. Please try again, or call us on",
  },

  /* — Footer — */
  "footer.quickLinks": { tr: "Hızlı bağlantılar", en: "Quick links" },
  "footer.treatments": { tr: "Tedaviler", en: "Treatments" },
  "footer.contact": { tr: "İletişim", en: "Contact" },
  "footer.designedBy": { tr: "Tasarım", en: "Designed by" },
  "footer.blurb": {
    tr: "Güngören, İstanbul'da genel, estetik ve implant diş hekimliği hizmeti veren bir diş kliniği. Online randevu alın veya konsültasyon için kliniği arayın.",
    en: "A dental clinic in Güngören, İstanbul, covering general, cosmetic and implant dentistry. Book online, or call the clinic to arrange a consultation.",
  },

  /* — Page metadata — */
  "seo.home.title": { tr: "BVD Clinic — Güngören, İstanbul'da diş kliniği", en: "BVD Clinic — Dental Clinic in Güngören, İstanbul" },
  "seo.home.description": {
    tr: "Güngören, İstanbul'da bir diş kliniği: laminalar, kronlar, diş implantları, diş beyazlatma, Invisalign şeffaf plaklar ve diş çekimi. Online randevu alın.",
    en: "A dental clinic in Güngören, İstanbul offering veneers, crowns, dental implants, teeth whitening, Invisalign clear aligners and extractions. Book an appointment online.",
  },
  "seo.about.title": {
    tr: "BVD Clinic Hakkında — Güngören, İstanbul'da diş kliniği",
    en: "About BVD Clinic — a dental clinic in Güngören, İstanbul",
  },
  "seo.about.description": {
    tr: "Güngören, İstanbul'daki diş kliniğimiz nasıl çalışıyor: tedavi nasıl planlanır, uyduğumuz standartlar ve her randevunun arkasındaki diş hekimleri.",
    en: "How our dental clinic in Güngören, İstanbul works: how treatment is planned, the standards we keep, and the dentists behind every appointment.",
  },
  "seo.contact.title": { tr: "BVD Clinic İletişim — Güngören, İstanbul", en: "Contact BVD Clinic — Güngören, İstanbul" },
  "seo.contact.description": {
    tr: "Güngören, İstanbul'daki diş kliniğimizi arayın, WhatsApp'tan yazın veya e-posta gönderin. Adres, yol tarifi, harita ve ekibimize ulaşan başvuru formu.",
    en: "Call, message on WhatsApp or e-mail our dental clinic in Güngören, İstanbul. Address, directions, map and an enquiry form that reaches our team.",
  },
  "seo.services.title": {
    tr: "Güngören, İstanbul'da diş tedavileri — BVD Clinic",
    en: "Dental treatments in Güngören, İstanbul — BVD Clinic",
  },
  "seo.services.description": {
    tr: "Güngören, İstanbul'da diş laminaları, kronlar, implantlar, diş beyazlatma, Invisalign şeffaf plaklar ve diş çekimi. Her tedavinin kapsamı, kimlere uygun olduğu ve konsültasyon randevusu.",
    en: "Dental veneers, crowns, implants, teeth whitening, Invisalign clear aligners and extractions in Güngören, İstanbul. What each treatment involves, who it suits, and how to book a consultation.",
  },
};