import React, { useState } from 'react';

function WordCountForm() {
    const [text, setText] = useState('');
    const [wordCount, setWordCount] = useState(0);

    const handleTextChange = (event) => {
        setText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (text == '') {
            alert(
                'Please insert some input in the textbox area!!'
            )
        }
        fetch('http://localhost:8000/api/core/word_count/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text })
        })
            .then(response => response.json())
            .then(data => setWordCount(data.word_count))
            .catch(error => console.log(error));
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Number of Words: </h1>
            <h1>{wordCount}</h1>
            <textarea value={text} onChange={handleTextChange} rows='20' cols='90' />
            <br></br>
            <br></br>
            <button  type="submit">Count words</button>
        </form>
    );
}

export default WordCountForm;
