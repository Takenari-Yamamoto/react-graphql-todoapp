import gql from "graphql-tag";
import { memo } from "react";
import { useSubscription } from "urql";

export const Subscription = () => {
  const { res } = useSubscription();
  console.log(123, res);
  return <div>aaa</div>;
};

export default memo(Subscription);
