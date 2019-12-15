//import {getPost, postPost, updateUI} from './getPost';
const handleSubmit = () => {
    document.querySelector('.button').addEventListener('submit', (e) => {
        e.preventDefault();
        let text = document.querySelector(".text").value;
        
        console.log('Building request');
        
        fetch('http://localhost:3000/sentiment', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({text})
        })
        .then(res => {
            return res.json();
        })
        .then((res) => {
            console.log(res);
            document.getElementById('.polarity').innerHTML = res.polarity;
        })
        .catch(error => {
            console.log(error);
            
        }) 
        
    })   
}


export {handleSubmit}