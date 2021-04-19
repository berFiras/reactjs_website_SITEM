import styled from "styled-components";

export const PriceContainer = styled.div`
  height: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }
  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const PriceWrapper = styled.div`
  max-width: 850px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  grid-gap: 16px;
  /* padding: 0 50px; */

  @media screen and (max-width: 850px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;
export const PriceH1 = styled.h1`
  font-size: 2.5rem;
  color: #000;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
export const PriceCard = styled.div`
  background: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: 450px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    border: solid 5px #2a65b0;
    cursor: pointer;
  }
`;
export const PriceIcon = styled.img`
  height: 80px;
  width: 80px;
  margin-bottom: 10px;
`;
export const PriceH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const PriceP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
