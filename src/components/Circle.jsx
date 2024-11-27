"use client";
import { motion } from "framer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// routes
const routes = {
  "/": "Home",
  "/about": "About",
  "/contact": "Contact",
};

// Animations-Variabler

const animation = (variants) => {
  return {
    variants,
    initial: "initial",
    animate: "animate",
    exit: "exit",
  };
};

export default function Circle({ children, bgColor }) {
  //hook - navigere mellem sider. Giver tilladelse til routerens funktion i komponenten.
  const router = useRouter();
  //hook - tilføj tilstand i komponenten - opret og update værdi(er). Vi siger at dimensionerne er ikke blevet fortalt endnu.
  const [dimensions, setDimensions] = useState({ width: null, height: null });
  //hook - kør side effekter i komponenten.
  useEffect(() => {
    //ændre størrelsen: tag fat i setDimensions-funktionen til at opdatere
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    //kør funktionen
    resize();
    //giv window-property en e-listener
    window.addEventListener("resize", resize);
    // derefter fjern ændringen
    return () => {
      window.removeEventListener("resize", resize);
    };
  });
  return <div></div>;
}
