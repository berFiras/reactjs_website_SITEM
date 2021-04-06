import React from "react";
import { ClientsContainer, SliderTrack, Slide, Img } from "./ClientsElements";

function ClientsSection({
  lightBg,
  id,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
}) {
  return (
    <ClientsContainer lightBg={lightBg} id={id}>
      <SliderTrack>
        <Slide>
          <Img src={img1} />
        </Slide>
        <Slide>
          <Img src={img2} />
        </Slide>
        <Slide>
          <Img src={img3} />
        </Slide>
        <Slide>
          <Img src={img4} />
        </Slide>
        <Slide>
          <Img src={img5} />
        </Slide>
        <Slide>
          <Img src={img6} />
        </Slide>
        <Slide>
          <Img src={img7} />
        </Slide>
        <Slide>
          <Img src={img8} />
        </Slide>
        <Slide>
          <Img src={img9} />
        </Slide>
        <Slide>
          <Img src={img10} />
        </Slide>

        <Slide>
          <Img src={img1} />
        </Slide>
        <Slide>
          <Img src={img2} />
        </Slide>
        <Slide>
          <Img src={img3} />
        </Slide>
        <Slide>
          <Img src={img4} />
        </Slide>
        <Slide>
          <Img src={img5} />
        </Slide>
        <Slide>
          <Img src={img6} />
        </Slide>
        <Slide>
          <Img src={img7} />
        </Slide>
        <Slide>
          <Img src={img8} />
        </Slide>
        <Slide>
          <Img src={img9} />
        </Slide>
        <Slide>
          <Img src={img10} />
        </Slide>
      </SliderTrack>
    </ClientsContainer>
  );
}

export default ClientsSection;
