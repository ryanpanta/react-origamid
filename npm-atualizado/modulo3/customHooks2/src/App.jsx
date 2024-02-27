import useFetch from "./useFetch";
import { useEffect } from "react";

const App = () => {
  const { data, request, loading, error } = useFetch();

  

  useEffect(() => {
    async function fetchData() {
      const {response, json} = await request(
        "https://ranekapi.origamid.dev/json/api/produto/"
      );
    }
    fetchData();
  }, []);

  if (error) return <p>{error}</p>;
  if (loading) return <p>Carregando..</p>;
  if (data)
    return (
      <div>
        {data.map((item) => (
          <div key={item.id}>
            <h1>{item.nome}</h1>
          </div>
        ))}
      </div>
    );
  else return null;
};

export default App;
