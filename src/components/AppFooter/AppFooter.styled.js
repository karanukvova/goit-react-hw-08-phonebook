import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  gap: 6px;
  justify-content: center;
  align-items: center;
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 40px;
  background-color: #2e2F42;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
export const FooterText = styled.p`
  font-weight: 500;
  color: #8e8f99;
`;

export const FooterLink = styled.a`
  text-decoration: none;
  font-weight: 500;
  color: #f4f4fd;

  &:hover {
    color: #31d0aa;
  }
`;
