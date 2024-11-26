"use client"
import Image from "next/image";
import {DndContext} from '@dnd-kit/core';
import {SortableContext} from '@dnd-kit/sortable';
import LogoGallery from "@/components/ui/LogoGallery";
import SplitFlapDisplay from "@/components/ui/SplitFlapDisplay";
import Digit from "@/components/ui/Digit";
import { motion } from "framer-motion";
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
  IconMail,
  IconMapPin,
  IconBrandInstagram,
  IconBrandYoutube,
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

const logoLinks = [
  'https://link-to-ht.com',
  'https://link-to-ts.com',
  'https://link-to-siu.com',
  'https://link-to-wsj.com',
  'https://link-to-yf.com',
  'https://link-to-iu.com',
  'https://link-to-wfiu.com',
  'https://link-to-ids.com'
]

let text = "Hello";

const Home = () => 
 
{ 
  return (
    <><link rel="icon" href="/favicon.ico" sizes="any" /><div className="bg-white p-12 w-screen h-screen flex flex-col">
      <div className="flex flex-col">
        {/* <BoardingPass/>
    <BoardingPass/>
    <BoardingPass/> */}
        <div className="flex justify-start px-12">
          <div className="relative w-32 h-32 rounded-full overflow-hidden" style={{border: "4px solid transparent",}}>
            <Image
              src="/Assets/eli-av.png" 
              alt="Eli Serrano profile picture"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <p className="p text-center text-justify p-12">Hi, I&apos;m Eli Serrano 👋
          <br></br>
          I am a    {' '}
          <LinkPreview
            url="https://airoma.tech"
          >
            <span className="px-1 hover:font-serif hover:italic py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200 text-green-800">full stack developer</span>,     {' '}
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
          My work has been featured in some <LinkPreview
            url="https://eliserrano.notion.site/Press-Room-145fae02153780f1a0b5c3844d5a681b"
          >
            <span className="px-1 py-0.5 hover:font-serif hover:italic rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200 text-blue-400">cool</span>
          </LinkPreview> places ↴
        </p>
        <LogoGallery logos={logos} logoLinks={logoLinks} />

      </div>
      <Carousel items={cards} />

      <ResearchUI />
      
      <footer className="mt-auto pt-8 border-t px-12">
        <div className="flex flex-col gap-4 text-neutral-600">
          <div className="flex items-center gap-2">
            <span className="font-xlarge hover:font-serif hover:italic">Eli Serrano</span>
          </div>
          
          <div className="flex items-center gap-2">
            <IconMapPin size={20} />
            <span className="font-medium hover:font-serif hover:italic">Bloomington, IN</span>
          </div>
          
          <div className="flex items-center gap-2">
            <IconMail size={20} />
            <a href="mailto:eliserr@iu.edu" className="hover:font-serif hover:italic hover:text-neutral-900">
              eliserr@iu.edu
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com/SyntaxError403" className="hover:text-neutral-900" target="_blank" rel="noopener noreferrer">
              <IconBrandGithub size={24} />
            </a>
            <a href="https://instagram.com/syntax_error_403" className="hover:text-neutral-900" target="_blank" rel="noopener noreferrer">
              <IconBrandInstagram size={24} />
            </a>
    
          </div> 
          *oh, hi didn&apos;t expect you here*
        </div>
      </footer>
    </div></>
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
 
const AiromaContent = () => {
  return (
    <div>
      <img src="/Assets/a1.png" alt="Airoma" style={{width: "100%", height: "auto"}} />
     <p className="text-justify py-5 text-lg">Airoma was a venture backed startup I officially created in 2021, however, the idea and early MVPs date back to late 2016. 
      I was inspired by the wave of popularity and the mechanics of Pokemon Go. 
      The game brought everyone outside, made us be social, and had some cool AR tech to catch Pokemon characters.
      I wanted to take this idea and apply it to social media. Get people outside and exploring using location based AR. </p>
      <img src="/Assets/a2.png" alt="Airoma" style={{width: "100%", height: "auto"}} />

      <p className="text-justify py-5 text-lg">I saw Airoma more than just another social media app, I saw it potentially becoming the catalysts for a new revival as something that got people outside and to take a moment to care for their mental health which often gets greatly overlooked by any other social media app. We made our values, and stuck true to them till the end. </p>
      <img src="/Assets/a3.png" alt="Airoma" style={{width: "100%", height: "auto"}} />
      <p className="text-justify py-5 text-lg">Early app versions were half baked Android apps that were incredibly buggy due to AR being a very recent technology and early documentation of Google ARCore was sparse. (I had notifications on their releases, triggers on Stackoverflow and Reddit for threads that mention AR to try to learn more from others also struggling) </p>
      <p className="text-justify py-5 text-lg"> 
      When 2021 came, I decided to switch from a native app development to React Native to get 2 app platforms built for the price of 1 codebase. For 75% of the features and design, React Native worked straight out of the box with many open libraries. 
      </p>
      <img src="/Assets/a4.png" alt="Airoma" style={{width: "100%", height: "auto"}} />
   
    </div>
  )
}

const EpochContent = () => {
  return (
    <div>
      <img src="/Assets/epoch-bg.jpg" alt="Epoch" style={{width: "100%", height: "auto"}} />
      <div className="border-l-4 border-blue-500 pl-6 my-8">
        <div className="mb-4">
          <span className="font-mono text-lg text-gray-600">e·poch</span>
          <span className="text-gray-400 ml-2 font-serif">/epək/</span>
        </div>
        
        <div className="mb-2">
          <span className="italic text-gray-600">noun</span>
        </div>
        
        <div className="space-y-3">
          <p className="text-gray-800">
            <span className="font-medium">1.</span> A particular period of history, especially one considered remarkable or noteworthy. 
          </p>
          
          <p className="text-gray-800">
            <span className="font-medium">2.</span> An instant in time that is arbitrarily selected as a point of reference for specification of celestial coordinates.  
          </p>
          <p className="text-gray-800">
            <span className="font-medium">3.</span> A new era of democritizing the HFT industry 
          </p>
          
          <p className="text-gray-600 text-sm italic mt-4">
          &quot;Epoch enables traders to test strategies against AI-powered market participants in a risk-free environment&quot;
          </p>
        </div>
      </div>
      <p className="text-justify py-5 text-lg">Epoch is a simulated High Frequency Trading (HFT) platform that emulates every aspect of trading from networking to SIP/NBBO system and simulating thousands of other traders with a custom AI to match real the world HFT conditions. Epoch let&apos;s anyone test and learn strategies in real time with no experience, coding skills, or money needed. Epoch is a back 
      testing alternative tool that can also let firms see limit order book information they can&apos;t see in real time markets, simulate dark pools, and create algorithms in a safe R&D environment.</p>
    
      <p className="text-justify py-5 text-lg font-serif italic text-purple-800">This will help people land HFT jobs and for firms to de-risk strategies. </p>

      <p className="text-justify py-5 text-lg font-serif italic text-green-800"> More to come... </p>
    </div>
  )
}

const data = [
  {
    category: "High Frequency Trading",
    title: "Epoch",
    src: "/Assets/epoch.png",
    content: <EpochContent />,
  },
  {
    category: "Augemented Reality | Social Media",
    title: "Airoma 💚",
    src: "/Assets/airoma-1.png",
    content: <AiromaContent />,
  },
  {
    category: "Music | Social Media",
    title: "HotDrop",
    src: "/Assets/hotdrop-1.png",

    // content: <DummyContent />,
  },
  {
    category: "Entrepreneurial Ecosystem",
    title: "IU Innovates",
    src: "/Assets/innov8.png",
    // content: <DummyContent />,
  },
  {
    category: "Entrepreneurial Ecosystem",
    title: "The Mill",
    src: "/Assets/Mill.png",
    // content: <DummyContent />,
  },
  {
    category: "Entrepreneurial Support",
    title: "The Founders Cookbook",
    src: "/Assets/fc.png",
    // content: <DummyContent />,
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
