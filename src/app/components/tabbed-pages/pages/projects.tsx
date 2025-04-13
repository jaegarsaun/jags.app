import { IoLogoJavascript, IoLogoCss3, IoLogoHtml5 } from "react-icons/io5";
import { AiOutlineApi } from "react-icons/ai";
import { FaDiscord, FaPython, FaSteam } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiSqlite } from "react-icons/si";
import Accordian from "../../ui/accordian";
export interface TechItem {
    name: string;
    icon: React.ReactNode;
}

interface ProjectItems {
    title: string;
    link: string;
    description: string;
    tech: TechItem[];
}

const projects: ProjectItems[] = [
    {
        title: 'Tabmon',
        link: 'https://github.com/jaegarsaun/tabmon',
        description: 'A Chrome Extension that resembles the famous tamogotchi virtual pet.',
        tech: [
            { name: 'Javascript', icon: <IoLogoJavascript /> },
            { name: 'HTML', icon: <IoLogoHtml5 /> },
            { name: 'CSS', icon: <IoLogoCss3 /> },
            { name: 'Chrome APIs', icon: <AiOutlineApi /> }
        ]
    },
    {
        title: 'DarkRP Admin Helper',
        link: 'https://github.com/jaegarsaun/sups-admin-tool',
        description: 'A web-app designed to assist in the moderation process for a Gmod Roleplay server called Superior Servers',
        tech: [
            {name: 'Javascript', icon: <IoLogoJavascript />},
            {name: 'Python', icon: <FaPython/>},
            {name: 'NextJS', icon: <RiNextjsFill />},
            {name: 'Steam API', icon: <FaSteam/>}
        ]
    },
    {
        title: 'TheJJBot',
        link: 'https://github.com/jaegarsaun/TheJJBot',
        description: 'A multi-functional discord bot that provides utility and fun commands',
        tech: [
            {name: 'Javascript', icon: <IoLogoJavascript />},
            {name: 'DiscordJS', icon: <FaDiscord/>},
            {name: 'SQLite', icon: <SiSqlite />},
            {name: 'APIs', icon: <AiOutlineApi/>}
        ]
    },
    {
        title: 'Portfolio',
        link: 'https://github.com/jaegarsaun/jags.app',
        description: 'This is the website you are currently on! Fully hand crafted compotents to display a portion of my skills',
        tech: [
            {name: 'Typescript', icon: <SiTypescript />},
            {name: 'NextJS', icon: <RiNextjsFill />},
            { name: 'TailwindCSS', icon: <SiTailwindcss /> },
        ]
    },
];
export default function ProjectExperience() {
    return (
        <div className="flex flex-col items-center gap-10">
            <h1 className="text-4xl font-semibold text-white">Project Work ❤️‍🔥</h1>
            <div className="flex flex-col gap-5">
                {projects.map((project, index) => (
                    <Accordian title={project.title} description={project.description} link={project.link} tech={project.tech} />
                ))}
            </div>
        </div>
    )
}