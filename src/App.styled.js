import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const StyledHeader = styled.header`
  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
  background-color: #f4f4fd;
  top: 0;
  margin: auto;
  height: 100px;
  width: 100%;
`;

export const StyledNavLink = styled(NavLink)`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  color: #2e2f42;
  padding-top: 24px;
  padding-bottom: 24px;
  transition: color var(--tra);
  text-decoration: none;
  &.active {
    color: #4D5AE5;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: space-around;
  height: 100%;
`;
export const StyledNavDiv = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;
`;
export const StyledButton = styled.button`
  width: 170px;
  height: 51px;
  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.19;
  letter-spacing: 0.04em;
  color: #ffffff;
  background-color: #4d5ae5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  border-radius: 4px;
  border: inherit;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    background-color: #404bbf;
  }
  &:focus {
    background: #404bbf;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;
export const StyledP = styled.p`
  color: #434455;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  padding-top: 24px;
  padding-bottom: 24px;
`;
