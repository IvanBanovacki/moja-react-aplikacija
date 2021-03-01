import './App.css';
import { useState, useEffect } from 'react';
import { getStudent } from './services';
import ValidationComponent from './components/ValidationComponent';
import CharComponent from './components/CharComponent';
import Student from './components/Student';

const App = () => {
    const [text, setText] = useState('');
    const [charArray, setCharArray] = useState([]);
    const [studentInfo, setStudentInfo] = useState(null);

    const handleTextLength = (event) => {
        setText(event.target.value);
    };

    const handleDelete = (id) => {
        let tmpArray = charArray.filter((char, index) => index !== id);
        setCharArray(tmpArray);
    };

    useEffect(() => {
        getStudent()
            .then((res) => {
                setStudentInfo(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        setCharArray(text.split(''));
    }, [text]);

    useEffect(() => {
        setText(charArray.join(''));
    }, [charArray]);

    return (
        <div className="App">
            <input value={text} type="text" onChange={handleTextLength} />
            <p>Text length: {text.length}</p>
            <ValidationComponent textLength={text.length} />
            <hr />
            <ul>
                {charArray.map((char, index) => (
                    <CharComponent key={index} id={index} char={char} handleDelete={handleDelete} />
                ))}
            </ul>
            <hr />
            {studentInfo ? <Student studentInfo={studentInfo} /> : null}
        </div>
    );
};

export default App;
