import React, { useContext } from "react";
import { AppContext } from "../../data/AppContext";
import {
  CardText,
  CardWrapper,
  CardBoddy,
  CardImage,
  CardTittle,
  CardButton,
  CardMensaje,
  IconStyle,
  CardStyleFlex,
  CardIconPrice,
  CardSubtitle,
  CardFlexDiv
} from "../../components/card/CardStyled";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faBed, faMapMarker } from "@fortawesome/free-solid-svg-icons";
library.add(faBed);
library.add(faMapMarker);
export function Card() {
  const { dataFilters } = useContext(AppContext);

  return (
    <>
      {dataFilters.length !== 0 ? (
        <CardWrapper>
          {dataFilters.map((item, index) => {
            return (
              <section key={index}>
                <CardBoddy>
                  <CardImage src={item.photo} alt="imagen" />
                  <CardTittle>{item.name}</CardTittle>
                  <CardText>{item.description} </CardText>
                  <CardStyleFlex>
                    <Icon style={IconStyle} icon="map-marker" />
                    <CardSubtitle>
                      {" "}
                      {`${item.city}, ${item.country}`}
                    </CardSubtitle>
                  </CardStyleFlex>
                  <CardFlexDiv>
                    <Icon style={IconStyle} icon="bed" />
                    <CardSubtitle> {item.rooms} habitaciones</CardSubtitle>
                    <CardIconPrice>
                      {Array.from({ length: item.price })
                        .map(() => "$")
                        .join("")}
                    </CardIconPrice>
                  </CardFlexDiv>
                  <CardButton>Reservar </CardButton>
                </CardBoddy>
              </section>
            );
          })}
        </CardWrapper>
      ) : (
        <section>
          <div>
            <CardMensaje>No se encontraron coincidencias </CardMensaje>
          </div>
        </section>
      )}
    </>
  );
}
