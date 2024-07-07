import React from "react";

const Searching = ({searchfield,searchchange}) => {
    return (
        <div className="pa2">
            <input type='search' 
            placeholder="searching" 
            className="pa3 ba b--green bg-lightest-blue "
            onChange={searchchange}/>
        </div>
    );
};

export default Searching