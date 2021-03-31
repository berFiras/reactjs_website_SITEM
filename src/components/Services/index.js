import React from "react";
import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-11.svg";
import Icon3 from "../../images/svg-111.svg";
import Icon4 from "../../images/svg-111.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesP,
} from "./ServicesElements";

function Services() {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>alalalal</ServicesH2>
          <ServicesP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit{" "}
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>alalalal</ServicesH2>
          <ServicesP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit{" "}
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>alalalal</ServicesH2>
          <ServicesP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit{" "}
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon4} />
          <ServicesH2>alalalal</ServicesH2>
          <ServicesP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit{" "}
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
}

export default Services;
