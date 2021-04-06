import styled from "styled-components";

export const ClientsContainer = styled.div`
  color: #000;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};
  height: 360px;
  position: relative;
  width: 90%;
  display: grid;
  place-items: center;
  @media screen and (max-width: 768px) {
    /* padding: 100px 0; */
  }
  &::before {
    content: "";
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    height: 100%;
    position: absolute;
    width: 15%;
    z-index: 2;
  }
  &::after {
    content: "";
    background: linear-gradient(
      to right,
      rgba(255, 0, 0, 1),
      rgba(255, 0, 0, 0) 100%
    );
    height: 100%;
    position: absolute;
    width: 15%;
    z-index: 2;
  }
`;
export const SliderTrack = styled.div`
  display: flex;
  width: calc(250px * 18);
  animation: scroll 20s linear infinite;
  @keyframes scroll {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateX(calc(-250px * 8));
    }
  }
  &:hover {
    animation-play-state: paused;
    cursor: pointer;
  }
`;
export const Slide = styled.div`
  height: 200px;
  width: 250px;
  display: flex;
  align-items: center;
  padding: 15px;
  perspective: 100px;
`;

export const Img = styled.img`
  width: 100%;
  height: 70%;
  opacity: 0.5;
  filter: grayscale(100%);
  transition: transform 1s;
  &:hover {
    transform: translateZ(20px);
    filter: none;
    opacity: 1;
  }
`;
