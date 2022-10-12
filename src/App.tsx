import { useEffect } from "react";
import gql from "graphql-tag";
import "./App.css";
import { useQuery } from "urql";

const Query = gql`
  query {
    todos {
      id
      title
      is_public
      is_completed
      user_id
    }
  }
`;

function App() {
  const [result] = useQuery({
    query: Query,
  });

  const { data, fetching, error } = result;
  useEffect(() => {
    console.log(data);
  }, [data]);

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return <div>Loading Failed</div>;
}

export default App;
