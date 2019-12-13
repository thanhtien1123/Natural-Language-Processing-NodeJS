//import {getPost, postPost, updateUI} from './getPost';
const handleSubmit = (e) => {
    e.preventDefault();
    let text = document.querySelector(".text").value;

    fetch('http://localhost:3000/sentiment', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({text})
    })
    .then(res => {
        console.log(res.json());
    })
    .then((res) => {
        console.log(res);
        document.getElementById('polarity').innerHTML = res.polarity
    })
}


module.exports = handleSubmit