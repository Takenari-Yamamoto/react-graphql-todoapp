import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useQuery } from "urql";

export interface Pokemon {
  pokemons?: Poke[] | null;
}
export interface Poke {
  id: string;
  name: string;
  __typename: string;
}

const Query = `
query Pokemons {
  pokemons {
    id
    name
  }
}
`;

function App() {
  const [result] = useQuery<Pokemon>({
    query: Query,
  });
  const { data, fetching, error } = result;
  const [pokemons, setPokemons] = useState<Poke[] | null | undefined>(null);

  useEffect(() => {
    setPokemons(data?.pokemons);
  }, [data]);

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  if (data && pokemons) {
    return (
      <div className='App'>
        {pokemons.map((poke, i) => (
          <div key={i}>
            <p>Number: {poke.id}</p>
            <p>Name: {poke.name}</p>
          </div>
        ))}
      </div>
    );
  }

  return <div>Loading Failed</div>;
}

export default App;
