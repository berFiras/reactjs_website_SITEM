import React from "react";
import {
  PriceContainer,
  PriceH1,
  PriceWrapper,
  PriceCard,
  // PriceIcon,
  PriceH2,
  PriceP,
  List,
  ListItem,
  PriceH3,
} from "./PriceElements";
const Price = () => {
  return (
    <PriceContainer id="offre">
      <PriceH1>Nos Offres</PriceH1>
      <PriceWrapper>
        <PriceCard>
          {/* <PriceIcon /> */}
          <PriceH2>Standart </PriceH2>
          <PriceH3>à 119€ ttc/mois</PriceH3>
          <PriceP>
            L'offre idéal pour les petites entreprises qui recherchent une
            présence sur les réseaux.
          </PriceP>
          <List>
            <ListItem>Deux actions par semaine sur deux réseaux </ListItem>
            <ListItem>Rétroplanning Mensuel </ListItem>
            <ListItem>Un espace client dédié</ListItem>
          </List>
        </PriceCard>
        <PriceCard>
          {/* <PriceIcon /> */}
          <PriceH2>Platinium </PriceH2>
          <PriceH3>à 249€ ttc/mois</PriceH3>
          <PriceP>
            Vous souhaitez de la visibilité avec un petit budget n'hésitez plus
          </PriceP>
          <List>
            <ListItem>Deux actions par semaine sur deux réseaux </ListItem>
            <ListItem>Rétroplanning Mensuel </ListItem>
            <ListItem>Un espace client dédié</ListItem>
          </List>
        </PriceCard>
        <PriceCard>
          {/* <PriceIcon /> */}
          <PriceH2>Premium </PriceH2>
          <PriceH3>à 349€ ttc/mois</PriceH3>
          <PriceP>Vous souhaitez une forte visibilité sur les réseaux</PriceP>
          <List>
            <ListItem>Deux actions par semaine sur deux réseaux </ListItem>
            <ListItem>Rétroplanning Mensuel </ListItem>
            <ListItem>Un espace client dédié</ListItem>
          </List>
        </PriceCard>
      </PriceWrapper>
    </PriceContainer>
  );
};

export default Price;
