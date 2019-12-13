const apiHandler = (req, res) =>{
    const AYLIENTextAPI = require('aylien_textapi');
    const textapi = new AYLIENTextAPI({
        application_id: process.env.API_ID,
        application_key: process.env.API_KEY
    });
    textapi.sentiment({
        'text': req.body.text
    }, (error, response) => {
        if(error === null) {
            console.log(response);
        
            res.send(response)
        }
        
    })
}

module.exports = apiHandler