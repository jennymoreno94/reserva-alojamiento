import React, { useState } from "react";
import hotelList from "../data/data.js";
export const AppContext = React.createContext(hotelList);

export function AppProvider({ children }) {
  const [hotelData] = useState(hotelList);
  const [dataFilters, setDataFilters] = useState(hotelList);

  const [filters, setFilters] = useState({
    price: "0",
    country: "todos",
    size: "0",
    initialDate: "",
    endDate: ""
  });

  return (
    <AppContext.Provider
      value={{
        hotelData,
        dataFilters,
        setDataFilters,
        filters,
        setFilters
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
