import React from "react";
import { ReactComponent as HomeIcon } from "../Assets/NavIcons/home-outline.svg";
import { ReactComponent as SkillsIcon } from "../Assets/NavIcons/skills.svg";
import { ReactComponent as WorkIcon } from "../Assets/NavIcons/resume.svg";
import { ReactComponent as BlogIcon } from "../Assets/NavIcons/blog.svg";
import { ReactComponent as MailIcon } from "../Assets/NavIcons/mail.svg";
import { ReactComponent as InstaIcon } from "../Assets/Social/instagram.svg";
import { ReactComponent as LinkedinIcon } from "../Assets/Social/linkedin.svg";
import { ReactComponent as GithubIcon } from "../Assets/Social/github.svg";
import { ReactComponent as TwitterIcon } from "../Assets/Social/twitter.svg";
import ReactLogo from "../Assets/ReactLogo.png";
import JavaScriptLogo from "../Assets/JavaScript-logo.png";
import SassLogo from "../Assets/sass.png";
import TypeScriptLogo from "../Assets/typescript.png";
import VueLogo from "../Assets/Vue.png";
import TailwindLogo from "../Assets/tailwind.png";
import MuiLogo from "../Assets/mui.png";
import Her1 from "../Assets/you/img1.webp";
import Her2 from "../Assets/you/img2.webp";
import Her3 from "../Assets/you/img3.webp";
import Her4 from "../Assets/you/img4.webp";
import Her5 from "../Assets/you/img5.webp";
import Her6 from "../Assets/you/img6.webp";
import Her7 from "../Assets/you/img7.webp";
import Her8 from "../Assets/you/img8.webp";
import Her9 from "../Assets/you/img9.webp";
import Her10 from "../Assets/you/img10.webp";
import Her11 from "../Assets/you/img11.webp";
import My1 from "../Assets/me/img1.webp";
import My2 from "../Assets/me/img2.webp";
import My3 from "../Assets/me/img3.webp";
import My4 from "../Assets/me/img4.webp";
import My5 from "../Assets/me/img5.webp";
import My6 from "../Assets/me/img6.webp";
import My7 from "../Assets/me/img7.webp";
import My8 from "../Assets/me/img8.webp";
import My9 from "../Assets/me/img9.webp";
import My10 from "../Assets/me/img10.webp";
import Us1 from "../Assets/us/img1.webp";
import Us3 from "../Assets/us/img2.webp";
import Us2 from "../Assets/us/img3.webp";

export const NavbarItems = [
  { name: "Home", toLink: "/", icon: <HomeIcon />, id: "home" },
  { name: "Skills", toLink: "/skills", icon: <SkillsIcon />, id: "skills" },
  { name: "Projects", toLink: "/projects", icon: <WorkIcon />, id: "work" },
  { name: "Blogs", toLink: "/blog", icon: <BlogIcon /> },
  { name: "Contact Me", toLink: "/blog", icon: <MailIcon /> },
];

export const HomepageSocial = [
  {
    svg: <LinkedinIcon />,
    toLink: "https://www.linkedin.com/in/vivek-joon-628946104/",
    svgClass: "mb-[1px]",
  },
  { svg: <GithubIcon />, toLink: "https://github.com/vivekjoon", svgClass: "" },
  { svg: <InstaIcon />, toLink: "https://www.instagram.com/joonvivek/?hl=en" },
  { svg: <TwitterIcon />, toLink: "https://twitter.com/vivekjoon1234" },
];

export const skills = [
  {
    name: "ReactJs",
    logo: ReactLogo,
    class: "top-[6%] left-[30%] w-[200px] h-[200px]",
    duration: "15s",
    rating: "✭✭✭✫✫",
  },
  {
    name: "JavaScript",
    logo: JavaScriptLogo,
    class: "top-[48%] left-[24%] w-[200px] h-[200px] ",
    duration: "8s",
    rating: "✭✭✭✫✫",
  },
  {
    name: "Sass",
    logo: SassLogo,
    class: "top-[6%] right-[30%] w-[200px] h-[200px]",
    duration: "12s",
    rating: "✭✭✭✫✫",
  },
  {
    name: "TypeScript",
    logo: TypeScriptLogo,
    class: "top-[68%] right-[40%] w-[200px] h-[200px]",
    duration: "9s",
    rating: "✭✭✭✫✫",
  },
  {
    name: "VueJs",
    logo: VueLogo,
    class: "top-[43%] right-[22%] w-[200px] h-[200px] ",
    duration: "10s",
    rating: "✭✭✭✫✫",
  },
  {
    name: "Tailwind",
    logo: TailwindLogo,
    class: "top-[20%] right-[10%] w-[200px] h-[200px] ",
    duration: "10s",
    rating: "✭✭✭✫✫",
  },
  {
    name: "MUI",
    logo: MuiLogo,
    class: "top-[20%] left-[15%] w-[200px] h-[200px]",
    duration: "9s",
    rating: "✭✭✭✫✫",
  },
];

export const HerImgs = [
  { src: Her1 },
  { src: Her2 },
  { src: Her3 },
  { src: Her4 },
  { src: Her5 },
  { src: Her10 },
  { src: Her6 },
  { src: Her7 },
  { src: Her8 },
  { src: Her9 },
  { src: Her11 },
];

export const myImgs = [
  { src: My1 },
  { src: My2 },
  { src: My3 },
  { src: My4 },
  { src: My5 },
  { src: My6 },
  { src: My7 },
  { src: My8 },
  { src: My9 },
  { src: My10 },
];

export const OurImgs = [{ src: Us1 }, { src: Us2 }, { src: Us3 }];

export const Works = [
  {
    name: "CKLENS",
    description:
      "CloudKeeper from TO THE NEW, is a cloud spend optimization solution that guarantees to cut down your AWS bills by 5-15%. With CloudKeeper, we have helped 200+ of our customers optimize their AWS spend with a guaranteed reduction in their AWS bills. No lock-ins. Savings from Day 1. RI pricing for On-demand usage.",
  },
  {
    name: "CK-Analytics",
    description:
      "Analytical dashboard for inventory management of the instances we are buying for our clients.",
  },
  {
    name: "CK-Auto",
    description:
      "The complexities of AWS RI management are real, but we are here to make it effortless for you. CloudKeeper Auto addresses all the challenges of AWS RI management at no extra cost. It makes the process hassle-free by automating RI buying and selling as per infrastructure needs while maximizing your savings on compute and RDS instances",
  },
  {
    name: "HR Chauffeur",
    description:
      "HR-Chauffeur is a premier provider of luxury transportation services, serving clients throughout perth, Australia. A team of experienced and professional chauffeurs is dedicated to providing you with a safe, comfortable, and reliable travel experience.",
  },
  {
    name: "Cloudonomics",
    description:
      "White labeled product of Cklens. Multiple modules offering for clients (i.e Cklens, CK-Auto, CK-Analytics).",
  },
  {
    name: "Unicaps",
    description:
      "Unicaps, an ultimate solution for seamless and secure financial transactions in the digital age. Revolutionizing the way you handle payments, our app combines cutting-edge technology with user-friendly design to provide you with a hassle-free and efficient payment experience.",
  },
  {
    name: "MAVI - Sales And Booking",
    description: "this i fikwlmncvlndvipkmflkv szdk  fvnpofsk fkvn lkfvn ipkfmnv lef diknvsk ",
  },
];
