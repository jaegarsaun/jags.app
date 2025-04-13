import ActionButton from "./components/ui/actionButton";
import TabbedPages from "./components/tabbed-pages/main";
import WorkExperience from "./components/tabbed-pages/pages/work";
import ProjectExperience from "./components/tabbed-pages/pages/projects";
import { MdOutlineEmail } from "react-icons/md";
import { IoLogoJavascript, IoLogoCss3, IoLogoHtml5 } from "react-icons/io5";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { FaPython, FaReact } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import Carousel from "./components/ui/carousel";

export interface ISkills {
  icon: React.ReactNode;
  name: string;
  color: string;
}
const skills : ISkills[] = [
  {
    name: 'Javascript',
    icon: <IoLogoJavascript />,
    color: 'hover:text-yellow-300'
  },
  {
    name: 'HTML',
    icon: <IoLogoHtml5 />,
    color: 'hover:text-orange-400'
  },
  {
    name: 'CSS',
    icon: <IoLogoCss3 />,
    color: 'hover:text-blue-500'
  },
  {
    name: 'Git',
    icon: <FiGithub />,
    color: 'hover:text-orange-600'
  },
  {
    name: 'Python',
    icon: <FaPython />,
    color: 'hover:text-sky-600'
  },
  {
    name: 'Typscript',
    icon: <SiTypescript />,
    color: 'hover:text-sky-400'
  },
  {
    name: 'React',
    icon: <FaReact />,
    color: 'hover:text-cyan-300'
  },
  {
    name: 'TailwindCSS',
    icon: <SiTailwindcss />,
    color: 'hover:text-cyan-500'
  },
]
export default function Home() {
  return (


    <div className="flex w-full h-full justify-center items-center flex-col">
      {/* First section, greetings for the user */}
      <main className="h-[100vh] z-10 flex justify-center items-center">
        <div className="text-center flex flex-col justify-center items-center">
          <h1 className="text-white text-2xl md:text-6xl font-medium">Jaegar Saunders</h1>
          <h1 className="text-indigo-400 text-2xl md:text-6xl font-semibold">Frontend Developer</h1>
          <div className="flex gap-7 justify-center p-5">
            <ActionButton main={true} isIcon={true} icon={<MdOutlineEmail />} text={'Contact'} link={"mailto:jaegarls@icloud.com"} />
            <ActionButton main={false} isIcon={true} icon={<FiGithub />} text={'Github'} link={"https://github.com/jaegarsaun"} />
          </div>
          <Carousel skills={skills}/>
        </div>
      </main>
      {/* Career stuff & projects */}
      <section className="bgcolor h-[100vh] w-full z-10 border-t-2 border-t-white">
        <TabbedPages
          pages={[
            <WorkExperience key="work" />,
            <ProjectExperience key="projects" />
          ]}
          tabs={['Career', 'Projects']}
        />
      </section>
      {/* grid background */}
      <div className="background z-0"></div>
    </div>

  );
}
