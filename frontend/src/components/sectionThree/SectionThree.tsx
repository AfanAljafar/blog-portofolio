import React, { forwardRef, useEffect, useRef, useState } from "react";
import Card from "../card/Card";
import { dataProject } from "./dataProject";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SectionThreeProps {
  id?: string;
}

const SectionThree = forwardRef<HTMLElement, SectionThreeProps>(
  (props, ref) => {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Auto scroll looping, paused hover
    useEffect(() => {
      const container = scrollRef.current;
      if (!container) return;

      let scrollAmount = 1;
      let direction = 1;

      const scroll = () => {
        if (!isHovered) {
          container.scrollLeft += scrollAmount * direction;

          if (
            container.scrollLeft + container.clientWidth >=
            container.scrollWidth
          ) {
            direction = -1;
          } else if (container.scrollLeft <= 0) {
            direction = 1;
          }
        }
      };

      const interval = setInterval(scroll, 2000);
      return () => clearInterval(interval);
    }, [isHovered]);

    //button manual scroll
    const handleScroll = (direction: "left" | "right") => {
      const container = scrollRef.current;
      const scrollOffset = 300;
      if (container) {
        container.scrollBy({
          left: direction === "left" ? -scrollOffset : scrollOffset,
          behavior: "smooth",
        });
      }
    };

    return (
      <section
        id="projects"
        ref={ref}
        className="relative min-w-screen h-fit pt-[72px] px-4 md:px-10"
      >
        <div className="text-center mb-6">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            projects.
          </h1>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button
            onClick={() => handleScroll("left")}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-sky-800 hover:bg-sky-700 text-white rounded-full shadow-md hidden md:flex"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => handleScroll("right")}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-sky-800 hover:bg-sky-700 text-white rounded-full shadow-md hidden md:flex"
          >
            <ChevronRight size={24} />
          </button>

          <div
            ref={scrollRef}
            className="overflow-x-auto scroll-smooth scrollbar-hide px-8"
          >
            <div className="grid grid-flow-col auto-cols-[minmax(250px,_1fr)] grid-rows-2 gap-x-6 gap-y-6 min-w-max pb-4">
              {[...dataProject].map((item, index) => (
                <div key={index} className="w-full h-full whitespace-pre-line">
                  <Card
                    title={item.title}
                    content={item.content}
                    image={item.image}
                    path={item.path}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
);

SectionThree.displayName = "SectionThree";

export default SectionThree;
