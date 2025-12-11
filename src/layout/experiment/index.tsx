import { useRef, useEffect } from "react";
import gsap from "gsap";

const Experiment = () => {
    const textRef = useRef<HTMLSpanElement | null>(null);
    const tl = useRef<gsap.core.Timeline | null>(null);

    useEffect(() => {
        // timeline faqat DOM tayyor bo‘lganda yaratiladi
        tl.current = gsap.timeline({ paused: true })
            .to(textRef.current, {
                y: -8,
                duration: 0.3,
                ease: "power2.out"
            })
            .to(
                textRef.current,
                {
                    scale: 1.15,
                    color: "#a855f7",
                    duration: 0.3
                },
                "-=0.2"
            );
    }, []);

    return (
        <span
            ref={textRef}
            onMouseEnter={() => tl.current?.play()}
            onMouseLeave={() => tl.current?.reverse()}
            style={{ display: "inline-block", fontSize: "28px", cursor: "pointer" }}
        >
            Premium Hover
        </span>
    );
};

export default Experiment;
