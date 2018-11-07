import React from 'react';

export class Main extends React.Component {
    render() {
        return (
            <div>
                <h3>The Main Page</h3>
                <button onClick={() => this.props.changeUserName('Anna')}>Change User Name</button>
            </div>
        )
    }
}