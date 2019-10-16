import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../actions';
import Card from './Card';
import AddFriend from './Friend'

const Dashboard = props => {
    console.log(props)
    useEffect(() => {
        props.getFriends();
    }, []);

    if(props.isFetching) {
        // usually a spinner (react-loader-spinner)
        return <h2>Loading List...</h2>
    };
    return(
        <div>
            <h1>Dashboard</h1>
            {props.error && <p>{props.error}</p>}
            <AddFriend />
            {props.friends.map(friend => {
                return (
                    <div>
                        <Card key={friend.id} {...friend} />
                        <button>EDIT</button>
                        <button>DELETE</button>
                    </div>
                )
            })}  
        </div> 
    )
};
const mapStateToProps = state => {
    return {
        friends: state.friends,
        isFetching: state.isFetching,
        error: state.error
    }
}
export default connect(mapStateToProps, { getFriends })(Dashboard);