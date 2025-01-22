import React from 'react';

function Greetings(props) {
    const {name, age, place} = props;
    return <div style={{background: "lightblue", padding: "1em", marginBottom: "1em"}}>
        <h2>Hi {name},</h2>
        <h3>Good to see you at {place}</h3>
        <h3>You are {age} years old now! </h3>
    </div>
}

export default Greetings;
