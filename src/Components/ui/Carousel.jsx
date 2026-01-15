import { RiArrowRightLongLine } from "@remixicon/react";
import { useState, useRef, useId, useEffect } from "react";

const Slide = ({ slide, index, current, handleSlideClick }) => {
  const slideRef = useRef(null);

  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef();

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      slideRef.current.style.setProperty("--x", `${xRef.current}px`);
      slideRef.current.style.setProperty("--y", `${yRef.current}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  const handleMouseMove = (event) => {
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + r.width / 2);
    yRef.current = event.clientY - (r.top + r.height / 2);
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const { src, title, text, href } = slide;   // 🔥 href yahan add kiya

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white transition-all duration-300 w-[80vmin] h-[80vmin] mx-[4vmin]"
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform:
            current !== index
              ? "scale(0.98) rotateX(8deg)"
              : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)",
          transformOrigin: "bottom",
        }}
      >
        {/* IMAGE */}
        <div
          className="absolute top-20 left-0 w-full h-80 bg-[#1D1F2F] rounded overflow-hidden"
          style={{
            transform:
              current === index
                ? "translate3d(calc(var(--x)/30), calc(var(--y)/30), 0)"
                : "none",
          }}
        >
          <img
            src={src}
            alt={title}
            className="absolute inset-0 w-[120%] h-full object-cover"
            style={{ opacity: current === index ? 1 : 0.5 }}
          />
          {current === index && (
            <div className="absolute inset-0 bg-black/30" />
          )}
        </div>

        {/* CONTENT */}
        <article
          className={`relative p-[4vmin] transition-opacity duration-700 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold">
            {title}
          </h2>
          <p className="bg-white/80 text-black p-3 rounded-lg">{text}</p>

          {/* 🔗 PROJECT LINK */}
          <div className="flex justify-center mt-6">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 text-black bg-white hover:bg-white/80 h-12 flex justify-center items-center rounded-2xl hover:shadow-lg transition duration-200"
            >
              <RiArrowRightLongLine />
            </a>
          </div>
        </article>
      </li>
    </div>
  );
};

/* ---------------- Controls ---------------- */

const CarouselControl = ({ type, title, handleClick }) => (
  <button
    className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 rounded-full ${
      type === "previous" ? "rotate-180" : ""
    }`}
    title={title}
    onClick={handleClick}
  >
    <RiArrowRightLongLine />
  </button>
);

/* ---------------- Carousel ---------------- */

export function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNextClick = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const handleSlideClick = (index) => {
    if (current !== index) setCurrent(index);
  };

  const id = useId();

  return (
    <div
      className="relative w-[70vmin] h-[70vmin] mx-auto"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul
        className="absolute flex mx-[-4vmin] transition-transform duration-700"
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>

      <div className="absolute flex justify-center w-full top-[calc(100%+1rem)]">
        <CarouselControl
          type="previous"
          title="Previous"
          handleClick={handlePreviousClick}
        />
        <CarouselControl
          type="next"
          title="Next"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
}
