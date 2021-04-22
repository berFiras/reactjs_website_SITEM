import styled from "styled-components";

export const PriceContainer = styled.div`
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }
  @media screen and (max-width: 480px) {
    height: 1100px;
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
  font-size: 2.6rem;
  color: #000;
  font-weight: bold;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 10px;
  }
`;
export const PriceCard = styled.div`
  background: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  border-radius: 10px;
  height: 450px;
  padding: 30px 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    border: solid 5px #2a65b0;
    cursor: pointer;
  }
  @media screen and (max-width: 480px) {
    height: 320px;
    padding: 20px 0px;
  }
`;
export const PriceIcon = styled.img`
  height: 80px;
  width: 80px;
  margin-bottom: 10px;
`;
export const PriceH2 = styled.h2`
  text-transform: uppercase;
  font-size: 1.2rem;
  margin-bottom: 20px;
  @media screen and (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 15px;
  }
`;
export const PriceH3 = styled.h3`
  /* text-transform: uppercase; */
  font-size: 0.9rem;
  margin-bottom: 50px;
  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
    margin-bottom: 20px;
  }
`;

export const PriceP = styled.p`
  font-size: 0.9rem;
  text-align: center;
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
    margin-bottom: 15px;
  }
`;
export const List = styled.ul`
  margin-top: 20%;
  margin-left: 25px;
  list-style: none;
  padding: 0;
  @media screen and (max-width: 480px) {
    margin-top: 10%;
  }
`;

export const ListItem = styled.li`
  font-size: 1.1rem;
  margin-bottom: 25px;
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
    margin-bottom: 20px;
  }
`;
