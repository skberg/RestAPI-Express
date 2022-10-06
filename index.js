const express  = require('express');
const app = express();
const POST = 8080;
app.use(express.json())

 app.listen(
    POST, 
    () => console.log(`it's alive on http://localhost:${POST}`)
 )


 app.get('/test', (req,res)=>{
    res.status(200).send({
        tshort: 't-shoret',
        size: 'small'

    })
 });

 app.post('/test/:id',(req, res )=>{
    const { id } = req.params;
    const { logo } = req.body;

    if(!logo){
        res.status(418).send({message: 'we need a log!'})
    }

    res.send({
        test: `Test with your ${logo} and ID of ${id}`,
    })
 })