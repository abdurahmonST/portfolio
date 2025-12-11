// src/components/HoverAnimLink.tsx
import { NavLink } from "react-router-dom";
import { useHoverGsap } from "../animations/linkTextAnimation";

type Props = {
    to: string;
    children: React.ReactNode;
};

const HoverAnimLink = ({ to, children }: Props) => {
    const { elementRef, onEnter, onMove, onLeave } = useHoverGsap();

    return (
        <NavLink
            ref={elementRef}
            to={to}
            onMouseEnter={onEnter}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            className="NavbarLink"
            style={{ display: "inline-block" }}
        >
            {children}
        </NavLink>
    );
};

export default HoverAnimLink;
