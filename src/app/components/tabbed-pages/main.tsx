'use client'
import { useState } from "react";
import Button from "./ui/tabButton";

interface IProps {
  tabs: string[];
  pages: React.ReactElement[];
}

export default function TabbedPages({ pages, tabs }: IProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const ActivePage = pages[activeIndex];

  return (
    <div className="h-full p-10 mx-0 lg:mx-48 flex flex-col gap-10">
      <div className="flex gap-5 justify-center items-center">
        {tabs.map((tab, index) => (
          <Button
            key={index}
            text={tab}
            isActive={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
      <div className="w-full flex justify-center overflow-scroll no-scrollbar">
        {ActivePage}
      </div>
    </div>
  );
}
