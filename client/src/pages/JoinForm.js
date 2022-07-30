import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_CUSTOMER } from "../utils/mutations";
import { CURRENT } from "../utils/queries";


const JoinForm = () => {
  const [addCustomer] = useMutation(ADD_CUSTOMER);
  const { data } = useQuery(CURRENT);
  const Current = data?.current || [];
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const temp = await addCustomer({
        variables: { queueId: Current.queueId, ...formState },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <h5 style={{marginTop:'100px',marginBottom:'25px'}}>Enter your details below</h5>
      <form onSubmit={handleFormSubmit}>
        <input
          placeholder="Username"
          name="username"
          type="username"
          id="username"
          value={formState.username}
          onChange={handleChange}
          style={{marginRight:'10px', marginBottom:'15px'}}
          required
        /><span>{`   `}</span>
        <input
          placeholder="Email"
          name="email"
          type="email"
          id="email"
          value={formState.email}
          onChange={handleChange}
          style={{marginRight:'10px', marginBottom:'15px'}}
          required
        /><span>{`   `}</span>
        <input
          placeholder="Phone (111-222-3333)"
          name="phone"
          type="phone"
          id="phone"
          value={formState.phone}
          onChange={handleChange}
          style={{marginRight:'10px', marginBottom:'15px'}}
          required
        /><br/><br/>
         <input style={{ marginBottom:'15px'}} type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service.</a></span>
         <br/>
        <button className="btn d-block w-100" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default JoinForm;
