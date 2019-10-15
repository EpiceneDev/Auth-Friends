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
                <Friend key={id} {...friend}>
            ))}  
        </div> 
    )
};

export default connect(null, { getFriends })(Dashboard);


//     return (
//         <>
//             {props.error && <p>{props.error}</p>}
//             {props.breweries.map(friend => (
//         <Friend key={friend.id} brewery={friend} />
//       ))}   
//         </>
//     );
// };

// const mapStateToProps = state => {
//     return {
//         // example >> key: state.key,
//         breweries: state.breweries,
//         isFetching: state.isFetching,
//         error: state.error
//     }
// }

// export default connect(mapStateToProps, { fetchFacts })(List);