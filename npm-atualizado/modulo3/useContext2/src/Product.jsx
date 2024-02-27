import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

function Product() {
  const { data } = useContext(GlobalContext);
  if (data === null) return null;
  return (
    <div>
      Product:{" "}
      {data.map((item) => (
        <li key={item.id}>{item.nome}</li>
      ))}{" "}
    </div>
  );
}

export default Product;
