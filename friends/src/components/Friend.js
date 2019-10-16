import React, { useState } from 'react';
import { axiosWithAuth } from '../auth/axiosWithAuth';
import { connect } from 'react-redux';
import { addFriend } from '../actions'


const AddFriend = props => {

    const [friend, setFriend] = useState({
        name: '',
        age: '',
        email: ''
    });

    const handleChange = e => {
        //console.log(e.target.value)
        setFriend({
            ...friend, 
            [e.target.name]: e.target.value
        });
        console.log("FRIEND:", friend)
    };



    const handleSubmit = e => {
        //e.preventDefault();
        props.addFriend(friend);
    };


    return (
        <div className='friend-add'>
            <form onSubmit={handleSubmit}>
                <label> 
                    Add a friend! 
                        <ul>
                            <input 
                                type='text' 
                                name='name' 
                                //value={friend.name} 
                                placeholder="Name"
                                onChange={handleChange}
                            />
                        
                        
                            <input 
                                type='number' 
                                name='age'
                                //value={friend.age}
                                placeholder='age' 
                                onChange={handleChange}
                            />
                        
                        
                            <input 
                                type='email' 
                                name='email'
                                //value={friend.email}
                                placeholder='email' 
                                onChange={handleChange}
                            />
                        
                            <button type="submit">✚</button>
                        </ul>
                </label>
            </form>
        </div>
    )
};


export default connect(null, { addFriend })(AddFriend);