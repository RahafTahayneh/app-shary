"use client";
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import clsx from "clsx";

const LottieAnimation = ({ animationData, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const anim = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData,
      });

      return () => {
        anim.destroy();
      };
    }
  }, [animationData]);

  return (
    <div className={clsx("h-90 w-90 mx-auto", className)} ref={containerRef} />
  );
};

export default LottieAnimation;