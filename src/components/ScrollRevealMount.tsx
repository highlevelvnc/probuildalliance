"use client";
import { useEffect } from "react";
import { initScrollReveal } from "@/lib/scrollReveal";

export function ScrollRevealMount() {
  useEffect(() => {
    initScrollReveal();
  }, []);
  return null;
}
