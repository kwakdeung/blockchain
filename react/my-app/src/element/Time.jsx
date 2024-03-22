import React from "react";

function Time(props) {
    return (
        <div>
            <h2>Time: {new Date().toLocaleTimeString()}</h2>
        </div>
    );
}

export default Time;