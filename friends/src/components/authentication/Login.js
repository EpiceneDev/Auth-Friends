import React, { useState } from 'react';

const Login = (props) => {
    const [user, setUser] = useState({
        name: '',
        password: '',
        isLoading: false
    });

    const handleChange = e => {
        console.log(e.target.value)
        setUser({...user, [e.target.name]: e.target.value});
    };

    const handleSubmit = e => {
        e.preventDefault();
    };


    return (
        <div className='login'>
            <form onSubmit={handleSubmit}>
                <label> 
                    LOGIN 
                        <input 
                            type='name' 
                            name='name' 
                            value={user.name} 
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
                </label>
            </form>
        </div>
    )
};

export default Login;