import React from "react"; 

const Card = ({id, name , email}) => {
    return (
        <div className="bg-light-green dib mr4 mb3 grow pa3 mt2 br3 bw2 shadow-5 tc f7">
            <img alt="robot" src = {`https://robohash.org/${id}?100x100`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;