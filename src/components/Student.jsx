import React from 'react';

const Student = ({ studentInfo }) => {
    return (
        <div>
            <p>Name: {studentInfo.name}</p>
            <p>Last Name: {studentInfo.lastName}</p>
            <p>Age: {studentInfo.age}</p>
            <p>City Of Birth: {studentInfo.placeOfBirth.city}</p>
            <p>Country Of Birth: {studentInfo.placeOfBirth.country}</p>
            <p>Zip: {studentInfo.placeOfBirth.zip}</p>
        </div>
    );
};

export default Student;
