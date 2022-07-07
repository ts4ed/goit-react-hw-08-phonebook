import { Container, Link } from './Footer.styled';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

export const Footer = () => {
  return (
    <Container>
      <Link target="_blank" href="https://github.com/ts4ed">
        <BsGithub size={30} />
      </Link>
      <Link target="_blank" href="https://www.linkedin.com/in/eduardtsukota/">
        <BsLinkedin size={30} />
      </Link>
    </Container>
  );
};
