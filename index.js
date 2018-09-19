const express = require('express')
const app = express();

app.use(express.static('public'))

app.get('/', (req,res) => {
    res.sendFile('/public/index.html', { root: __dirname })
})

app.listen(5000, function() {
    console.log("running at 5000")
})