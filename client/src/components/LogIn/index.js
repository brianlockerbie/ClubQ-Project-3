import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/client';
import { MANAGER_LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';

 function LogInPage() {

    const [formState, setFormState] = useState({ email: '', password: '' });
    const [managerLogin, { error }] = useMutation(MANAGER_LOGIN);

    const handleChange = (event) => {
        const { name, value } =event.target;

        setFormState({
            ...formState,
            [name]: value,
        });

    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const { data } = await managerLogin({
            variables: { ...formState },
          });
    
          Auth.login(data.managerLogin.token);
        } catch (e) {
          console.error(e);
        }
        await error ? <div>Login failed</div> : <div>You are now logged in!</div>
        // clear form values
        setFormState({
          email: '',
          password: '',
        });
      };



    return (
        
        <div className="text-center m-5-auto">
        <h2>Sign in</h2>
        <form onSubmit={handleFormSubmit} >
            <p>
                <label >Email address</label><br/>
                <input type="email" name="email" id="email"
                placeholder="Your email"
                value={formState.email}
                style={{marginBottom:'15px',marginTop:'10px', textAlign:'center'}}
                onChange={handleChange} required />
            </p>
            <p>
                <label style={{}}>Password</label>
                {/* <Link to="/forget-password"><label className="right-label">Forget password?</label></Link> */}
                <br/>
                <input placeholder="******" type="password" name="password" 
                id="password"
                value={formState.password}
                onChange={handleChange}
                style={{marginBottom:'15px',marginTop:'10px', textAlign:'center'}}
                required />
            </p>
            <p>
                <button id="sub_btn" type="submit">Login</button>
            </p>
        </form>
        {error && <div>Login failed</div>}
    </div>
    )
}

export default LogInPage;