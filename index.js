const express = require("express");
const app = express();

// app.use((req, res) => {
//     console.log("WE GOT A REQUEST!!!")
//     // res.send("HELLO THIS IS A RESPONSE FOR YOUR REQUEST!!!")
// })

app.get('/', (req, res) => {
    res.send("UPDATED HOME REQUEST!!!")
})
app.get('/cats', (req, res) => {
    res.send('CATS REQUEST!!!')
})

app.post('/cats', (req, res) => {
    res.send('CATS POST REQUEST!!!')
})

app.get('/dogs', (req, res) => {
    res.send("DOGS REQUEST!!!")
})

app.get('*', (req, res) => {
    res.send('UNIVERSAL REQUEST!!!')
})

app.listen(8080, () => {
    console.log('Listening to port 8080.')
})
