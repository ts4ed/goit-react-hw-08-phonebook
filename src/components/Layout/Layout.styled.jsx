import styled from 'styled-components';
import bghome from '../Images/bghome.jpg';

export const Main = styled.main`
  display: flex;
  justify-content: center;
  height: calc(100vh - 50px);
  background: linear-gradient(
      335deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(94, 94, 98, 0.5) 100%
    ),
    url(${bghome});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: #fff;
  padding-top: 50px;
`;
