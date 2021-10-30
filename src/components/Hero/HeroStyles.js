import styled from 'styled-components';

export const Img = styled.img`
  width: 400px;
  object-fit: cover;
  overflow: hidden;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  border-radius:3rem;
  @media screen and (max-width: 1130px) {
    opacity: 0;
  }
`

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
