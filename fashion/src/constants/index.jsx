import { BatteryCharging } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";
import { BabyIcon } from "lucide-react";
import {PersonStanding} from 'lucide-react'

import kid from '../assets/Kidfasion.jpg'
import men from '../assets/Men.jpg'
import women from '../assets/Womenfashion.jpg'
import accessories from '../assets/accessories.jpg'
import toys from '../assets/Toys.jpg'
import others from '../assets/Others.jpg'


import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Categories", href: "feature" },
  { label: "Styles", href: "workflow" },
  { label: "Offers", href: "pricing" },
  { label: "Reviews", href: "testimonials" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "Absolutely love the comfort and fit of these jeans! The fabric is super soft, and they have the perfect amount of stretch without losing their shape. Perfect for a day out or lounging at home. Definitely my go-to pair!.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const categories = [
  {
    icon: <BabyIcon/>,
    text: "Kids",
    img : kid
  },
  {
    icon: <PersonStanding />,
    text: "Men",
    img :men
  },
  {
    icon: <Flower />,
    text: "Women",
    img : women
  },
  {
    icon: <BatteryCharging />,
    text: "Accessories",
    img : accessories
  },
  {
    icon: <PlugZap />,
    text: "Toys",
    img: toys
  },
  {
    icon: <GlobeLock />,
    text: "Others",
    img: others
  },
];

export const styles = [
  {
    title: "Formal Wear",
    description:
      "Attire suitable for business or formal occasions like offices, meetings, or events",
  },
  {
    title: "Street Wear",
    description:
     "Trendy and bold clothing, often associated with urban culture and casual fashion.",
  },
  {
    title: "Traditional Wear",
    description:
      " Clothing that represents cultural or traditional styles, especially for special occasions like weddings or festivals",
  },
  {
    title: "Retro Style",
    description:
      " Clothing inspired by previous fashion decades like the 70s, 80s, or 90s.",
  },
];

export const pricingOptions = [
  {
    title: "Base Offer",
    price: "5K",
    description:"Get 5% Off/-",
    features: [
      "Free Shipping",
      "Easy Returns",
      "Secure Payments",
      "New Arrivals",
      "Exclusive Offers for registered users"
    ],
  },
  {
    title: "Standard Offer",
    price: "10K",
    description:"Get 10% Off/-",
    features: [
      "Free Shipping",
      "Easy Returns",
      "Secure Payments",
      "New Arrivals",
      "Exclusive Offers for registered users"
    ],
  },
  {
    title: "Premium Offer",
    price: "20K",
    description:"Get 15% Off/-",
    features: [
      "Free Shipping",
      "Easy Returns",
      "Secure Payments",
      "New Arrivals",
      "Exclusive Offers for registered users"
    ],
  },
];

