"use client"
import Image from "next/image";
import BoardingPass from "@/components/ui/BoardingPass";
import {DndContext} from '@dnd-kit/core';
import {SortableContext} from '@dnd-kit/sortable';
import LogoGallery from "@/components/ui/LogoGallery";
import SplitFlapDisplay from "@/components/ui/SplitFlapDisplay";
import Digit from "@/components/ui/Digit";
import { motion } from "framer-motion";
import Spline from '@splinetool/react-spline/next';
import { LinkPreview } from "@/components/ui/link-preview";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import { ResearchUI } from "@/components/research-ui";
 

const logos = [
  './Logos/HT.png',
  './Logos/ts.png',
  './Logos/SIU.jpg',
  './Logos/WSJ.png',
  './Logos/yf.png',
  './Logos/iu.jpg',
  './Logos/wfiu.png',
  './Logos/ids.jpg'
]

let text = "Hello";

const Home = () => 
 
{ 
  return (
    <div className="bg-white p-12 w-screen h-screen flex flex-col">
      <div className="flex flex-col">
      {/* <BoardingPass/>
      <BoardingPass/>
      <BoardingPass/> */}
      <p className="p text-center text-justify p-12">Hi, I'm Eli Serrano 👋 
      <br></br>
      I am a    {' '} 
      <LinkPreview
          url="https://airoma.tech"
      >
          <span className="px-1 hover:font-serif hover:italic py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200 text-green-800" >full stack developer</span>,     {' '}
      </LinkPreview>
      <LinkPreview
          url="https://epoch-web-tau.vercel.app/"
      >
      <span className="px-1 py-0.5 hover:font-serif hover:italic rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200 text-blue-800">founder</span>, and     {' '}
      </LinkPreview>

      <LinkPreview
          url="https://today.iu.edu/live/news/4035-university-launches-iu-innovates"
      >
      <span className="px-1 py-0.5 hover:font-serif hover:italic rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200 text-purple-800">ecosystem builder</span>
      </LinkPreview>
      <br></br>     
      <br></br>
      My work has been featured in some <span className="font-serif italic text-blue-400">cool</span> places ↴ 
      </p>
      <LogoGallery logos={logos}/>
    
      </div>
      <Carousel items={cards} />

      <ResearchUI/>
    </div>
  );
}
const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};
 
const data = [
  {
    category: "Augemented Reality | Social Media",
    title: "Airoma 💚",
    src: "/./Assets/airoma-1.png",
    content: <DummyContent />,
  },
  {
    category: "Music | Social Media",
    title: "HotDrop",
    src: "/./Assets/hotdrop-1.png",

    content: <DummyContent />,
  },
  {
    category: "Entrepreneurial Ecosystem",
    title: "IU Innovates",
    src: "/./Assets/innov8.png",
    content: <DummyContent />,
  },
 
  {
    category: "High Frequency Trading",
    title: "Epoch",
    src: "/./Assets/epoch.png",
    content: <DummyContent />,
  },
  {
    category: "Entrepreneurial Support",
    title: "The Founder's Cookbook",
    src: "/./Assets/fc.png",
    content: <DummyContent />,
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
];

const cards = data.map((card, index) => (
  <Card key={card.src} card={card} index={index} />
));
const links = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },

  {
    title: "Products",
    icon: (
      <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Components",
    icon: (
      <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Aceternity UI",
    icon: (
      <Image
        src="https://assets.aceternity.com/logo-dark.png"
        width={20}
        height={20}
        alt="Aceternity Logo"
      />
    ),
    href: "#",
  },
  {
    title: "Changelog",
    icon: (
      <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },

  {
    title: "Twitter",
    icon: (
      <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
];


export default Home;
