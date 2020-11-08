import { NAV_BACKGROUND, NAV_LI_BACKGROUND } from "commons/constants/colors";
import styled from "styled-components";

export const NavMenu = styled.nav`
  background-color: ${NAV_BACKGROUND};
  padding: 0 0.5em;
`;
export const ListMenu = styled.ul`
  margin: 3em 0 0 0;
  padding: 0.5em;
  list-style-type: none;
  & > li:not(:last-child) {
    margin-bottom: 1em;
  }
`;

export const ListMenuItem = styled.li`
  background-color: ${NAV_LI_BACKGROUND};

  margin: 20px auto;
  border: none;
  font-size: 22px;
  position: relative;
  color: white;

  &:before {
    transition: all 0.35s cubic-bezier(0.68, 0, 0.265, 1);
    content: "";
    width: 10%;
    height: 100%;
    background: #6d6d6d;
    color: white;
    position: absolute;
    top: 0;
    left: 0;
  }

  & > a {
    color: white;
    mix-blend-mode: luminosity;
    display: flex;
    padding: 10px 44px;
  }
  &:hover {
    &::before {
      background: #6d6d6d;
      width: 100%;
    }
  }
`;
