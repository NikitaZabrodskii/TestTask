import "./App.css";
import React, { useState } from "react";

import { AllRoutes } from "./components/AllRoutes";
import { Form } from "./components/Form";
import { Header } from "./components/pages/Header";
import { useLocation } from "react-router";

function App() {
  const [value, setValue] = useState("");
  const location = useLocation();

  const setHeaderTitle = (item) => {
    console.log(location.pathname);
    setValue(item);
  };

  return (
    <div className="App">
      <Header title={value} />

      <AllRoutes setHeaderTitle={setHeaderTitle} />
      <Form />
    </div>
  );
}

export default App;
