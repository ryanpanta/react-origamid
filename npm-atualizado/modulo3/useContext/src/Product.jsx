import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

function Product() {
  const global = useContext(GlobalContext);
  return (
    <div>
      Product: {global.count}{" "}
      <button onClick={global.incrementOne}>Click for increment</button>
    </div>
  );
}

export default Product;
