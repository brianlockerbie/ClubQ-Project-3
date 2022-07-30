import React from "react";
import { useQuery } from "@apollo/client";
import { CURRENT } from "../../utils/queries";
import JoinForm from "../../pages/JoinForm.js";

const OnHomePage = () => {
  const { data } = useQuery(CURRENT);
  const Current = data?.current || [];
  return (
    <main>
      <h2>Join the Queue!</h2>
      <h3>Today's Queue Id: {Current.queueId}</h3>
      <JoinForm />
    </main>
  );
};

export default OnHomePage;
