import React from "react";
import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-11.svg";
// import Icon3 from "../../images/svg-1111.svg";
import Icon4 from "../../images/dev.svg";
import Icon5 from "../../images/content.svg";
import Icon6 from "../../images/seo.svg";
import Icon7 from "../../images/strategy.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesWrapper,
  ServicesCard,
  // CardButton,
  ServicesIcon,
  ServicesP,
} from "./ServicesElements";

function Services() {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Nos Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Community Management</ServicesH2>
          <ServicesP>
            Notre agence SITEM s’occupe pour vous d’interagir avec vos
            communautés, de les élargir en convertissant des internautes
            influents et de produire le contenu requis pour les animer.
          </ServicesP>
          {/* <CardButton>Learn More</CardButton> */}
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon4} />
          <ServicesH2>Développement Web</ServicesH2>
          <ServicesP>
            Nous développons des sites internet qui associent créativité,
            technologie de pointe et facilité d’utilisation. Que vous souhaitiez
            informer, communiquer, vendre ou recruter, SITEM, votre agence de
            solutions digitales, conçoit votre site sur-mesure.
          </ServicesP>
          {/* <CardButton>Learn More</CardButton> */}
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Graphique Design</ServicesH2>
          <ServicesP>
            L’agence SITEM met à votre disposition un département artistique et
            Créa pour surfer sur l’ensemble des spécifications du métier CM : le
            design destiné aux RS, design Web, design print. Nous prenons aussi
            en charge la couverture visuelle (Photos) et audiovisuelle (Vidéos).
          </ServicesP>
          {/* <CardButton>Learn More</CardButton> */}
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon7} />
          <ServicesH2>Stratégie marketing digital</ServicesH2>
          <ServicesP>
            SITEM, votre agence digitale, vous offre un conseil en stratégie
            digitale pour challenger votre modèle économique et vous préconise
            la stratégie marketing adaptée qui suscitera le désir de votre
            audience cible.
          </ServicesP>
          {/* <CardButton>Learn More</CardButton> */}
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon6} />
          <ServicesH2>Référencement site web</ServicesH2>
          <ServicesP>
            SITEM vous offre une stratégie de référencement qui consiste à
            intégrer, sur les pages de votre site web, les tendances recherchées
            par votre cible dans votre région.
          </ServicesP>
          {/* <CardButton>Learn More</CardButton> */}
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon5} />
          <ServicesH2>Création de contenu</ServicesH2>
          <ServicesP>
            La création de contenus demande deux choses : des idées et du temps.
            SITEM produit des contenus adaptés à votre cible et à votre
            stratégie éditoriale et optimisés pour le référencement naturel
            (SEO) et pour la diffusion sur les réseaux sociaux.
          </ServicesP>
          {/* <CardButton to="contactus">Learn More</CardButton> */}
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
}

export default Services;
