// src/animations/linkTextAnimation.ts
import { useRef } from "react";
import gsap from "gsap";

export const useHoverGsap = () => {
    const elementRef = useRef<HTMLAnchorElement | null>(null);

    const onEnter = () => {
        gsap.to(elementRef.current, {
            scale: 1.05,
            duration: 0.25,
            ease: "power2.out",
        });
    };

    const onMove = (e: React.MouseEvent) => {
        if (!elementRef.current) return;

        const rect = elementRef.current.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);

        gsap.to(elementRef.current, {
            x: x * 0.25,
            y: y * 0.25,
            duration: 0.2,
            ease: "power2.out",
        });
    };

    const onLeave = () => {
        gsap.to(elementRef.current, {
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power3.out",
        });
    };

    return {
        elementRef,
        onEnter,
        onMove,
        onLeave,
    };
};
