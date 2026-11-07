import { doctorPortraits } from "./clinicPhotos";
import { teamTr } from "./teamData.tr";

/**
 * The clinic's four dentists, in the order the clinic supplies them: their
 * names, their own areas of work, and one frame each from doctorPortraits. The
 * Turkish set lives in teamData.tr.js and keeps the same order and portraits.
 */
const teamEn = [
  {
    name: "Dt. Doğukan Ege Atalar",
    specialty: "Orthodontist",
    focus: "Orthodontics",
    bio: "Works in orthodontics; tooth movement and bite assessment are handled in this area of the clinic.",
    img: doctorPortraits[0],
  },
  {
    name: "Dt. Ömer Faruk Girici",
    specialty: "Dentist",
    focus: "Root canal treatment · whitening · prosthetics",
    bio: "Works with root canal treatment, tooth whitening and prosthetic restorations.",
    img: doctorPortraits[1],
  },
  {
    name: "Dt. Volkan Turan",
    specialty: "Dentist",
    focus: "Surgery · implants · prosthetics",
    bio: "Works with surgical procedures, implants and prosthetic restorations.",
    img: doctorPortraits[2],
  },
  {
    name: "Dt. Nevin Zerdeci",
    specialty: "Dentist",
    focus: "Root canal treatment · whitening",
    bio: "Works with root canal treatment and tooth whitening.",
    img: doctorPortraits[3],
  },
];

const BY_LANGUAGE = { tr: teamTr, en: teamEn };

export const getTeam = (lang) => BY_LANGUAGE[lang] ?? BY_LANGUAGE.tr;