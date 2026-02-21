import fitness from "../images/fitness.png"
import portfolio from "../images/portfolio.png"
import Food from "../images/Food Delevery.png"
import Hotal from "../images/Hotel.png"
import {
  RiFacebookBoxFill,

  RiGithubFill,
  RiLinkedinFill,
} from "@remixicon/react";

export const navItems = [
  {
    id: 1,
    label: "Home",
    href: "#home",
  },
  {
    id: 2,
    label: "About me",
    href: "#about",
  },
  {
    id: 3,
    label: "Resume",
    href: "#resume",
  },
  {
    id: 4,
    label: "Projects",
    href: "#projects",
  },
  {
    id: 5,
    label: "Contact",
    href: "#contact",
  },
];

export const heroIcons = [
  {
    id: 1,
    icon: RiLinkedinFill,

  },
  {
    id: 2,
    icon: RiFacebookBoxFill,
    href:"",
  },
  {
    id: 3,
    icon: RiGithubFill,
   
  },
];

export const aboutItems = [
  {
    id: 1,
    label: "React & Next.js development",
  },
  {
    id: 2,
    label: "TypeScript & JavaScript (ES6+)",
  },
  {
    id: 3,
    label: "Responsive design & CSS frameworks",
  },
  {
    id: 4,
    label: "API integration & state management",
  },
  {
    id: 5,
    label: "Performance optimization",
  },
];

export const ResumeItems = [
  // {
  //   id: 1,
  //   title: "Experience",
  //   list: [
  //     {
  //       role: "Senior Frontend Developer",
  //       label: "TechCorp",
  //       time: "2026-Present",
  //     },
  //     {
  //       label: "Fresher",
  //       role: "Frontend Developer",
  //       time: "....",
  //     },
  //     {
  //       label: "",
  //       role: "Junior Developer",
  //       time: "2019-2020",
  //     },
  //   ],
  // },
  {
    id: 2,
    title: "Education",
    list: [
      {
        label: "Azad Polytechnic Azamgarh",
        role: "Computer Science Degree",
        time: "2025",
      },
      {
        label: "Higher Secondary School",
        role: "B D Inter Collage Jaunpur",
        time: "2022",
      },
      {
        label: "Secondary School",
        role: "B D Inter Collage Jaunpur",
        time: "2020",
      },
    ],
  },
];

export const ProjectsItems = [
  {
    id: 1,
    title: "Fitness And Health Style",
    src: fitness,
    href:"https://pavanyadav182004.github.io/Fitness/",
    text: "Fitness means keeping your body and mind healthy, strong, and active.",
  },
  {
    id: 2,
    title: "Porfolio",
    src: portfolio,
    href:"https://pavanyadav182004.github.io/my_portfolio/",
    text: "HTML CSS Js",
  },
  {
    id: 3,
    title: "Food Delevery App",
    src: Food,
    href:"https://food-delivery-mu-mauve.vercel.app/",
    text: "The Food Delivery App is a modern and user-friendly web application designed to make ordering food quick, easy, and convenient.",
  },

   {
    id: 3,
    title: "Hotel Booking App",
    src: Hotal,
    href:"https://hotel-booking-v17a.vercel.app/",
    text: "Hotel Booking App",
  }
 
];

export const contactItems = [
  {
    id: 1,
    label: "Email:",
    link: "PavanYadav18200@gmail.com",
  },
  {
    id: 2,
    label: "Phone:",
    link: "+91 9565879194",
  },
  {
    id: 3,
    label: "Location:",
    link: "Mumbai",
  },
];