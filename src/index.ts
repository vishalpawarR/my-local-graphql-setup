import express from 'express';

const app = express();

const PORT = Number(process.env.PORT) || 8000

app.use('/', (req, res) => {
    res.json({message: 'This is a express server'});
})

app.listen(PORT, () => {
    console.log(`Server is running on the http://localhost:${PORT}`)
});