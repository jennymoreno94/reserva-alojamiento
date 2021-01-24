import React, { useContext, useState } from "react";
import { AppContext } from "../../data/AppContext";
import {
  FilterWrapper,
  FilterBody,
  FilterInput,
  FilterSelect,
  FilterButton,
  FilterMensaje
} from "../../components/filter/FilterStyled";

export function Filter() {
  const { hotelData, setDataFilters, filters, setFilters } = useContext(
    AppContext
  );
  const [initialState] = useState(filters);
  const [message, setMessage] = useState("");

  const handleChange = (filter, e) => {
    const value = e.target.value;
    setFilters((filters) => {
      return {
        ...filters,
        [filter]: value
      };
    });
  };

  React.useEffect(() => {
    setDataFilters(hotelData);
  }, [hotelData, setDataFilters]);

  React.useEffect(() => {
    if (
      filters.initialDate !== "" &&
      filters.endDate !== "" &&
      filters.endDate < filters.initialDate
    ) {
      setDataFilters("");
      setMessage(
        "la fecha de salida no puede ser inferior a la fecha de entrada. Intentelo nuevamente"
      );
      return true;
    } else {
      setMessage("");
    }

    const result = hotelData.filter(
      (data) =>
        ((filters.country !== "todos" && data.country === filters.country) ||
          filters.country === "todos") &&
        ((filters.price !== "0" && data.price === Number(filters.price)) ||
          filters.price === "0") &&
        ((filters.size === "1" && data.rooms <= 10) ||
          (filters.size === "2" && data.rooms > 10 && data.rooms <= 20) ||
          (filters.size === "3" && data.rooms > 20) ||
          filters.size === "0") &&
        ((filters.initialDate !== "" &&
          filters.endDate !== "" &&
          new Date(filters.initialDate).getTime() <= data.availabilityFrom &&
          new Date(filters.endDate).getTime() <= data.availabilityTo) ||
          (filters.initialDate === "" && filters.endDate === ""))
    );
    setDataFilters(result);
  }, [filters, hotelData, setDataFilters]);

  return (
    <FilterWrapper>
      <section>
        <FilterBody>
          <FilterInput
            type="date"
            name="initialDate"
            value={filters.initialDate}
            onChange={(e) => handleChange(e.target.name, e)}
          ></FilterInput>
          <FilterInput
            type="date"
            name="endDate"
            value={filters.endDate}
            onChange={(e) => handleChange(e.target.name, e)}
          ></FilterInput>

          <FilterSelect
            name="country"
            value={filters.country}
            onChange={(e) => handleChange(e.target.name, e)}
          >
            <option value="todos">Todos los Países</option>
            {[...new Set(hotelData.map((item) => item.country))].map(
              (element) => (
                <option key={element}>{element}</option>
              )
            )}
          </FilterSelect>

          <FilterSelect
            name="price"
            value={filters.price}
            onChange={(e) => handleChange(e.target.name, e)}
          >
            <option value="0">Cualquier Precio</option>
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
          </FilterSelect>

          <FilterSelect
            name="size"
            value={filters.size}
            onChange={(e) => handleChange(e.target.name, e)}
          >
            <option value="0">Cualquier Tamaño</option>
            <option value="1">Hotel Pequeño</option>
            <option value="2">Hotel Mediano</option>
            <option value="3">Hotel Grande</option>
          </FilterSelect>

          <FilterButton
            name="limpiarCampos"
            onClick={() => {
              setFilters(initialState);
            }}
          >
            Limpiar Campos
          </FilterButton>
        </FilterBody>
      </section>
      {message !== "" ? <FilterMensaje>{message}</FilterMensaje> : false}
    </FilterWrapper>
  );
}
