import React, { useState } from 'react';
import { axiosWithAuth } from '../auth/axiosWithAuth';
import { connect } from 'react-redux';
import { addFriend } from '../actions'


const AddFriend = props => {

    const [friend, setFriend] = useState({
        name: '',
        age: '',
        password: ''
    });

    const handleChange = e => {
        console.log(e.target.value)
        setFriend({
            ...friend, 
            [e.target.name]: e.target.value
        });
        
    };



    const handleSubmit = e => {
        const id = props.match.params.id;
        e.preventDefault();
        if(friend.name != "" && friend.age != "" && friend.email != "") {
            axiosWithAuth()
                .post(
                    "/api/friends",
                    friend
                )
                .then(response => {
                    console.log("POST", response);
                    props.addFriend(response.data);
                    //setFriend({ name: "", age: "", email: "" })
                    //props.history.push("/protected");
                })
                .catch(error => {
                    // console.log("error", error.response);
                    setFriend({
                    username: "",
                    password: ""
                    });
                });
        }
    };


    return (
        <div className='friend-add'>
            <form onSubmit={props.addFriend}>
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

const mapStateToProps = state => {
    return {
        friend: state.friend 
    }
}
export default connect(mapStateToProps, { addFriend })(AddFriend);