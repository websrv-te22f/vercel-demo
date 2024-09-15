const express = require('express');
const port = 3000;
const app = express();

app.get('/', (req, res)=>{
    console.log('GET till /');
    res.send('GET till /');
});

app.listen(port, ()=>{
    console.log(`Servern igång på ${port}`);
})