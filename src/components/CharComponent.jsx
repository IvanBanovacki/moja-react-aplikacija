import React from 'react';

const CharComponent = ({ char, handleDelete, id }) => {
    return (
        <li className="char" onClick={() => handleDelete(id)}>
            {char === ' ' ? <p>&#9141;</p> : <p>{char}</p>}
        </li>
    );
};

export default CharComponent;
