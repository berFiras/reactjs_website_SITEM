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
            Confiez l'atteinte de vos objectifs à des experts en social média
            Notre objectif est de vous accompagner dans la mise en place d’une
            stratégie digitale complète afin de booster l’engagement de votre
            communauté, menant ainsi à une notoriété plus élevée et étendue de
            votre marque.
          </ServicesP>
          {/* <CardButton>Learn More</CardButton> */}
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon4} />
          <ServicesH2>Développement Web</ServicesH2>
          <ServicesP>
            SITEM s'occupe de la conception et du développement de sites
            internet spécialement adapté à vos besoins et aux attentes de votre
            audience. Nous sommes une équipe enthousiaste composée de
            développeurs talentueux, de concepteurs web créatifs, et de
            stratèges expérimentés. Nous adaptons le choix de la technologie de
            développement en fonction de vos besoins et objectifs pour vous
            offrir la solution la plus performante.
          </ServicesP>
          {/* <CardButton>Learn More</CardButton> */}
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Graphique Design</ServicesH2>
          <ServicesP>
            Pour vos besoins en graphisme, en design graphique, en conception et
            en création, Sitem vous accompagne durant vos démarches en
            communication digitale et vous propose le bon choix selon vos
            besoins et votre budget. Nous traduisons vos valeurs, vos ambitions
            et votre activité en une identité visuelle unique et porteuse de
            sens.
          </ServicesP>
          {/* <CardButton>Learn More</CardButton> */}
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon7} />
          <ServicesH2>Offre emailing</ServicesH2>
          <ServicesP>
            L’emailing fait partie des axes principaux du marketing digital et
            vous permet de renseigner votre audience cible à propos de vos
            nouveaux produits et vos dernières promotions. Selon le besoin de
            votre entreprise SITEM conçoit et rédige votre emailing et vous
            garantit un service de qualité qui s’adapte à votre stratégie web
            marketing et vous propose un service emailing qui simplifie l’envoi
            d’un email promotionnel ou publicitaire à un grand nombre de
            destinataires.
          </ServicesP>
          {/* <CardButton>Learn More</CardButton> */}
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon6} />
          <ServicesH2>Référencement site web</ServicesH2>
          <ServicesP>
            Dans le but d’accroitre l’audience et la fréquentation de votre
            site, nos conseils excellent dans tous les aspects techniques du
            référencement, optimisation des pages, structures du site,
            évaluation des liens afin d'assurer un succès marketing à long
            terme.
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
