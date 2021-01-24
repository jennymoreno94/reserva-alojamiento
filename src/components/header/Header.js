import React, { useContext } from "react";
import { AppContext } from "../../data/AppContext";
import {
  HeaderWrapper,
  HeaderTittle,
  HeaderBody
} from "../../components/header/HeaderStyled";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faHotel } from "@fortawesome/free-solid-svg-icons";
library.add(faHotel);

export function Header() {
  const { filters } = useContext(AppContext);

  let initialDate = new Date(`${filters.initialDate}T12:00:00Z`);
  let endDate = new Date(`${filters.endDate}T12:00:00Z`);
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  return (
    <section>
      <HeaderWrapper>
        <HeaderTittle>
          {" "}
          <Icon icon="hotel" /> Hoteles
        </HeaderTittle>
        <HeaderBody>
          Búsqueda de hoteles{" "}
          {filters.size !== "0"
            ? filters.size === "1"
              ? "pequeños"
              : filters.size === "2"
              ? "medianos"
              : filters.size === "3"
              ? "grandes"
              : String.empty
            : String.empty}
          {filters.price !== "0"
            ? ` con precio desde 
          ${Array.from({ length: filters.price })
            .map(() => "$")
            .join("")},`
            : String.empty}
          {filters.initialDate !== ""
            ? ` desde el  ${initialDate.toLocaleDateString("es-ES", options)}`
            : String.empty}
          {filters.endDate !== ""
            ? ` hasta el ${endDate.toLocaleDateString("es-ES", options)}`
            : String.empty}
          {filters.country !== "todos"
            ? ` en ${filters.country}`
            : String.empty}
        </HeaderBody>
      </HeaderWrapper>
    </section>
  );
}
