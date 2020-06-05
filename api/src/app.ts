import express from "express";
import cep from 'cep-promise'

// síncrona => sync
console.log("TEST!!");

// assíncrona
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world!');
})

app.get('/cep', async (req, res) => {
    const cepReturned = await cep('41250410')
    res.send(cepReturned);
})

const port = 3001;
app.listen(port, () => {
    console.log(`running at port: ${port}`);
});
