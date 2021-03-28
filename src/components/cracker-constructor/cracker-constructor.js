import React from 'react';

import './cracker-constructor.scss';

// let slider = document.getElementById("myRange");
// let output = document.getElementById("demo");
// output.innerHTML = slider.value;

// slider.oninput = function() {
//     output.innerHTML = this.value;
// }

const CrackerConstructor = () => {
    return ( 
        <div>
            <h1>Cracker constructor</h1>
            <div className = "slidecontainer">
                <input type = "range" min = "1" max = "100" value = "50" className = "slider" id = "myRange"/>
            </div>
        </div>
    )
}

export default CrackerConstructor;