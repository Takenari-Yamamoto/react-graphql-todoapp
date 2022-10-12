import React, { useEffect, useState } from "react";
import gql from "graphql-tag";
import logo from "./logo.svg";
import "./App.css";
import { useQuery } from "urql";

interface Pokemon {
  pokemons?: Poke[] | null;
}
interface Poke {
  id: string;
  name: string;
  __typename: string;
}

const Query = gql`
  query Pokemons {
    pokemons {
      id
      name
    }
  }
`;

function App() {
  const limit = 10;
  const [result] = useQuery({
    query: Query,
    variables: { limit },
  });
  const { data, fetching, error } = result;
  console.log(data);
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
