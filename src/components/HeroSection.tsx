import Link from "next/link";
import { Button } from "./ui/moving-border";
import { FaDiscord, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { BackgroundBeams } from "./ui/background-beams";
import { HiOutlineCodeBracket } from "react-icons/hi2";
import { MdDownload } from "react-icons/md";
import Image from "next/image";

const socialMediaLinks = [
  { href: "https://www.facebook.com", icon: <FaFacebook size={24} /> },
  { href: "https://www.twitter.com", icon: <FaTwitter size={24} /> },
  { href: "https://www.instagram.com", icon: <FaInstagram size={24} /> },
  { href: "https://www.discord.com", icon: <FaDiscord size={24} /> },
];

const buttons = [
  {
    href: "#",
    icon: <HiOutlineCodeBracket />,
    text: "Guidelines",
    className: "top-10 left-32",
  },
  {
    href: "#",
    icon: <MdDownload />,
    text: "Brochure",
    className: "top-10 right-32",
  },
];

const mainButtons = [
  { href: "#", text: "Go to devfolio" },
  { href: "#", icon: <FaDiscord /> },
  { href: "#", text: "Steps to Register on Devfolio" },
];

function HeroSection() {
  return (
    <div className="h-auto md:h-[50rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
      <div className="absolute top-11 left-10 z-20">
        <Link href="/">
          <Image src="/logo.png" alt="Left Image" width={48} height={48} />
        </Link>
      </div>
      <div className="absolute top-11 right-10 z-20">
        <Link href="/">
          <Image src="/logo2.webp" alt="Right Image" width={48} height={48} />
        </Link>
      </div>
      {buttons.map((button, index) => (
        <div key={index} className={`absolute z-20 ${button.className}`}>
          <Link href={button.href}>
            <Button>
              {button.icon} <span className="ml-2">{button.text}</span>
            </Button>
          </Link>
        </div>
      ))}
      <div className="absolute bottom-10 left-12 z-20 flex flex-col space-y-4">
        <div
          style={{
            borderTop: "40px solid grey",
            width: "5px",
            height: "40px",
            marginLeft: "8px",
          }}
        />
        {socialMediaLinks.map((link, index) => (
          <Link key={index} href={link.href} target="_blank">
            <div className="text-neutral-300 hover:text-white">{link.icon}</div>
          </Link>
        ))}
      </div>
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-60 mb-5 md:mt-60 text-2xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Welcome to
        </h1>
        <h1 className="mt-20 md:mt-0 text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Codeutsava 8.O
        </h1>
        <h1 className="mt-20 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Code. Innovate. Celebrate.
        </h1>
        <h1 className="mt-4 font-normal text-base md:text-2xl text-neutral-300 mx-auto">
          Central India&apos;s <b> Largest coding event.</b> Join us on 8th -
          9th October
        </h1>
        <div className="mb-4 mt-14 p-4 align-middle">
          {mainButtons.map((button, index) => (
            <Link key={index} className="m-4" href={button.href}>
              <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                {button.icon} {button.text && <span>{button.text}</span>}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
