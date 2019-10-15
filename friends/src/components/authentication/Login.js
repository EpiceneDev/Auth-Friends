import React, { useState } from 'react';

export default Login = (props) => {
    const [user, setUser] = useState({
        name: '',
        password: '',
        isLoading: false
    });

    handleChange = e => {
        console.log(e.target.value)
        setUser({...user, [e.target.name]: event.target.value});
    }

    onSubmit = e => {
        e.preventDefault();
    }


    return (
        <div className='login'>
            <form submit={onSubmit}>
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