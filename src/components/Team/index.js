import React from "react";
import Icon1 from "../../images/avatar/avatar-1.png";
import Icon2 from "../../images/avatar/avatar-2.png";
import Icon3 from "../../images/avatar/avatar-3.png";
import Icon4 from "../../images/avatar/avatar-4.png";
import Icon5 from "../../images/avatar/avatar-5.png";
import Icon6 from "../../images/avatar/avatar-6.png";
import Icon7 from "../../images/avatar/avatar-7.png";
import Icon8 from "../../images/avatar/avatar-8.png";
import Icon9 from "../../images/avatar/avatar-9.png";
import Icon10 from "../../images/avatar/avatar-10.png";
import {
  CardsContainer,
  CardsH1,
  TeamsWrapper,
  TeamsCard,
  CardsIcon,
  CardsH2,
  CardsP,
} from "./TeamElements";

function Team() {
  return (
    <CardsContainer id="team">
      <CardsH1>Our Team</CardsH1>
      <TeamsWrapper>
        <TeamsCard>
          <CardsIcon src={Icon1} />
          <CardsH2>name</CardsH2>
          <CardsP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </CardsP>
        </TeamsCard>
        <TeamsCard>
          <CardsIcon src={Icon2} />
          <CardsH2>name</CardsH2>
          <CardsP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </CardsP>
        </TeamsCard>
        <TeamsCard>
          <CardsIcon src={Icon3} />
          <CardsH2>name</CardsH2>
          <CardsP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </CardsP>
        </TeamsCard>
        <TeamsCard>
          <CardsIcon src={Icon4} />
          <CardsH2>name</CardsH2>
          <CardsP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </CardsP>
        </TeamsCard>
        <TeamsCard>
          <CardsIcon src={Icon5} />
          <CardsH2>name</CardsH2>
          <CardsP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </CardsP>
        </TeamsCard>
        <TeamsCard>
          <CardsIcon src={Icon6} />
          <CardsH2>name</CardsH2>
          <CardsP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </CardsP>
        </TeamsCard>
        <TeamsCard>
          <CardsIcon src={Icon7} />
          <CardsH2>name</CardsH2>
          <CardsP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </CardsP>
        </TeamsCard>
        <TeamsCard>
          <CardsIcon src={Icon8} />
          <CardsH2>name</CardsH2>
          <CardsP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </CardsP>
        </TeamsCard>
        <TeamsCard>
          <CardsIcon src={Icon9} />
          <CardsH2>name</CardsH2>
          <CardsP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </CardsP>
        </TeamsCard>
        <TeamsCard>
          <CardsIcon src={Icon10} />
          <CardsH2>name</CardsH2>
          <CardsP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </CardsP>
        </TeamsCard>
      </TeamsWrapper>
    </CardsContainer>
  );
}

export default Team;
