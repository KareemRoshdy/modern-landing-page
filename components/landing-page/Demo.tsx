"use client";

import { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

import app from "@/app/assets/04.png";

const Demo = () => {
  const appImageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: appImageRef,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [14, -10]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 2]);

  return (
    <div className="sm:w-full text-foreground overflow-hidden px-2 py-20 sm:py-24 sm:max-w-[1400px] sm:mx-auto">
      <h2 className="mt-14 text-center text-5xl sm:text-6xl font-bold opacity-70">
        Test your thumbnails without limits
      </h2>

      <p className="text-xl text-center mt-5 text-foreground/80">
        Review your thumbnails on desktop, tablet or mobile UIs
      </p>

      <motion.div
        ref={appImageRef}
        style={{
          opacity: opacity,
          rotateX: rotateX,
          transformPerspective: "700px",
        }}
        className="w-[300px] mx-auto md:w-full mt-14 rounded-xl overflow-hidden shadow-xl shadow-purple-500/10 border border-foreground/10"
      >
        <Image src={app} alt="aoo demo" className="w-full h-auto" />
      </motion.div>
    </div>
  );
};

export default Demo;
