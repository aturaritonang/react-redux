import React from 'react';

export class User extends React.Component {
    render() {
        return (
            <div>
                <h2>The User Page</h2>
                <p>User Name : {this.props.userName}</p>
            </div>
        )
    }
}