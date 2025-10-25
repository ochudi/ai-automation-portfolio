"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { AnimatedPortrait } from "./AnimatedPortrait";
import { motion } from "framer-motion";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { width, height, left, top } =
        containerRef.current.getBoundingClientRect();
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;

      containerRef.current.style.setProperty("--mouse-x", `${x * 100}%`);
      containerRef.current.style.setProperty("--mouse-y", `${y * 100}%`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center lg:items-stretch">
          <motion.div
            className="text-center md:text-left animate-fade-in-up"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-[clamp(2.5rem,4.5vw,4rem)] font-bold mb-4 bg-linear-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Chudi Ofoma
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-[60ch] leading-relaxed mx-auto md:mx-0">
              Hey there! I build AI-driven automations that cut down manual
              work, prevent errors, and boost productivity... if you’re ready to
              make your systems smarter — let’s automate your next project
              together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
              >
                View My Work
                <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center md:justify-end items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center w-full">
              {/* provide a container that constrains and centers the portrait on large screens */}
              <div className="w-[clamp(12rem,28vw,24rem)] sm:w-[clamp(14rem,26vw,26rem)] md:w-[clamp(16rem,22vw,28rem)] lg:w-[clamp(18rem,20vw,32rem)]">
                <AnimatedPortrait />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator (click to scroll to next section - About) */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            aria-label="Scroll to About section"
            onClick={() => {
              const el = document.getElementById("about");
              if (!el) return;
              const prefersReduced =
                window.matchMedia &&
                window.matchMedia("(prefers-reduced-motion: reduce)").matches;
              if (prefersReduced) {
                el.scrollIntoView();
              } else {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            className="animate-bounce focus:outline-none"
          >
            <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
