import gql from "graphql-tag";

const Query = gql`
  subscription {
    todos {
      id
      title
      is_public
      is_completed
      user_id
    }
  }
`;

const handleSubscription = (messages = [], response) => {
  return [response, ...messages];
};

export const useSubscription = () => {
  const [res] = useSubscription({ query: Query }, handleSubscription);

  useEffect(() => {
    console.log(res);
  }, [res]);

  return { res };
};
