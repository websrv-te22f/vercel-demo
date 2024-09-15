const express = require('express');
const morgan = require("morgan");
const port = process.env.PORT || 3000;
const app = express();

app.use(morgan("dev"));

app.get('/', (req, res)=>{
    console.log('GET till /');
    res.send('GET till /');
});

app.get('/ip',(req,res)=>{
    console.log(req.ip);
    res.send(`Hej ${req.ip}`);
});

app.all('*', (req, res)=>{
    res.send('matchade ingen rutt');
})

app.listen(port, ()=>{
    console.log(`Servern igång på ${port}`);
})