'use client'
import { FaChevronDown } from "react-icons/fa";
import { TechItem } from "../tabbed-pages/pages/projects";
import { useState } from "react";

interface IProps {
    title: string;
    link: string;
    description: string;
    tech: TechItem[];
}

// interface IProps {
//     items: AccordianItem[];
// }

export default function Accordian({ title, link, description, tech }: IProps) {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className="flex flex-col gap-4 w-full">
            <div className="bg-secondary rounded-xl p-6 w-[50vw]">
                <div className="flex justify-between items-center">
                    <a href={link} target="_blank" className="text-lg font-bold text-white hover:underline">
                        {title}
                    </a>
                    <button className="hover:cursor-pointer" onClick={() => setOpen(!isOpen)}><FaChevronDown className={`text-white transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}/></button>
                </div>
                {isOpen ? (
                    <div>
                        <p className="text-gray-300 mt-2">{description}</p>
                        <div className="flex gap-4 flex-wrap mt-4">
                            {tech.map((techItem, techIndex) => (
                                <div key={techIndex} className="flex items-center gap-2 text-white bg-zinc-700 px-3 py-1 rounded-full text-sm">
                                    {techItem.icon}
                                    {techItem.name}
                                </div>
                            ))}
                        </div>
                    </div>
                ) : ''}
            </div>
        </div>
    );
}

