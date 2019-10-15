import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../actions';
import Friend from './Friend';
const Dashboard = props => {
    console.log(props)
    useEffect(() => {
        props.fetchFacts();
    }, []);
    if(props.isFetching) {
        // usually a spinner (react-loader-spinner)
        return <h2>Loading List...</h2>
    };
    return(
        <div>
            <h1>Dashboard</h1>
            {props.error && <p>{props.error}</p>}
            {props.friends.map(friend => (
                <h2>{friend.name}</h2>
            ))}  
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