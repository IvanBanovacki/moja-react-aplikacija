import React from 'react';

const ValidationComponent = ({ textLength }) => {
    const validateTextLength = (min, max) => {
        if (textLength < min) return 'Text too short';
        if (textLength > max) return 'Text too long';
    };
    return (
        <div>
            <p>{validateTextLength(5, 20)}</p>
        </div>
    );
};

export default ValidationComponent;
