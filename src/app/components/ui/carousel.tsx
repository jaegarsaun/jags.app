'use client'
import { useState } from "react";
import { ISkills } from "@/app/page";

interface CarouselProps {
  skills: ISkills[];
}

export default function Carousel({ skills }: CarouselProps) {


  return (
    <div className="w-[50%]">
      <div className="scroll">
      <ul className="">
        {skills.map((skill, index) => (
          <li className={`flex items-center justify-center text-xl gap-1 ${skill.color} text-gray-400`} key={index}>
            {skill.name}
            {skill.icon}
          </li>
        ))}
      </ul>
      <ul className="">
        {skills.map((skill, index) => (
          <li className={`flex items-center justify-center text-xl gap-1 ${skill.color} text-gray-400`} key={index}>
            {skill.name}
            {skill.icon}
          </li>
        ))}
      </ul>
    </div>
    </div>

  );
}
