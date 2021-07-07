import React, { useState } from 'react';
import { axiosWithAuth } from '../../auth/axiosWithAuth';

const Login = (props) => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const handleChange = e => {
        console.log(e.target.value)
        setUser({...user, [e.target.name]: e.target.value});
    };

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .post(
                "/api/login",
                user
            )
            .then(response => {
                //console.log("user", response);
                localStorage.setItem("token", response.data.payload);
                props.history.push("/protected");
            })
            .catch(error => {
                // console.log("error", error.response);
                setUser({
                username: "",
                password: ""
                });
            });
    };


    return (
        <div className='login'>
            <form onSubmit={handleSubmit}>
                
                    <label> 
                        LOGIN 
                        <ul>
                            <input 
                                type='text' 
                                name='username' 
                                value={user.username} 
                                placeholder='Name' 
                                onChange={handleChange}
                            />
                        
                        
                            <input 
                                type='password' 
                                name='password'
                                value={user.password}
                                placeholder='Password' 
                                onChange={handleChange}
                            />
                        
                        <button>Submit</button>
                        </ul>
                    </label>
                
            </form>
        </div>
    )
};

export default Login;