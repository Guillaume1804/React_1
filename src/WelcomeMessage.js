import React from 'react';


function WelcomeMessage(props) {
    if (props.name === "") {
    return <h1>Hello User</h1>;

    }
    else {
        return <h1>Hello {props.name}</h1>;
    }
}

export default WelcomeMessage;