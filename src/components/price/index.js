import React from "react";
import {
  PriceContainer,
  PriceH1,
  PriceWrapper,
  PriceCard,
  PriceIcon,
  PriceH2,
  PriceP,
} from "./PriceElements";
const Price = () => {
  return (
    <PriceContainer>
      <PriceH1>Nos Offres</PriceH1>
      <PriceWrapper>
        <PriceCard>
          <PriceIcon />
          <PriceH2>lalalalal</PriceH2>
          <PriceP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </PriceP>
        </PriceCard>
        <PriceCard>
          <PriceIcon />
          <PriceH2>lalalalal</PriceH2>
          <PriceP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </PriceP>
        </PriceCard>
        <PriceCard>
          <PriceIcon />
          <PriceH2>lalalalal</PriceH2>
          <PriceP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </PriceP>
        </PriceCard>
      </PriceWrapper>
    </PriceContainer>
  );
};

export default Price;
