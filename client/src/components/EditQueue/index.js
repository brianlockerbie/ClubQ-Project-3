import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Auth from "../../utils/auth";
import { QUERY_QUEUES } from "../../utils/queries";

function EditQueue() {
  const { loading, data } = useQuery(QUERY_QUEUES);
  const queue = data?.queues || [];
  console.log(queue);
  return (
   
    <main>
      <div>
        <div>
          {queue &&
            queue.map((queue) => (
              <div key={queue._id}>
                <p>
                  {queue.queueId} Queue on {queue.createdAt}
                </p>
                <div>
                  {queue.customers.map((customer) => (
                    <div key={customer._id}>
                    {customer.username}
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </main>
   );
}

export default EditQueue;
