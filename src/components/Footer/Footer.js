import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 60px;
  color: #b6b6b6;
  font-size: 0.875rem;
`;

const AuthorLink = styled.a`
  margin-left: 5px;
  color: #b6b6b6;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    color: #555555;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <p>Made with by </p>
      <AuthorLink href="https://github.com/milyzoo" target="_blank" rel="noreferrer">@milyzoo</AuthorLink>
      <p>.</p>
    </FooterContainer>
  );
}
