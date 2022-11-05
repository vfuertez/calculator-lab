require('dotenv').config();

const { response } = require('express');
const express = require('express');
const app = express();

const PORT = 3001;



app.get("/calcquery/:numOne/:numTwo", (request, response) => {
    // console.log(
    //     request.params.numOne, 
    //     request.params.numTwo, 
    //     `the object type of ${request.params.numOne} which is on the URL is ${}`,
    // )
    //anything typed inside the URL will always be a string

    const num1 = parseInt(request.params.numOne);
    const num2 = parseInt(request.params.numTwo);
    const operation = request.query.operation;

    if(operation === 'add'){
        response.send(`the sum is ${num1  + num2}`);
    } else if(operation === 'subtract'){
        response.send(`the subtracted value is ${num1-num2}`);
    } else if(operation === 'multiply'){
        response.send(`the multiply value is ${num1*num2}`);
    }else if(operation === 'divide'){
        response.send(`the divide value is ${num1/num2}`);
    }else if(operation === 'exponent'){
        response.send(`the exponent value is ${num1**num2}`);
    } else {
        response.send(`no operation`);
    }
    


});


// app.get('/calc/:num1/:num2', (req, res) => {
//     console.log(req.params)
// const num1 = parseInt(req.params.num1) // #parseInt - make strings or number with decimals a whole integer
// const num2 = parseInt(req.params.num2)
// console.log(num1 + num2)

//     let sum = (num1 + num2)
    
//     res.send("The sum is " + sum)
// });


app.listen(process.env.PORT, () => {
    console.log(`Express is listening on port ${process.env.PORT}`)
});