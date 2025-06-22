const response = await fetch('http://localhost:4000/api/sentences');
const getSentence = await response.json();

export const addSentence = async (phrase) => {
    await fetch('http://localhost:4000/api/sentences', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(phrase)
    })
    .then(res => res.json())
    .then(data => {
        console.log('Phrase ajoutée:', data);
    })
};

export const phrases = getSentence;