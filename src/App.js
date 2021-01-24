import React from "react";
import { Card } from "./components/card/Card";
import { Header } from "./components/header/Header";
import { Filter } from "./components/filter/Filter";
import { AppProvider } from "./data/AppContext";
import "./styles.css";

export default function App() {
  return (
    <AppProvider>
      <Header />
      <Filter />
      <Card />
    </AppProvider>
  );
}
