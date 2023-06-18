import {
  DEFAULT_SKILL_BLUE,
  DEFAULT_SKILL_GREEN,
  DEFAULT_SKILL_ORANGE,
  DEFAULT_SKILL_PURPLE,
  DEFAULT_SKILL_RED,
  DEFAULT_SKYPE,
  DEFAULT_TWITTER,
  DEFAULT_LINKEDIN,
  DEFAULT_CREEDLY,
  DEFAULT_SKILL_YELLOW,
} from "../functions/ColorFunction";
import { ReactComponent as MyGit } from "../svg/git.svg";
import { ReactComponent as MyMail } from "../svg/mail.svg";
import { ReactComponent as MyPhone } from "../svg/phone.svg";
import { ReactComponent as MyLinkedin } from "../svg/linkedin.svg";
import { ReactComponent as MyCreedly } from "../svg/creedly.svg";
import { ReactComponent as MyTwitter } from "../svg/twitter.svg";
import { ReactComponent as MySkype } from "../svg/skype.svg";
import { ReactComponent as MyResume } from "../svg/resume.svg";


export const contacts = [
  {
    data: "bocchino.daniele@gmail.com",
    name: "Email Address",
    href: `mailto:bocchino.daniele@gmail.com`,
    svg: MyMail,
    options: { color: DEFAULT_SKILL_RED },
  },
  {
    data: "(+353) 894188158",
    name: "Phone Number",
    href: `tel:+353894188158`,
    svg: MyPhone,
    options: { color: DEFAULT_SKILL_GREEN },
  },
  {
    data: "Daniele Bocchino",
    name: "Linkedin",
    link: "https://www.linkedin.com/in/gbolahanadeleke/",
    href: `https://www.linkedin.com/in/gbolahanadeleke/`,
    svg: MyLinkedin,
    options: { stroke: true, color: DEFAULT_LINKEDIN },
  },
  {
    name: "GitHub",
    data: "adelekeofficail",
    link: "https://github.com/adelekeofficail",
    href: `https://github.com/adelekeofficail`,
    svg: MyGit,
    options: { stroke: true, color: DEFAULT_SKILL_PURPLE },
  },
  {
    name: "Twitter",
    data: "Gbolahan Adeleke",
    link: "https://twitter.com/mayor_marseille",
    href: `https://twitter.com/mayor_marseille`,
    svg: MyTwitter,
    options: { stroke: true, color: DEFAULT_TWITTER },
  },

  {
    name: "Credly",
    data: "Gbolahan Adeleke",
    link: "https://www.credly.com/users/gbolahan-adeleke-badges/badges",
    href: `https://www.credly.com/users/gbolahan-adeleke-badges/badges`,
    svg: MyCreedly,
    options: { stroke: true, color: DEFAULT_CREEDLY },
  },
  
  {
    name: "Skype",
    data: "Gbolahan Adeleke",
    link: "https://join.skype.com/invite/NP2n5Rq2lU28",
    href: `https://join.skype.com/invite/NP2n5Rq2lU28`,
    svg: MySkype,
    options: { stroke: true, color: DEFAULT_SKYPE },
  },
  {
    name: "Resume",
    data: "Gbolahan Adeleke",
    link: "https://gbolahanadeleke.github.io/CV_GbolahanAdeleke.pdf",
    href: `https://gbolahanadeleke.github.io/CV_GbolahanAdeleke.pdf`,
    svg: MyResume,
    options: { stroke: true, color: DEFAULT_SKILL_YELLOW },
  },
];
