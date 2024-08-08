import { LiaLifeRing, LiaBalanceScaleSolid } from "react-icons/lia";
import { FiUsers } from "react-icons/fi";
import { TbBooks } from "react-icons/tb";

// DEUTSCH
const achievementsDeutsch = [
  {
    legalSolved: "Rechtsprobleme gelöst",
    users: "Nutzer",
    areasLaw: "Rechtsgebiete",
    lawyers: "Anwälte",
  },
];

export const countersDeutsch = [
  {
    icon: <LiaLifeRing className="text-6xl" />,
    endNumber: 650000,
    label: achievementsDeutsch[0].legalSolved,
  },
  {
    icon: <FiUsers className="text-6xl" />,
    endNumber: 500000,
    label: achievementsDeutsch[0].users,
  },
  {
    icon: <TbBooks className="text-6xl" />,
    endNumber: 60,
    label: achievementsDeutsch[0].areasLaw,
  },
  {
    icon: <LiaBalanceScaleSolid className="text-6xl" />,
    endNumber: 600,
    label: achievementsDeutsch[0].lawyers,
  },
];

// ENGLISH
const achievementsEnglish = [
  {
    legalSolved: "LEGAL PROBLEMS SOLVED",
    users: "USERS",
    areasLaw: "AREAS OF LAW",
    lawyers: "LAWYERS",
  },
];

export const counterEnglish = [
  {
    icon: <LiaLifeRing className="text-6xl" />,
    endNumber: 650000,
    label: achievementsEnglish[0].legalSolved,
  },
  {
    icon: <FiUsers className="text-6xl" />,
    endNumber: 500000,
    label: achievementsEnglish[0].users,
  },
  {
    icon: <TbBooks className="text-6xl" />,
    endNumber: 60,
    label: achievementsEnglish[0].areasLaw,
  },
  {
    icon: <LiaBalanceScaleSolid className="text-6xl" />,
    endNumber: 600,
    label: achievementsEnglish[0].lawyers,
  },
];
