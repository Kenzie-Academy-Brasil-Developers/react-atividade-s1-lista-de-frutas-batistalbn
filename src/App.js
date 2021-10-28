import "./App.css";
import { useState } from "react";

import TotalPrice from "./components/totalPrice";
import FruitList from "./components/frutas";
import Button from "./components/button/button";

function App() {
  const [fruits, setFruits] = useState([
    { name: "Banana", color: "yellow", price: 2 },
    { name: "Cherry", color: "red", price: 3 },
    { name: "Strawberry", color: "red", price: 4 },
  ]);

  function filterRedFruits() {
    return setFruits(
      fruits.filter((item) => {
        return item.color === "red";
      })
    );
  }

  return (
    <div className="App">
      <TotalPrice totalFruits={fruits} />
      <FruitList namelist={fruits} />
      <Button click={filterRedFruits} />
    </div>
  );
}

export default App;
