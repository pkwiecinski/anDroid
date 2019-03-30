const express = require('express')
const app = new express();
const port = 5544

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/menu.json')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
