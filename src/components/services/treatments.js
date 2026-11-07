import {
  alignerCloseUp,
  alignerInHand,
  alignerInsertion,
  bridgeOnBase,
  bridgeOnBlack,
  ceramicCrowns,
  checkUpInProgress,
  digitalScanning,
  implantDetail,
  patientInChair,
  procedureCloseUp,
  restorationDetail,
  retainerInGlove,
  shadeGuideInUse,
  shadeMatching,
  shadeMatchSmile,
  smileCloseUp,
  smileInMirror,
  smileOutdoors,
  smilePortraitWarm,
  smileWide,
  treatmentInProgress,
  veneerShells,
  whiteningTray,
  xrayConsultation,
} from "@/components/site/clinicPhotos";
import { treatmentsTr } from "./treatments.tr";

/**
 * The treatment pages in English, keyed by the slug used in the services page
 * cards ("/services/dental-veneers" and so on). Every page carries its own
 * content: what the treatment is, who it suits, how it runs, recovery and its
 * own FAQ. The Turkish set lives in treatments.tr.js with the same slugs.
 *
 * The wording is deliberately careful — figures are typical ranges, not
 * promises, and every plan is confirmed after an examination.
 */
const treatmentsEn = {
  "dental-veneers": {
    slug: "dental-veneers",
    name: "Dental veneers",
    metaTitle: "Dental veneers in İstanbul — BVD Clinic",
    metaDescription:
      "Custom-made porcelain veneers in Güngören, İstanbul: how veneers are planned, fitted and cared for, who they suit, and how to book a consultation.",
    hero: {
      label: "Treatment",
      heading: "Dental veneers",
      intro:
        "Thin, custom-made shells bonded to the front of your teeth, shaped to change their colour, size and outline — planned around your own smile before anything is made.",
      img: shadeMatchSmile,
      alt: "Patient having a tooth shade matched in the clinic before treatment",
      imageClass: "object-[50%_30%]",
    },
    facts: [
      { label: "Appointments", value: "2–3 visits" },
      { label: "Chair time", value: "60–90 minutes per visit" },
      { label: "Longevity", value: "Often 10–15 years, with care" },
    ],
    highlights: [
      {
        label: "Design first",
        text: "The proposed shape is previewed on your own teeth before a single tooth is prepared.",
      },
      {
        label: "Minimal preparation",
        text: "Most cases need only a thin layer of enamel refined — a few need none at all.",
      },
      {
        label: "Repairable later",
        text: "One chipped veneer can usually be remade on its own rather than as a full set.",
      },
    ],
    overview: {
      label: "What it is",
      heading: "A tailored shell on the front of the tooth",
      paragraphs: [
        "A veneer is a thin layer of porcelain or layered composite that is bonded to the front surface of a tooth. It changes what you see when you smile: the shade, the shape, the length and the way the front teeth line up together.",
        "We use veneers mainly on the teeth that show — usually the front six. Planning starts with photographs, a digital scan and a mock-up, so the proposed shape can be tried on your own teeth before anything is made. The shade is chosen with you in daylight, and if whitening is part of the plan it happens first: porcelain keeps its colour afterwards, so the surrounding teeth are matched to the final shade, not the other way round.",
      ],
      img: shadeGuideInUse,
      alt: "Patient matching a tooth shade with the clinic's shade guide",
      imageClass: "object-[50%_28%]",
      caption: "Shade selection in daylight, before anything is made.",
    },
    benefits: {
      label: "Why patients choose it",
      heading: "What veneers can change",
      intro:
        "Veneers treat the appearance of the front teeth rather than the way they bite, so they are usually planned alongside, not instead of, general dental care.",
      items: [
        {
          title: "A shape designed for your face",
          text: "Length, width and edge shape are drawn around your smile rather than taken from a standard template — you see the design before it is made.",
        },
        {
          title: "Very little tooth removed",
          text: "Many cases need only a thin layer of enamel refined, and some need none at all. The amount is agreed with you in advance.",
        },
        {
          title: "Colour that stays put",
          text: "Porcelain holds its shade well. Coffee, tea, red wine and tobacco affect natural teeth and composite more than they affect glazed ceramic.",
        },
        {
          title: "More than a colour change",
          text: "As well as covering staining, veneers can close small gaps, rebuild chipped edges and even out teeth that are short or slightly rotated.",
        },
        {
          title: "Repairable later",
          text: "If one veneer chips or comes loose, a single unit can usually be remade or rebonded without redoing the rest of the smile.",
        },
      ],
    },
    suitability: {
      label: "Who it suits",
      heading: "Veneers are worth considering when",
      intro:
        "The assessment is as much about the tooth underneath as it is about the appearance on top.",
      items: [
        "Front teeth that are discoloured in a way whitening cannot correct, such as after root canal treatment or from staining inside the tooth",
        "Chipped, worn or uneven edges that keep returning after composite repairs",
        "Small gaps between the front teeth, or teeth that are mildly rotated or out of line",
        "Old composite fillings on visible teeth that have stained and no longer match",
        "Teeth that need a change of shape rather than a change of position",
      ],
      note:
        "Gum disease is treated first, and if you grind or clench your teeth we make a night guard before the veneers are fitted — otherwise the new edges take the wear.",
      img: patientInChair,
      alt: "Patient in the treatment chair during a cosmetic dental appointment",
      imageClass: "object-[50%_30%]",
    },
    process: {
      label: "The process",
      heading: "How the treatment runs",
      intro:
        "Most veneer cases take two to three visits spread over a few weeks. Nothing is prepared until the design is agreed.",
      steps: [
        {
          title: "Consultation, photographs and scan",
          text: "We examine the teeth and gums, take photographs and a digital scan, and talk through what you would like to change. You leave with a written plan and an idea of the cost.",
        },
        {
          title: "Design and preview",
          text: "The proposed shape is built as a wax-up or digital design and tried in as a mock-up on your teeth. Adjustments happen here, while they are still free.",
        },
        {
          title: "Preparation day",
          text: "Under local anaesthetic if needed, a thin layer of enamel is refined and the final scan or impression is taken. Temporary veneers are fitted if the teeth were prepared.",
        },
        {
          title: "Fitting",
          text: "Each veneer is tried in, checked against your bite and the neighbouring teeth, then bonded with a light-cured cement. Most people eat normally the same evening.",
        },
        {
          title: "Review",
          text: "We check the bite and the gum margins a few weeks later, and show you how to clean along the veneer edges at home.",
        },
      ],
    },
    aftercare: {
      label: "Recovery & aftercare",
      heading: "Looking after new veneers",
      intro:
        "There is no real recovery period: the care that matters is the first week, and then the habits that follow.",
      items: [
        {
          title: "The first days",
          text: "Mild sensitivity to hot and cold is common while the cement settles, and usually fades within a week or two. A soft diet helps if a gum margin feels tender.",
        },
        {
          title: "Eating",
          text: "Eat normally, but do not use the front teeth as tools — biting nails, opening packets and chewing ice are what chip porcelain.",
        },
        {
          title: "Cleaning",
          text: "Brush twice a day and clean along the veneer edges with floss or interdental brushes. That join with the gum is where problems start if it is missed.",
        },
        {
          title: "Grinding",
          text: "If you clench or grind at night, wear the night guard we make for you. It protects the veneer edges from the load they were not designed for.",
        },
        {
          title: "Reviews",
          text: "Check-ups every six to twelve months. A chipped or loose veneer can usually be repaired if you come in early rather than waiting.",
        },
      ],
      img: smileCloseUp,
      alt: "Close-up of an even, natural-looking smile after treatment",
      imageClass: "object-[50%_30%]",
    },
    gallery: {
      label: "Results",
      heading: "The finished smile, and the material behind it",
      intro:
        "What the treatment looks like when it is finished, and the porcelain that makes it — each shell shaped and shaded as a single unit, then bonded in place.",
      items: [
        {
          img: smilePortraitWarm,
          alt: "Patient with a naturally even, brightened smile",
          caption: "A natural finish, matched tooth by tooth",
        },
        {
          img: smileWide,
          alt: "Close-up of an even row of front teeth",
          caption: "Edges evened across the front teeth",
        },
        {
          img: veneerShells,
          alt: "Porcelain veneer shells laid out before bonding",
          caption: "Porcelain shells, shaded before bonding",
        },
      ],
    },
    cta: {
      heading: "Ready to see the shape first?",
      text: "Start with a consultation, photographs and a design preview. You approve the look before any tooth is prepared.",
    },
    faqs: [
      {
        q: "Do veneers ruin your teeth?",
        a: "Where a tooth is prepared, a thin layer of enamel is removed and enamel does not grow back, so the decision is a long-term one. Many cases need minimal or no preparation — we tell you which yours is, and you decide before anything is done. A prepared tooth always needs a veneer or crown afterwards to look and feel complete.",
      },
      {
        q: "Porcelain or composite veneers?",
        a: "Porcelain is made in a laboratory: it is stronger, holds its colour better and usually takes two visits. Composite is built directly on the tooth, often in a single appointment, costs less, and can stain or chip sooner — but it is easy to repair or add to. Both are reasonable, and we will say which suits your case.",
      },
      {
        q: "Will they look like my other teeth?",
        a: "That is the aim. The shade, surface texture and the translucency of the edges are matched to your natural teeth, and the shape is designed for your face rather than copied from a catalogue. Nobody should be able to point at which teeth are the veneers.",
      },
      {
        q: "Can I whiten veneers later?",
        a: "No. Whitening gel works on natural tooth structure, not on porcelain or composite, so veneers keep their shade. That is why whitening, if it is part of the plan, is done before the shade is chosen for the veneers. Natural teeth around them can still be whitened later if needed.",
      },
      {
        q: "How long do veneers last?",
        a: "It varies with the bite, your habits and how well you clean along the edges. Ten to fifteen years is a common range, and many last longer. If one fails, it is usually replaced on its own rather than as a full set.",
      },
      {
        q: "Is the treatment painful?",
        a: "Preparation is done under local anaesthetic, so it is not painful while it is happening. Afterwards the teeth and gums can feel tender or sensitive for a few days, especially with temporary veneers in place. Bonding the final veneers is usually comfortable.",
      },
    ],
  },

  "dental-crowns": {
    slug: "dental-crowns",
    name: "Dental crowns",
    metaTitle: "Dental crowns in İstanbul — BVD Clinic",
    metaDescription:
      "Dental crowns in Güngören, İstanbul: when a crown is needed, how the tooth is prepared and scanned, the materials we use, aftercare and treatment-specific answers.",
    hero: {
      label: "Treatment",
      heading: "Dental crowns",
      intro:
        "A crown covers the whole visible part of a tooth, rebuilding a tooth that is cracked, worn or heavily repaired — and matched to the colour of the teeth around it.",
      img: bridgeOnBlack,
      alt: "Ceramic crowns photographed against a dark background",
      imageClass: "object-[50%_50%]",
    },
    facts: [
      { label: "Appointments", value: "2 visits" },
      { label: "Chair time", value: "60–90 minutes per visit" },
      { label: "Longevity", value: "Often 10–15 years, with care" },
    ],
    highlights: [
      {
        label: "Protects what is left",
        text: "The crown wraps the tooth and holds the remaining walls and cusps together.",
      },
      {
        label: "Two visits",
        text: "Shaped and scanned at the first appointment, fitted and cemented at the second.",
      },
      {
        label: "Scanned, not moulded",
        text: "The crown is designed from a digital scan of the tooth and checked against your bite.",
      },
    ],
    overview: {
      label: "What it is",
      heading: "A full-coverage restoration",
      paragraphs: [
        "A crown is a cap that covers the whole of the tooth above the gum. It is used when there is no longer enough sound tooth left for a filling to hold — a cracked cusp, a large old filling, a tooth worn down by grinding, or a tooth that has had root canal treatment.",
        "Crowns are made in ceramics such as zirconia or lithium disilicate, or in a metal-ceramic combination. We scan the prepared tooth rather than taking a tray impression, design the crown digitally and send it to a laboratory to be milled or pressed. The shape, contacts and bite are checked against the tooth opposite, and the shade is matched to the neighbouring teeth in daylight.",
      ],
      img: restorationDetail,
      alt: "Dentist checking a restored front tooth with a dental mirror",
      imageClass: "object-[50%_35%]",
      caption: "The margin along the gum is where a crown is judged.",
    },
    benefits: {
      label: "Why patients choose it",
      heading: "What a crown does that a filling cannot",
      intro:
        "A crown is a bigger treatment than a filling, so it is worth being clear about what it is protecting.",
      items: [
        {
          title: "Holds a weakened tooth together",
          text: "A filling sits inside the tooth; a crown wraps around it, holding the remaining walls and cusps together instead of letting them flex and crack further.",
        },
        {
          title: "Restores the biting surface",
          text: "Chewing comfort and the way the tooth meets the one opposite can be rebuilt, rather than leaving a short or hollowed tooth behind.",
        },
        {
          title: "Protects a root-treated tooth",
          text: "After root canal treatment a tooth is more brittle and often needs a crown to take the load of everyday chewing.",
        },
        {
          title: "Matched appearance",
          text: "Modern ceramics can be matched closely in shade and translucency, which matters most on the teeth that show when you talk.",
        },
        {
          title: "Can carry a bridge or denture",
          text: "Crowns can also act as the supports for a bridge, or as the anchors for a removable partial denture.",
        },
      ],
    },
    suitability: {
      label: "Who it suits",
      heading: "A crown is usually the right choice when",
      intro:
        "We compare a crown against a filling, an onlay or an extraction, and explain the trade-offs for your tooth specifically.",
      items: [
        "A tooth with a crack, or a cusp that has broken off",
        "A tooth where more than about half the width has already been replaced with filling material",
        "A tooth that has had root canal treatment",
        "Teeth worn down by grinding or acid erosion, where the height needs rebuilding",
        "A tooth that is heavily discoloured and cannot be improved by whitening",
        "Teeth needed as supports for a fixed bridge",
      ],
      note:
        "If the decay or the crack has reached the nerve, root canal treatment comes first — a crown over an untreated problem would only hide it.",
      img: digitalScanning,
      alt: "Intraoral scanner screen showing a digital model of a tooth",
      imageClass: "object-[50%_35%]",
    },
    process: {
      label: "The process",
      heading: "How the treatment runs",
      intro:
        "Two visits, usually one to two weeks apart, with a temporary crown in between so the tooth is never left exposed.",
      steps: [
        {
          title: "Examination and X-ray",
          text: "We check the nerve, look for cracks and decay under old fillings, and confirm whether the tooth is strong enough to keep.",
        },
        {
          title: "Preparation",
          text: "Under local anaesthetic the tooth is reshaped so the crown can fit over it without looking bulky, and a digital scan is taken.",
        },
        {
          title: "Shade and design",
          text: "The shade is chosen before the anaesthetic wears off, and the crown is designed from the scan for the laboratory to make.",
        },
        {
          title: "The temporary crown",
          text: "A temporary protects the tooth and keeps the space while the crown is made — typically one to two weeks.",
        },
        {
          title: "Fitting and cementation",
          text: "The finished crown is tried in, the bite and the contacts with neighbouring teeth are checked, and then it is cemented.",
        },
      ],
    },
    aftercare: {
      label: "Recovery & aftercare",
      heading: "The days after a crown",
      intro:
        "Most people are surprised how little there is to it — but the join between crown and tooth deserves attention for life.",
      items: [
        {
          title: "While still numb",
          text: "Do not eat until the local anaesthetic has worn off. It is easy to bite your cheek or tongue without noticing.",
        },
        {
          title: "The first week",
          text: "Mild tenderness while biting is common as the ligament around the tooth settles. If it feels high when you bite, come back — a small adjustment is quick.",
        },
        {
          title: "Cleaning the margin",
          text: "The edge where the crown meets the tooth is the place decay starts again. Clean it daily with floss or an interdental brush, not just with the toothbrush.",
        },
        {
          title: "Temporary crowns",
          text: "Avoid sticky or hard food on a temporary crown, and floss gently beside it. If it comes off, keep it and call us — do not try to glue it back yourself.",
        },
        {
          title: "Reviews",
          text: "Check-ups every six to twelve months, with an X-ray of the margin from time to time to confirm the seal is holding.",
        },
      ],
      img: checkUpInProgress,
      alt: "Dentist checking a patient's teeth during a review appointment",
      imageClass: "object-[50%_30%]",
    },
    gallery: {
      label: "Results",
      heading: "From the laboratory to the chair",
      intro:
        "A crown is judged by how little it stands out — the shade, the surface texture and the line along the gum. These are the pieces that decide it.",
      items: [
        {
          img: bridgeOnBase,
          alt: "Ceramic crowns prepared on a dental model",
          caption: "Ceramic crowns on the model, before fitting",
        },
        {
          img: treatmentInProgress,
          alt: "Dentist carrying out treatment on a patient in the clinic",
          caption: "Fitted, checked against the bite, then cemented",
        },
        {
          img: ceramicCrowns,
          alt: "Two ceramic crowns photographed in studio light",
          caption: "Shade and texture, matched to the neighbouring teeth",
        },
      ],
    },
    cta: {
      heading: "Not sure whether your tooth needs a crown?",
      text: "An examination and an X-ray are enough to say whether a filling can still hold, or whether the tooth needs covering.",
    },
    faqs: [
      {
        q: "Will a crown look like my own tooth?",
        a: "That is the goal. Ceramics are matched in shade and translucency, and the shape is built to match the tooth on the other side. Front teeth are made from more translucent ceramic than back teeth, where strength matters more than appearance.",
      },
      {
        q: "Does getting a crown hurt?",
        a: "The preparation is done under local anaesthetic, so the appointment itself is not painful. Afterwards the gum margin can feel tender for a few days and the tooth can feel sensitive to cold. A tooth that had root canal treatment sometimes feels pressure for a week or two while the bite settles.",
      },
      {
        q: "Do I need root canal treatment first?",
        a: "Only if the nerve is inflamed, infected or already dead. That is decided from the examination and the X-ray. If the nerve is healthy, preparing the tooth for a crown does not normally require root canal treatment.",
      },
      {
        q: "How long do crowns last?",
        a: "Many crowns are still in service after ten to fifteen years. How long yours lasts depends on how much healthy tooth remains, your bite and grinding habits, and how well you clean the margin where the crown meets the tooth.",
      },
      {
        q: "Crown or a big filling?",
        a: "A filling is the right answer for a small or moderate cavity. A crown is usually better once the tooth is cracked, a cusp has broken, more than about half the width has been filled, or the tooth has been root treated. We will show you the X-ray and explain which side of that line your tooth is on.",
      },
      {
        q: "What if a crown comes loose?",
        a: "It happens, and it is not an emergency unless the tooth is painful. Keep the crown, avoid chewing on that side, and call us. We clean the tooth, check for decay underneath and re-cement it — often the same day.",
      },
    ],
  },

  "dental-implants": {
    slug: "dental-implants",
    name: "Dental implants",
    metaTitle: "Dental implants in İstanbul — BVD Clinic",
    metaDescription:
      "Dental implants in Güngören, İstanbul: how an implant is planned with 3D imaging, placed and restored, who is suitable, healing and aftercare, and implant FAQs.",
    hero: {
      label: "Treatment",
      heading: "Dental implants",
      intro:
        "A titanium root placed into the jawbone to carry a new tooth — a long-term way to replace a missing tooth without touching the teeth on either side.",
      img: xrayConsultation,
      alt: "Dental X-ray taken during an implant consultation",
      imageClass: "object-[50%_35%]",
    },
    facts: [
      { label: "Appointments", value: "2–4 visits" },
      { label: "Healing", value: "3–6 months before the final tooth" },
      { label: "Longevity", value: "Many last decades, with care" },
    ],
    highlights: [
      {
        label: "Planned in 3D",
        text: "Position, angle and depth are decided on a scan before any surgery takes place.",
      },
      {
        label: "Neighbours untouched",
        text: "The teeth either side of the gap are left exactly as they are.",
      },
      {
        label: "Cleaned like a tooth",
        text: "Titanium in the bone, ceramic above it, brushed and flossed as normal.",
      },
    ],
    overview: {
      label: "What it is",
      heading: "A replacement root, not just a replacement tooth",
      paragraphs: [
        "An implant is a small titanium screw that is placed into the jawbone where the root of a missing tooth used to be. Over the following months the bone grows around it and holds it firm — a process called osseointegration. Once it is stable, an abutment and a crown are fitted on top, and the tooth is used like any other.",
        "Because the implant sits in the bone rather than leaning on the neighbours, the teeth either side are left untouched. Planning is done on a 3D scan so the position, angle and depth are decided before surgery, and a printed surgical guide can hold that position on the day. If the bone is too thin — often the case when a tooth has been missing for years — grafting may be needed, either at the same time or as a separate step.",
      ],
      img: treatmentInProgress,
      alt: "Dentist carrying out treatment on a patient in the clinic",
      imageClass: "object-[50%_35%]",
      caption: "Placement is carried out under local anaesthetic.",
    },
    benefits: {
      label: "Why patients choose it",
      heading: "What an implant changes",
      intro:
        "There is more than one way to replace a missing tooth, and the right answer depends on the teeth around it.",
      items: [
        {
          title: "The neighbouring teeth stay untouched",
          text: "A bridge has to be supported by the teeth either side, which means preparing them. An implant carries its own tooth, so those teeth need no treatment at all.",
        },
        {
          title: "One tooth, one implant",
          text: "A single missing tooth can be replaced on its own, rather than cutting a three-unit bridge to fill one gap.",
        },
        {
          title: "Helps preserve the jawbone",
          text: "Bone that no longer carries a tooth tends to shrink over the years. An implant keeps that area of bone working, which helps the shape of the face and gum.",
        },
        {
          title: "Anchors a loose denture",
          text: "Two implants can hold a lower denture with clips, so it stops moving when you speak or eat.",
        },
        {
          title: "Used like a natural tooth",
          text: "Chewing and speaking feel familiar, and cleaning is the same as for your other teeth.",
        },
      ],
    },
    suitability: {
      label: "Who it suits",
      heading: "Who we assess for implants",
      intro:
        "Almost everyone with a missing tooth can be considered, but some medical and lifestyle factors change the plan — or the success rate.",
      items: [
        "A single missing tooth, or several gaps, including a full arch",
        "A tooth that cannot be saved and has to be removed",
        "Healthy gums, or gum disease that has been treated and stabilised",
        "Enough bone to hold an implant — grafting can add volume where it is thin",
        "Stable medical conditions, including well-controlled diabetes",
      ],
      note:
        "We ask about smoking, previous radiotherapy to the jaw, and medicines that affect bone (such as some treatments for osteoporosis). These do not always rule implants out, but they are part of the assessment and can change healing times. Uncontrolled diabetes and heavy smoking both reduce success rates noticeably.",
      img: procedureCloseUp,
      alt: "Close-up of a dental procedure being carried out",
      imageClass: "object-[50%_40%]",
    },
    process: {
      label: "The process",
      heading: "How the treatment runs",
      intro:
        "Implant treatment is spread over months rather than days. The bone needs that time, and nothing is rushed.",
      steps: [
        {
          title: "Assessment and 3D imaging",
          text: "We examine the gums, take a 3D scan of the jaw, review your medical history and discuss what you want the tooth to do.",
        },
        {
          title: "Planning",
          text: "The implant position is planned on the scan, and a surgical guide is printed when it will help. Grafting, if needed, is planned here too.",
        },
        {
          title: "Placement",
          text: "Usually under local anaesthetic, and usually 30–60 minutes for a single implant. The gum is closed with a few stitches and a temporary tooth can often be worn.",
        },
        {
          title: "Healing",
          text: "Three to six months while the bone bonds to the implant. You may wear a temporary or a denture, depending on where the gap is.",
        },
        {
          title: "The final tooth",
          text: "Once the implant is firm, we scan or take an impression, fit the abutment and then the crown — either screwed or cemented into place.",
        },
      ],
    },
    aftercare: {
      label: "Recovery & aftercare",
      heading: "The first days, and the long term",
      intro:
        "The surgical recovery is usually undramatic. The care afterwards is what keeps the implant for years.",
      items: [
        {
          title: "First 24 hours",
          text: "No vigorous rinsing or spitting, no smoking, and no hot food or drink. An ice pack on the outside of the cheek, in short bursts, helps limit swelling.",
        },
        {
          title: "The first week",
          text: "Swelling and bruising are normal and peak around day two or three. Soft food, and any rinses or antibiotics we prescribe, carry you through it. Ordinary painkillers are usually enough.",
        },
        {
          title: "Cleaning",
          text: "Once healed, an implant is cleaned like a tooth — plus interdental brushes around the neck of the implant, which is exactly where trouble starts if it is missed.",
        },
        {
          title: "Risks to watch for",
          text: "Infection around the implant, called peri-implantitis, is the main long-term risk. Red, bleeding gums and a bad taste should bring you in rather than wait.",
        },
        {
          title: "Reviews",
          text: "Healing checks after surgery, then yearly reviews with an X-ray of the implant. If you grind your teeth, wear a night guard.",
        },
      ],
      img: smilePortraitWarm,
      alt: "Patient smiling after implant treatment was completed",
      imageClass: "object-[50%_30%]",
    },
    gallery: {
      label: "Results",
      heading: "The tooth you stop noticing",
      intro:
        "An implant is meant to disappear into the smile, and to be maintained exactly like the teeth around it. Here is what the finished work looks like.",
      items: [
        {
          img: bridgeOnBase,
          alt: "A replacement tooth carried on a dental model",
          caption: "The replacement tooth, carried by its own implant",
        },
        {
          img: smileOutdoors,
          alt: "Patient smiling outdoors after implant treatment",
          caption: "A finish that reads as your own smile",
        },
        {
          img: implantDetail,
          alt: "Macro view of a titanium dental implant",
          caption: "Titanium thread detail, macro view",
        },
      ],
    },
    cta: {
      heading: "Missing a tooth and weighing up the options?",
      text: "A 3D scan and an examination let us compare an implant, a bridge and a removable option for your mouth specifically.",
    },
    faqs: [
      {
        q: "Does implant placement hurt?",
        a: "The placement is done under local anaesthetic, so the appointment itself is not painful. Afterwards, most people manage with ordinary painkillers for a few days. Swelling and bruising around the area are common and settle within a week.",
      },
      {
        q: "How long does the whole treatment take?",
        a: "Usually three to six months from placement to the final tooth, because the bone needs to bond to the implant first. If grafting is needed, the timeline can extend by several months. In some cases, where bone quality allows, a temporary tooth can be fitted sooner.",
      },
      {
        q: "Am I suitable for an implant?",
        a: "It depends on the bone available, the health of your gums and your general health. Heavy smoking and uncontrolled diabetes both lower the success rate noticeably, and certain bone medicines and previous radiotherapy to the jaw need to be discussed before anything is planned. All of it is reviewed before we recommend treatment.",
      },
      {
        q: "Implant or a bridge?",
        a: "A bridge is quicker, does not involve surgery and usually costs less, but the teeth either side have to be prepared and cleaned carefully underneath. An implant leaves those teeth untouched, is cleaned like a natural tooth, but takes longer and needs a surgical step. We will compare both for your case, including the costs.",
      },
      {
        q: "Do implants fail?",
        a: "They can. Early failure is uncommon and usually relates to healing or infection in the first months; later problems are mostly linked to hygiene, smoking and uncontrolled grinding. Implants have good long-term success rates, but they are not guaranteed, and careful cleaning is what keeps them.",
      },
      {
        q: "Can implants help a full denture?",
        a: "Yes. Two implants can hold a lower denture with clips, and more implants can support a fixed full-arch bridge. The result is a denture that stays put while you speak and eat, rather than relying on suction or adhesive.",
      },
    ],
  },

  "teeth-whitening": {
    slug: "teeth-whitening",
    name: "Teeth whitening",
    metaTitle: "Teeth whitening in İstanbul — BVD Clinic",
    metaDescription:
      "Professional teeth whitening in Güngören, İstanbul: in-clinic sessions and custom take-home trays, what whitening can and cannot change, sensitivity and aftercare.",
    hero: {
      label: "Treatment",
      heading: "Teeth whitening",
      intro:
        "Professional whitening with a peroxide gel — applied in the clinic in a single visit, or at home in custom trays made from a scan of your own teeth.",
      img: smileOutdoors,
      alt: "Close-up of a bright, even smile after whitening",
      imageClass: "object-[50%_30%]",
    },
    facts: [
      { label: "In-clinic session", value: "60–90 minutes" },
      { label: "Take-home trays", value: "10–14 evenings" },
      { label: "Result", value: "Months to a few years, depending on habits" },
    ],
    highlights: [
      {
        label: "Nothing removed",
        text: "The gel changes the shade of the tooth; nothing is reshaped, removed or added.",
      },
      {
        label: "In the chair or at home",
        text: "One session in the clinic, or trays made from a scan of your own teeth.",
      },
      {
        label: "Measured, not guessed",
        text: "The shade is photographed before and after, so progress is recorded rather than remembered.",
      },
    ],
    overview: {
      label: "What it is",
      heading: "Oxygen, not abrasion",
      paragraphs: [
        "Whitening gel contains hydrogen or carbamide peroxide. It passes through the enamel and breaks down the coloured pigments inside the tooth, which is why the change is deeper than anything a toothpaste can do. The structure of the enamel is not removed or reshaped — the shade changes, the tooth does not.",
        "There are two routes, and they are often combined. In the clinic, the gums are protected with a barrier and a stronger gel is applied in short cycles over roughly an hour. At home, we make trays from a scan or impression of your own teeth, and you fill them with a lower-strength gel for a set number of evenings. Custom trays cover the teeth evenly and keep the gel off the gums, which is where shop-bought strips tend to cause irritation.",
        "One thing to know before you start: whitening only works on natural tooth structure. Crowns, veneers, fillings and composite bonding keep their original shade, so a whitened tooth can end up lighter than the restoration beside it. That is planned for in advance, and any mismatched filling can be replaced afterwards.",
      ],
      img: shadeMatching,
      alt: "Dentist recording a tooth shade before whitening",
      imageClass: "object-[50%_32%]",
      caption: "The starting shade, recorded against the guide.",
    },
    benefits: {
      label: "Why patients choose it",
      heading: "What professional whitening offers",
      intro:
        "Whitening is the least invasive way to change the colour of your teeth — no tooth is prepared and nothing is added.",
      items: [
        {
          title: "Visible in one visit",
          text: "An in-clinic session lifts the shade noticeably on the same day. Take-home trays work more gradually over one to two weeks.",
        },
        {
          title: "Trays that fit your teeth",
          text: "Custom trays hold the gel against the teeth and away from the gums, which gives a more even result and less irritation than one-size strips.",
        },
        {
          title: "Checked before it starts",
          text: "We examine first. Whitening over an untreated cavity or a cracked tooth can make it ache, so those are dealt with before the gel goes on.",
        },
        {
          title: "The shade is recorded",
          text: "We photograph and record the starting shade, so progress is measured rather than remembered.",
        },
        {
          title: "Straightforward to maintain",
          text: "Keep the trays. A single evening every few months, or after a stretch of coffee and red wine, keeps the shade where you want it.",
        },
      ],
    },
    suitability: {
      label: "Who it suits",
      heading: "Whitening works best on",
      intro:
        "The type of stain matters more than how dark the teeth look — some respond well, and some barely move.",
      items: [
        "Teeth that have yellowed gradually with age",
        "Staining from coffee, tea, red wine, cola and tobacco",
        "A single darker tooth where the cause is on the surface",
        "Healthy teeth with no untreated decay, cracks or exposed roots",
        "Anyone wanting a lighter shade before veneers or crowns are matched to it",
      ],
      note:
        "Grey staining from inside the tooth is different. It often follows an injury or root canal treatment, can be resistant to whitening gel, and may need internal bleaching or a veneer instead. We also usually postpone elective whitening during pregnancy and breastfeeding, and do not whiten children or teenagers whose teeth are still developing.",
      img: shadeMatchSmile,
      alt: "Patient smiling while a shade is checked against their teeth",
      imageClass: "object-[50%_30%]",
    },
    process: {
      label: "The process",
      heading: "How the treatment runs",
      intro:
        "Whitening always starts with an examination, because the colour of a tooth is the last thing to treat, not the first.",
      steps: [
        {
          title: "Check-up and clean",
          text: "An examination, and an X-ray if anything needs checking. Then a scale and polish: surface stain and calculus come off first, so the gel reaches clean enamel.",
        },
        {
          title: "Shade record",
          text: "We photograph the teeth and record the shade against a guide, so you can see the change afterwards rather than trying to remember it.",
        },
        {
          title: "In-clinic session",
          text: "The gums are isolated with a protective barrier, then the whitening gel is applied in two or three cycles over about an hour, with the shade checked between them.",
        },
        {
          title: "Or take-home trays",
          text: "We scan or take an impression and make trays that fit your teeth exactly. You fill them at home for a set number of evenings — lower strength, slower, and easier to control.",
        },
        {
          title: "Top-ups later",
          text: "Keep the trays. A single evening every few months, or after a heavy run of staining food and drink, holds the shade without another full course.",
        },
      ],
    },
    aftercare: {
      label: "Recovery & aftercare",
      heading: "Sensitivity, and keeping the shade",
      intro:
        "There is no downtime, but the first day or two deserve a little care — and the result needs maintaining.",
      items: [
        {
          title: "Sensitivity",
          text: "Short, sharp twinges to cold are common, and usually noticeable in the first 24–48 hours. A desensitising gel in the trays helps. If it is severe or constant, stop and call us.",
        },
        {
          title: "The first day or two",
          text: "Tea, coffee, red wine, cola, curries, berries and tobacco all stain most easily while the teeth are settling. Many people keep to lighter food and drink for a day or two — it costs nothing, even if the evidence for how much it matters is limited.",
        },
        {
          title: "Restorations do not change",
          text: "Crowns, veneers, fillings and bonding keep their original shade. If one now stands out against the lighter teeth, it can be replaced or polished to match — usually a separate, small appointment.",
        },
        {
          title: "Keeping the shade",
          text: "Whitening is not permanent. The result typically lasts months to a couple of years depending on what you drink, whether you smoke, and your enamel. Top-up trays are the practical way to stay where you are.",
        },
        {
          title: "Reviews",
         text: "Routine check-ups and a hygienist clean keep surface stain from building up again, and confirm the teeth and gums are still healthy.",
        },
      ],
      img: smileInMirror,
      alt: "Patient checking her brighter smile in a hand mirror",
      imageClass: "object-[50%_45%]",
    },
    gallery: {
      label: "Results",
      heading: "Shade, measured rather than promised",
      intro:
        "Whitening is judged against the shade you started with, which is why it is recorded before the first session — and again at the end.",
      items: [
        {
          img: smileCloseUp,
          alt: "Close-up of an even, brightened smile",
          caption: "An even result across the whole smile",
        },
        {
          img: smilePortraitWarm,
          alt: "Patient with a bright, natural smile",
          caption: "Shade checked against the guide, before and after",
        },
        {
          img: whiteningTray,
          alt: "Custom whitening tray and gel beside a shade guide",
          caption: "Custom trays and gel, made from a scan",
        },
      ],
    },
    cta: {
      heading: "Thinking about whitening before a big day?",
      text: "A check-up and a shade record come first. From there we can say whether in-clinic, take-home or a combination suits you.",
    },
    faqs: [
      {
        q: "Does whitening damage enamel?",
        a: "Used under supervision on healthy teeth, peroxide whitening does not remove or damage enamel. The main side effect is temporary sensitivity, which is why we examine the teeth first and stop if anything is wrong. Whitening does not work on decay — a cavity has to be treated before, not after.",
      },
      {
        q: "Why did my teeth not get whiter?",
        a: "Usually because of what is causing the colour. Crowns, veneers, fillings and composite bonding do not respond to the gel at all. Grey staining from inside the tooth, typically after an injury or root canal treatment, can be resistant as well and may need internal bleaching or a veneer. If the shade barely moved, we will tell you why and what would work instead.",
      },
      {
        q: "How white will my teeth get?",
        a: "Nobody can promise a particular shade. How much a tooth lightens depends on the type and depth of the stain and on your own enamel. We record the shade before and after so the change is measurable, and the trays stay with you so you can top up whenever you like.",
      },
      {
        q: "Will it hurt?",
        a: "Whitening is not painful, but sensitivity is the most common side effect — short twinges, mostly in the first day or two, and sometimes a dull ache in a tooth that has a hidden crack or a large old filling. Desensitising gel in the trays and spacing the sessions out usually solve it. Severe or one-sided pain is a reason to stop and come in.",
      },
      {
        q: "How long does the result last?",
        a: "It varies a lot. Months to a couple of years is typical, and it depends on how much coffee, tea, red wine and tobacco you consume, and on the natural colour of your enamel. Top-up evenings with your trays keep the shade steady without starting again.",
      },
      {
        q: "Can I whiten during pregnancy?",
        a: "There is no evidence that whitening gel harms a pregnancy, but as a precaution many clinicians — including ours — prefer to postpone elective whitening until after pregnancy and breastfeeding. Urgent dental treatment is a different matter and is managed separately.",
      },
    ],
  },

  invisalign: {
    slug: "invisalign",
    name: "Invisalign",
    metaTitle: "Invisalign clear aligners in İstanbul — BVD Clinic",
    metaDescription:
      "Invisalign clear aligners in Güngören, İstanbul: how aligner treatment is planned from a digital scan, how long it takes, daily wear time, reviews and retainers.",
    hero: {
      label: "Treatment",
      heading: "Invisalign",
      intro:
        "A series of clear, removable aligners that move the teeth into line in small planned steps — mapped in advance on a digital scan, and worn without brackets or wires.",
      img: alignerCloseUp,
      alt: "Close-up of clear aligners made for teeth straightening",
      imageClass: "object-[50%_45%]",
    },
    facts: [
      { label: "Aligner changes", value: "Every 1–2 weeks at home" },
      { label: "Wear time", value: "20–22 hours a day" },
      { label: "Typical course", value: "6–18 months, case by case" },
    ],
    highlights: [
      {
        label: "Planned on a scan",
        text: "The movement is mapped tooth by tooth before the first aligner is made.",
      },
      {
        label: "Removable",
        text: "They come out to eat, drink and clean — nothing is fixed to the teeth.",
      },
      {
        label: "Reviewed as you go",
        text: "We check the fit and the tracking every six to eight weeks.",
      },
    ],
    overview: {
      label: "What it is",
      heading: "Straightening in small, planned steps",
      paragraphs: [
        "Aligners are thin, transparent trays made to fit over your teeth. Each one holds them a fraction of a millimetre closer to the planned position, and a series of them moves the teeth gradually over months. They lift out for eating, drinking and cleaning, so there are no brackets or wires to work around.",
        "Treatment starts with a scan rather than a tray impression, which lets the whole sequence be planned digitally: which teeth move, in what order, and how much space is needed. You see that plan before it starts. Small tooth-coloured attachments can be bonded to some teeth to give the aligner something to grip, and where the movement is more involved, elastics or a short stage of fixed braces may be part of the plan.",
      ],
      img: digitalScanning,
      alt: "Intraoral scanner screen showing a digital model of a tooth",
      imageClass: "object-[50%_35%]",
      caption: "The scan becomes the plan: every step is mapped first.",
    },
    benefits: {
      label: "Why patients choose it",
      heading: "What aligner treatment offers",
      intro:
        "Aligners straighten teeth rather than solving every bite problem, so the examination decides as much as the preference does.",
      items: [
        {
          title: "Barely visible",
          text: "The trays are clear and sit against the teeth, so they are far less noticeable than metal or ceramic brackets at a conversational distance.",
        },
        {
          title: "Nothing fixed to the teeth",
          text: "They lift out for meals and for brushing, which keeps eating and cleaning close to normal for the whole course.",
        },
        {
          title: "A plan you see first",
          text: "The scan and planning stage shows where the teeth are expected to finish, so the aim is agreed rather than assumed.",
        },
        {
          title: "Fewer, shorter visits",
          text: "Aligner changes happen at home, so appointments are mainly reviews — usually every six to eight weeks, rather than a monthly adjustment.",
        },
        {
          title: "Straightforward to keep clean",
          text: "There are no wires to thread floss under. The teeth are brushed normally and the aligners are rinsed and cleaned separately.",
        },
      ],
    },
    suitability: {
      label: "Who it suits",
      heading: "Aligners work best on",
      intro:
        "The honest position: aligners are very good for many cases and unsuitable for some. The examination decides which.",
      items: [
        "Mild to moderate crowding or spacing in the front teeth",
        "Teeth that have drifted slightly after earlier orthodontic treatment",
        "A single tooth that has rotated or moved out of line",
        "Adults and older teenagers whose adult teeth and second molars have come through",
        "Healthy teeth, gums and enamel, with no untreated decay",
      ],
      note:
        "Aligners need commitment — they only move teeth while they are being worn, so the plan assumes 20 to 22 hours a day. Complex bite problems, badly rotated teeth and cases that need substantial expansion often suit fixed braces better, and we will say so if that is your case. A retainer is worn afterwards to hold the result.",
      img: alignerInsertion,
      alt: "Patient removing a clear dental aligner",
      imageClass: "object-[50%_35%]",
    },
    process: {
      label: "The process",
      heading: "How the treatment runs",
      intro:
        "Nothing is made until the plan has been seen and agreed, and the fit of the first aligner has been checked.",
      steps: [
        {
          title: "Examination and scan",
          text: "We examine the teeth and gums, take photographs and an X-ray where it is needed, and scan both arches digitally.",
        },
        {
          title: "The plan",
          text: "The movement is planned in sequence and shown to you — which teeth move, how far, and over how long — with the cost confirmed before anything is made.",
        },
        {
          title: "Fitting the first aligners",
          text: "The first set is fitted and checked, with tooth-coloured attachments bonded where the plan needs them. You leave with the next sets and your wearing instructions.",
        },
        {
          title: "Changing at home, reviewed in the clinic",
          text: "You move to the next aligner every one to two weeks, and come in every six to eight weeks so the fit and the tracking can be checked.",
        },
        {
          title: "Retainers",
          text: "When the course finishes, retainers are made to hold the new positions — worn full-time at first, then at night, long term.",
        },
      ],
    },
    aftercare: {
      label: "Wearing them",
      heading: "What aligner treatment asks of you",
      intro:
        "There is no recovery period. The result depends on wear time, and on keeping the aligners and the teeth clean.",
      items: [
        {
          title: "Wear time",
          text: "Twenty to twenty-two hours a day, taken out only to eat, to drink anything other than cool water, and to brush and floss. Days missed are days added to the course.",
        },
        {
          title: "The first days of a new set",
          text: "A day or two of pressure and tenderness as the teeth begin to move, and a slight lisp while the tongue adjusts to the tray. Both settle as the set is worn.",
        },
        {
          title: "Cleaning",
          text: "Rinse and brush the aligners with cool water and a soft brush — never hot water, which distorts them — and brush and floss before they go back in.",
        },
        {
          title: "Eating and drinking",
          text: "Take them out for all food, and for anything other than cool water. Hot drinks warp them, and anything sugary held against the teeth under a tray is a cavity risk.",
        },
        {
          title: "Reviews and retainers",
          text: "Keep the review appointments — an aligner that stops tracking is caught early and corrected cheaply. After the course, wear the retainers as instructed, because without them the teeth drift back.",
        },
      ],
      img: alignerInHand,
      alt: "Clear dental aligner held in a gloved hand",
      imageClass: "object-[50%_40%]",
    },
    gallery: {
      label: "Aligners in the hand",
      heading: "Clear trays, made for your own teeth",
      intro:
        "What the aligners look like outside the mouth, and what the finished alignment is meant to feel like.",
      items: [
        {
          img: retainerInGlove,
          alt: "Retainer held in a gloved hand",
          caption: "Retainers hold the result afterwards",
        },
        {
          img: alignerInsertion,
          alt: "Patient taking out a clear aligner",
          caption: "Out for meals, in for the rest of the day",
        },
        {
          img: smilePortraitWarm,
          alt: "Patient with a naturally even smile",
          caption: "Teeth brought into line, without brackets",
        },
      ],
    },
    cta: {
      heading: "Wondering whether aligners would work for you?",
      text: "An examination and a scan are enough to say whether aligners suit your case, what it would involve and how long it would run.",
    },
    faqs: [
      {
        q: "How long does Invisalign take?",
        a: "Most courses run six to eighteen months, and it depends on how far the teeth have to move and how reliably the aligners are worn. Minor alignment can finish in a few months; larger movements take longer. The estimate is given after the scan, and reviewed as treatment goes on.",
      },
      {
        q: "Does it hurt?",
        a: "The trays themselves do not hurt. Each new set brings a day or two of pressure and tenderness as the teeth begin to move, which most people find settles quickly. Sharp or one-sided pain is not expected — if it happens, come in rather than pressing on.",
      },
      {
        q: "How many hours a day do I have to wear them?",
        a: "Twenty to twenty-two. Aligners only move teeth while they are being worn, so less time in the mouth means the course takes longer or stops tracking. Leaving them out for meals, drinks and cleaning is fine; the rest of the day they stay in.",
      },
      {
        q: "Can I eat and drink normally?",
        a: "Yes, because the aligners come out. Take them out for all food and for anything other than cool water, then brush before they go back in. Hot drinks distort the plastic, and sugary drinks held under a tray against the teeth are best avoided.",
      },
      {
        q: "Will my teeth move back afterwards?",
        a: "They can, which is why retainers are part of the treatment rather than an optional extra. Retainers are made at the end of the course, worn full-time at first and then at night, and checked at your reviews. Teeth keep shifting with age regardless, so retainers are a long-term habit.",
      },
      {
        q: "Are aligners suitable for everyone?",
        a: "No. They work very well for mild to moderate crowding, spacing and relapse after earlier braces, and less well for complex bite problems, badly rotated teeth or cases needing expansion, where fixed braces usually give a better result. The examination and the scan decide it, and we will advise honestly either way.",
      },
    ],
  },

  "teeth-extraction": {
    slug: "teeth-extraction",
    name: "Teeth extraction",
    metaTitle: "Tooth extraction in İstanbul — BVD Clinic",
    metaDescription:
      "Tooth extraction in Güngören, İstanbul: when a tooth cannot be saved, how the appointment runs under local anaesthetic, healing and what can replace the tooth.",
    hero: {
      label: "Treatment",
      heading: "Teeth extraction",
      intro:
        "Removing a tooth that cannot be saved — planned from an X-ray, carried out under local anaesthetic, and recommended only once the alternatives have been explained.",
      img: procedureCloseUp,
      alt: "Dentist carrying out a tooth extraction",
      imageClass: "object-[50%_40%]",
    },
    facts: [
      { label: "Appointments", value: "Usually one visit" },
      { label: "Chair time", value: "20–45 minutes" },
      { label: "Healing", value: "Soft diet for 3–7 days" },
    ],
    highlights: [
      {
        label: "Planned from an X-ray",
        text: "The root shape and the bone around it are checked before anything is done.",
      },
      {
        label: "Fully numb",
        text: "Local anaesthetic means the tooth comes out without pain, not through it.",
      },
      {
        label: "The gap is discussed first",
        text: "If the tooth needs replacing, the options are laid out before it is removed.",
      },
    ],
    overview: {
      label: "What it is",
      heading: "The last option, not the first",
      paragraphs: [
        "An extraction is the removal of a whole tooth — root included — from its socket in the jaw. It is recommended when a tooth can no longer be repaired or maintained: decay that has reached well below the gum, a fracture running under the bone, advanced gum disease with a mobile tooth, or an infection that will not clear while the tooth stays in place.",
        "It is always weighed against keeping the tooth. Root canal treatment, a crown or a filling can often save a tooth that looks hopeless at first glance, and we will say so when that is the case. Where removal is genuinely the better option the appointment is short: the area is numbed, the tooth is loosened and lifted out, and a stitch is used only when it helps. Teeth that are broken down to the gum line, or that sit close to a nerve or the sinus, are sometimes referred to a specialist for a surgical removal — that decision is made before the appointment, not during it.",
      ],
      img: xrayConsultation,
      alt: "Dental X-ray taken during a consultation",
      imageClass: "object-[50%_35%]",
      caption: "The X-ray decides how the tooth comes out.",
    },
    benefits: {
      label: "What it settles",
      heading: "What an extraction resolves",
      intro:
        "Removing a tooth is a means to an end: it stops a problem that cannot be solved with the tooth in place.",
      items: [
        {
          title: "Pain that has a cause",
          text: "A tooth that is constantly tender or throbbing is usually inflamed, cracked or infected. Removing it takes that source away, and the relief is often immediate.",
        },
        {
          title: "An infection that keeps returning",
          text: "Where an abscess comes back because the tooth cannot be repaired, removal lets the area heal properly. Antibiotics support that; on their own they do not cure it.",
        },
        {
          title: "Protection for the neighbours",
          text: "A tooth broken below the gum, or one that has become badly mobile, traps plaque and puts the teeth beside it and the bone around them at risk.",
        },
        {
          title: "A clean starting point",
          text: "If a replacement is planned — an implant, a bridge or a denture — the site has to be sound. Where a tooth stands in the way of orthodontic treatment, removing it also makes the space the plan needs.",
        },
        {
          title: "One short appointment",
          text: "Most extractions are completed in a single visit under local anaesthetic, with no laboratory work and no temporary restoration to look after afterwards.",
        },
      ],
    },
    suitability: {
      label: "When it is needed",
      heading: "Extraction is usually considered when",
      intro:
        "The assessment is about what can be saved, and about what a replacement would involve.",
      items: [
        "Decay or a fracture reaching below the gum line, where no filling or crown can seal the tooth",
        "An abscess or infection that has not settled, or keeps returning, despite treatment",
        "A tooth that is very loose because of advanced gum disease",
        "A tooth that has already split down through the root",
        "A tooth that has to come out for orthodontic or prosthetic reasons",
        "A wisdom tooth causing repeated infection, or damage to the tooth in front of it",
      ],
      note:
        "Tell us before the appointment about blood thinners, heart conditions, previous radiotherapy to the jaw, or medicines that affect bone. These rarely prevent an extraction, but they change how it is planned and how the site is managed afterwards. Where a tooth can reasonably be saved, we will explain what that would take before recommending removal.",
      img: patientInChair,
      alt: "Patient in the treatment chair during a dental appointment",
      imageClass: "object-[50%_30%]",
    },
    process: {
      label: "The process",
      heading: "How the appointment runs",
      intro: "One visit for most teeth, with the aftercare written down before you leave.",
      steps: [
        {
          title: "Examination and X-ray",
          text: "We look at the tooth, the gum and the bone, take an X-ray, and confirm whether the tooth can be saved and how it should come out.",
        },
        {
          title: "Agreeing the plan",
          text: "The alternatives are set out, and so is the question of what fills the gap — an implant, a bridge, a denture, or nothing for now. You decide with the whole picture in front of you.",
        },
        {
          title: "Numbing the area",
          text: "Local anaesthetic is given and the numbness is checked before we start. The tooth and the gum around it are fully numb for the whole appointment.",
        },
        {
          title: "Removal",
          text: "The tooth is loosened and lifted out. A stitch is placed when it helps the gum to close, and a gauze pad is bitten on to settle the bleeding. Most take twenty to forty-five minutes.",
        },
        {
          title: "Instructions and review",
          text: "You leave with written aftercare and the number to call if anything worries you. Healing is reviewed later, along with any replacement for the tooth.",
        },
      ],
    },
    aftercare: {
      label: "Recovery & aftercare",
      heading: "The first week after an extraction",
      intro:
        "Almost everything that goes wrong afterwards is decided in the first twenty-four hours, so the instructions matter more than the appointment itself.",
      items: [
        {
          title: "The first day",
          text: "No rinsing, no spitting, no smoking and no hot food or drink. If it is still bleeding, bite firmly on the gauze pad for twenty minutes, and rest with your head raised.",
        },
        {
          title: "The clot is the point",
          text: "A blood clot forms in the socket and is what heals it. Do not poke it with a finger, a tongue or a brush, and avoid vigorous rinsing for the first day.",
        },
        {
          title: "Pain and swelling",
          text: "Ordinary painkillers are usually enough, and an ice pack on the outside of the cheek in short bursts limits swelling. Pain that gets worse from the third day, rather than better, needs to be checked.",
        },
        {
          title: "Eating and brushing",
          text: "Soft, cool food for a few days, chewing on the other side. Brush the rest of the mouth normally and keep the socket clean without scrubbing it.",
        },
        {
          title: "Reviews",
          text: "Come back for a healing check, and to decide what, if anything, replaces the tooth. Leaving a gap for years lets the neighbouring teeth drift and the bone beneath it shrink.",
        },
      ],
      img: checkUpInProgress,
      alt: "Dentist checking a patient's teeth during a review appointment",
      imageClass: "object-[50%_30%]",
    },
    gallery: {
      label: "Around the appointment",
      heading: "Planned, carried out, healed",
      intro:
        "An extraction is decided from the X-ray, carried out in the chair, and judged by how the socket settles afterwards.",
      items: [
        {
          img: treatmentInProgress,
          alt: "Dentist carrying out treatment on a patient in the clinic",
          caption: "The tooth is loosened and lifted out",
        },
        {
          img: restorationDetail,
          alt: "Dentist checking a restored front tooth with a dental mirror",
          caption: "The gap can be filled on a later visit",
        },
        {
          img: smileOutdoors,
          alt: "Patient smiling outdoors after treatment",
          caption: "Healed, and back to eating normally",
        },
      ],
    },
    cta: {
      heading: "A tooth that is troubling you?",
      text: "Come in for an examination and an X-ray. If the tooth can be saved we will tell you how, and if it cannot, we will explain what comes next.",
    },
    faqs: [
      {
        q: "Does an extraction hurt?",
        a: "Not while it is being done. The area is numbed with local anaesthetic and the numbness is checked before we start, so the tooth comes out without pain. Afterwards the socket is tender for a few days, and ordinary painkillers are usually enough.",
      },
      {
        q: "How long does healing take?",
        a: "The gum closes over the socket in one to two weeks, and the bone underneath fills in over the following months. Most people are eating normally within a week, with the first few days on softer food.",
      },
      {
        q: "What is a dry socket?",
        a: "It is the loss of the blood clot that protects the socket, leaving the bone exposed. It is painful, usually starts two to three days after the extraction, and comes with a bad taste. It needs to be seen and dressed, so call us rather than waiting for it to pass. Smoking, rinsing too hard and poking at the socket are the usual causes.",
      },
      {
        q: "Should I replace the tooth?",
        a: "Not every gap needs filling, and it depends where it is. A visible gap is usually replaced, and a back tooth that leaves the neighbours unsupported can cause drifting and bite changes over time. An implant, a bridge or a denture are the options, and we discuss them once the socket has healed.",
      },
      {
        q: "Can I eat and drink afterwards?",
        a: "Not until the numbness has worn off, because it is easy to bite your cheek or tongue without feeling it. After that, cool and soft food for a few days, chewing away from the socket, and nothing hot on the first day, since heat encourages bleeding.",
      },
      {
        q: "Is it always better to keep the tooth?",
        a: "If a tooth can be saved — with root canal treatment, a crown or a filling — that is usually the better answer, and we will say so. Removal is recommended when the tooth genuinely cannot be repaired or maintained, or when leaving it puts the teeth and bone around it at risk.",
      },
    ],
  },
};

const BY_LANGUAGE = { tr: treatmentsTr, en: treatmentsEn };

export const getTreatments = (lang) => BY_LANGUAGE[lang] ?? BY_LANGUAGE.tr;

export const treatmentList = (lang) => Object.values(getTreatments(lang));

export const getTreatment = (slug, lang) => getTreatments(lang)[slug];