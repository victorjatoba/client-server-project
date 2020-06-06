import express from "express";
import cep from 'cep-promise'
import cors from 'cors'

// síncrona => sync
console.log("TEST!!");

// assíncrona
const app = express();

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello world!');
})

app.get('/cep', async (req, res) => {
    const cepParam = req.query.value;
    const cepReturned = await cep(`${cepParam}`)
    res.send(cepReturned);
})

const port = 3001;
app.listen(port, () => {
    console.log(`running at port: ${port}`);
});
