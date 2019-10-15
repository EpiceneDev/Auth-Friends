import React from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../actions';

export default function Dashboard() {
    return(
        <h1>Dashboard</h1>
    )
};

export default connect(null, {getFriends})(Dashboard);