const express = require('express')
const app = express();

app.get('/', (req,res) => {
    res.sendDate('hello')
})

app.listen(5000, function() {
    console.log("running at 5000")
})