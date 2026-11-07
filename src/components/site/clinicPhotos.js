/**
 * The clinic's own photography, uploaded from the practice. Kept in one place so
 * every page pulls the same set. The rooms are wide landscape (3:2); the staff
 * and most treatment shots are upright (2:3), all shot in the same hallway with
 * identical framing and lighting.
 */
const BASE = "https://media.base44.com/images/public/6accff1153338c42437021a1/";

/* Rooms — landscape 3:2, safe to crop wide. */
export const waitingArea = `${BASE}bbe80c984__DSC3252.jpg`;
export const treatmentRoom = `${BASE}f2e25ef36__DSC3254.jpg`;

/* Treatment, technology and patient shots — upright 2:3 unless noted. */
export const treatmentInProgress = `${BASE}4a65cac93_DSC04764.jpg`;
export const digitalScanning = `${BASE}407be10b1_DSC04592.jpg`;
export const patientInChair = `${BASE}90456d7f0_DSC04698.jpg`;
export const smileInMirror = `${BASE}fc0cbf7c4_DSC04783.jpg`;

/* Smiles — upright, plus two wider frames for banner-shaped slots. */
export const smilePortrait = `${BASE}5cd37d4b8_close-up-of-pretty-woman-with-white-teeth-2026-03-25-04-27-35-utc1.jpg`;
export const smileWide = `${BASE}6c83ca576_close-up-portrait-of-a-beautiful-woman-2026-03-25-09-50-06-utc1.jpg`;
export const alignerCloseUp = `${BASE}487c6eb76_clear-aligners-for-teeth-straightening-close-up-2026-03-09-08-14-01-utc1.jpg`;

/* Prosthetics, shading and appliances — the treatment-detail set. */
export const bridgeOnBase = `${BASE}49bc7d68b_crown1.jpg`;
export const bridgeOnBlack = `${BASE}946279ddb_crown2.jpg`;
export const shadeMatching = `${BASE}06e84666c_crown3.jpg`;
export const checkUpInProgress = `${BASE}531fc9c4a_crown4.jpg`;
export const restorationDetail = `${BASE}1472a3fd7_g-1.jpg`;
export const shadeMatchSmile = `${BASE}0591aa3b0_man-smiling-during-dental-shade-matching-in-clinic-2026-03-10-02-13-24-utc.jpg`;
export const alignerInHand = `${BASE}ab06d4c02_hand-in-black-glove-holding-clear-plastic-dental-a-2026-07-03-19-58-46-utc1.jpg`;
export const alignerInsertion = `${BASE}363023586_female-patient-takes-off-transparent-dental-tray-f-2026-06-18-16-49-07-utc1.jpg`;
export const youngPatient = `${BASE}f1f555c00_girl-on-reception-at-the-dentist-smiles-health-an-2026-03-26-05-38-30-utc1.jpg`;
export const smileOutdoors = `${BASE}fcdde80c2_smile.jpg`;

/* Staff portraits — upright 2:3, one frame per team member, in this order:
   Dt. Doğukan Ege Atalar, Dt. Ömer Faruk Girici, Dt. Volkan Turan,
   Dt. Nevin Zerdeci. The order matches the entries in teamData.js and
   teamData.tr.js. */
export const doctorPortraits = [
  `${BASE}d034d9d20_Doctor-1.jpg`,
  `${BASE}2f16ffac2_Doctor-2.jpg`,
  `${BASE}f57e406b9_Doctor-3.jpg`,
  `${BASE}9386b46ea_Doctor-4.jpg`,
];

/* Consultation, treatment and appliance photography for the About and Contact pages. */
export const xrayConsultation = `${BASE}d51178935_senior-man-receives-dental-x-ray-at-dentist-office-2026-03-20-06-15-17-utc1.jpg`;
export const procedureCloseUp = `${BASE}d910052a6_toothextraction-1.jpg`;
export const shadeGuideInUse = `${BASE}8b260f2c6_smiling-woman-holding-teeth-shade-guide-2026-03-27-01-56-07-utc1.jpg`;
export const retainerInGlove = `${BASE}e21a85b31_smiling-woman-holds-clear-plastic-dental-retainer-2026-01-06-09-57-51-utc1.jpg`;
export const alignerTrayHand = `${BASE}0b63f6563_female-patient-takes-off-transparent-dental-tray-f-2026-06-18-16-49-07-utc1.jpg`;
export const bracesPortrait = `${BASE}06eef2f2f_smiling-woman-with-braces-outdoors-2026-03-17-01-41-22-utc1.jpg`;
export const smilePortraitWarm = `${BASE}2946f7b72_smile.jpg`;
export const smileCloseUp = `${BASE}aec39bb71_smile2.jpg`;

/* Studio details made for the treatment pages — the material itself, shot in the
   same neutral editorial light as the clinic's own photography. */
export const veneerShells = `${BASE}1126cea33_generated_image.png`;
export const ceramicCrowns = `${BASE}52439bcb6_generated_image.png`;
export const implantDetail = `${BASE}f4bf037f5_generated_image.png`;
export const whiteningTray = `${BASE}22c63e691_generated_image.png`;