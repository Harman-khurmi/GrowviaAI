import appLaunch from "./App-launch.webp";
import eCommerce from "./E-commerce.webp";
import heroImage from "./Hero.png";
import saasPerformance from "./SaaS-Performance.webp";
import darkLogo from "./Logo dark.svg";
import lightLogo from "./Logo light.svg";

import blueGradientDark from "./blue-gradient-dark.svg";
import greenGradientDark from "./green-gradient-dark.svg";
import trustedPeople from "./trusted-people.svg";

import bookingLogo from "./company-logos/bookingcom-logo-svgrepo-com.svg";
import googleLogo from "./company-logos/google_logo.svg";
import lenovoLogo from "./company-logos/lenovo-1-logo-svgrepo-com.svg";
import microsoftLogo from "./company-logos/microsoft-logo-svgrepo-com.svg";
import oracleLogo from "./company-logos/oracle-6-logo-svgrepo-com.svg";
import spotifyLogo from "./company-logos/spotify-1-logo-svgrepo-com.svg";

import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { HiArrowLongRight } from "react-icons/hi2";
import { CgMenuRight } from "react-icons/cg";
import { CgClose } from "react-icons/cg";

import girl2 from "./people/girl2.jpg";
import girl4 from "./people/girl4.jpg";
import girl6 from "./people/girl6.jpg";
import girl8 from "./people/girl8.jpg";
import man4 from "./people/man4.jpg";
import man5 from "./people/man5.jpg";
import man10 from "./people/man10.jpg";
import Harman from "./people/me-formal-side.jpg";

import facebook from "./social-media/facebook_icon.svg"
import instagram from "./social-media/instagram_icon.svg"
import linkedin from "./social-media/linkedin_icon.svg"
import twitter from "./social-media/twitter_icon.svg"
 
import performance from "./performance-svgrepo-com.svg";
import growth from "./business-growth-progress-svgrepo-com.svg";
import marketing from "./marketing-svgrepo-com.svg";
import analytics from "./analytics-graph-chart-svgrepo-com.svg";


export const assets = {
    lightLogo,
    darkLogo,
    heroImage,
    appLaunch,
    eCommerce,
    saasPerformance,
    blueGradientDark,
    greenGradientDark,
    trustedPeople
}

export const company_logos = [
    spotifyLogo,
    oracleLogo,
    microsoftLogo,
    lenovoLogo,
    googleLogo,
    bookingLogo,
];

export const mobileNavItems = [
    // { name: "Home", link: "#" },
    { name: "Services", link: "#Services" },
    { name: "Our Work", link: "#OurWork" },
    { name: "Our Team", link: "#OurTeam" },
    { name: "Contact Us", link: "#contactUs" },
]
export const navItems = [
    { name: "Home", link: "#" },
    { name: "Services", link: "#Services" },
    { name: "Our Work", link: "#OurWork" },
    { name: "Our Team", link: "#OurTeam" },
]

export const icons = {
    darkIcon: CiDark,
    lightIcon: CiLight,
    arrowRightIcon: HiArrowLongRight,
    menuIcon: CgMenuRight,
    closeIcon: CgClose
}


export const serviceDate = [
    {
        title: "Performance Advertising",
        description: "We run and optimize ad campaigns across key platforms to maximize reach.",
        icon: performance
    },
    {
        title: "Growth Strategy & Funnels",
        description: "We design scalable growth strategies that turn traffic into real business results.",
        icon: growth
    },
    {
        title: "Creative & Content Marketing",
        description: "We create impactful creatives and content that capture attention.",
        icon: marketing
    },
    {
        title: "AI Analytics & Optimization",
        description: "We use AI-driven insights to track performance and improve efficiency.",
        icon: analytics
    }
]

export const ourWork = [
    {
        image: eCommerce,
        title: "E-commerce Growth Campaign",
        description: "Scaled paid ads with AI optimization to increase revenue while reducing acquisition costs."
    },
    {
        image: saasPerformance,
        title: "SaaS Performance Dashboard",
        description: "Designed and managed performance dashboards to track, analyze, and improve marketing efficiency."
    },
    {
        image: appLaunch,
        title: "App Launch & User Acquisition",
        description: "Executed full-funnel advertising to drive high-quality installs and long-term retention."
    }
]

export const teamData = [
    {
        "name": "Arjun Malhotra",
        "title": "Founder & CEO",
        "image": man10
    },
    {
        "name": "Aanya Kapoor",
        "title": "Brand Strategy",
        "image": girl2
    },
    {
        "name": "Daniel Brooks",
        "title": "Creative Director",
        "image": man5
    },
    {
        "name": "Harman Khurmi",
        "title": "Creative Designer",
        "image": Harman
    },
    {
        "name": "Rohit Verma",
        "title": "Senior Writer",
        "image": man4
    },
    {
        "name": "Sophia Martinez",
        "title": "Content Manager",
        "image": girl4
    },
    {
        "name": "Neha Sharma",
        "title": "Success Manager",
        "image": girl6
    },
    {
        "name": "Olivia Bennett",
        "title": "Senior Analyst",
        "image": girl8
    }
];

export const socialMedia = [
    {
        name: "Facebook",
        icon: facebook,
        link: "https://www.facebook.com"
    },
    {
        name: "Instagram",
        icon: instagram,
        link: "https://www.instagram.com"
    },
    {
        name: "LinkedIn",
        icon: linkedin,
        link: "https://www.linkedin.com"
    },
    {
        name: "Twitter",
        icon: twitter,
        link: "https://www.x.com"
    },
]

export default assets;