"use client";

export function initScrollReveal() {
  if (typeof window === "undefined") return;

  const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
  els.forEach((el) => el.setAttribute("data-revealed", "false"));

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).setAttribute("data-revealed", "true");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
  );

  els.forEach((el) => io.observe(el));

  // Safety fallback — forces reveal after 3.5s no matter what
  setTimeout(() => {
    document
      .querySelectorAll<HTMLElement>('[data-reveal][data-revealed="false"]')
      .forEach((el) => el.setAttribute("data-revealed", "true"));
  }, 3500);
}
