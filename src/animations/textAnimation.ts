import { gsap } from "gsap";

export const textFadeUp = (element: HTMLElement | null) => {
  if (!element) return;

  gsap.from(element, {
    opacity: 0,
    y: 30,
    ease: "power3.out",
  });

  gsap.to(element, {
    opacity: 1,
    y: 0,
    duration: 3,
    ease: "power3.out",
  });
};
