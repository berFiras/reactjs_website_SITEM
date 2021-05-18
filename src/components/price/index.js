import React from "react";
import {
  PriceContainer,
  PriceH1,
  PriceWrapper,
  PriceCard,
  // PriceIcon,
  PriceH2,
  PriceP,
  ListWrapper,
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
          <PriceH3>à 200 euros / mois </PriceH3>
          <PriceP>
            L'offre idéal pour les petites entreprises qui recherchent une
            présence sur les réseaux.
          </PriceP>
          <ListWrapper>
            <List>
              <ListItem>
                Deux publications par semaine sur 3 réseaux (Facebook,
                instagram, snapchat).
              </ListItem>
              <ListItem>20 euros de budget sponsoring inclus </ListItem>
              <ListItem>Espace client dédié </ListItem>
            </List>
          </ListWrapper>
        </PriceCard>
        <PriceCard>
          {/* <PriceIcon /> */}
          <PriceH2>Platinium </PriceH2>
          <PriceH3>à 320 euros / mois </PriceH3>
          <PriceP>
            Vous souhaitez de la visibilité avec un petit budget n'hésitez plus
          </PriceP>
          <ListWrapper>
            <List>
              <ListItem>
                Deux publications par semaine sur 3 réseaux sociaux(Facebook,
                instagram, snapchat).
              </ListItem>
              <ListItem>
                5 posts en story par semaine sur 3 réseaux sociaux (Facebook,
                instagram, snapchat)
              </ListItem>
              <ListItem>Une vidéo par mois</ListItem>
              <ListItem>40 euros de budget sponsoring inclus </ListItem>
              <ListItem>Espace client dédié </ListItem>
            </List>
          </ListWrapper>
        </PriceCard>
        <PriceCard>
          {/* <PriceIcon /> */}
          <PriceH2>Premium </PriceH2>
          <PriceH3>à 500€ ttc/mois</PriceH3>
          <PriceP>Vous souhaitez une forte visibilité sur les réseaux</PriceP>
          <ListWrapper>
            <List>
              <ListItem>
                3 posts par semaine sur 3 réseaux sociaux (Facebook, instagram,
                snapchat).
              </ListItem>
              <ListItem>
                5 posts en story par semaine sur 3 réseaux (Facebook, instagram,
                snapchat).
              </ListItem>
              <ListItem>Deux vidéos par mois.</ListItem>
              <ListItem>100 euros de budget sponsoring inclus.</ListItem>
              <ListItem>Espace client dédié. </ListItem>
            </List>
          </ListWrapper>
        </PriceCard>
      </PriceWrapper>
    </PriceContainer>
  );
};

export default Price;
