// import React from "react"; Not necessary to explicitly import react.

import CoreConcept from "./components/CoreConcept/CoreConcept";
import Examples from "./components/Examples/Examples";
import Header from "./components/UI/Header/Header";

function App() {
  console.log("App component rendering");
  return (
    <>
      <Header />
      <main>
        <CoreConcept />
        <Examples />
      </main>
    </>
  );
}

export default App;
