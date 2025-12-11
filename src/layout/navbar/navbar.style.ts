import styled from "styled-components";

export const NavbarContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
    gap: 100px;
`;

export const NavbarLinks = styled.ul`
    display: flex;
    color: #D9D9D9;
    background-color: #1E1E1E;
    padding: 10px 28px;
    gap: 20px;
    border-radius: 12px;
    list-style: none;
    text-decoration: none;

    .NavbarLink {
        font-size: 24px;
        text-decoration: none;
        list-style: none;
        color: #D9D9D9;
    }
`;

export const Logo = styled.div`
    font-family: 'Outfit', sans-serif;
    font-weight: 100;
    font-size: 24px;
    color: #1E1E1E;
    max-width: 158px;
    text-align: center;
    cursor: pointer;
`;

export const Resume = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 11px 14px;
    background-color: #A8DB24;
    border-radius: 12px;
    cursor: pointer;

    p {
        font-size: 24px;
        color: #1E1E1E;
    }
`