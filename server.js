const express = require('express');
const axios = require('axios')
const path = require('path');
const serveStatic = require('serve-static');

const app = express();
app.use(serveStatic(__dirname + "/dist"));

app.get("/api", (req, res) => {
    const url = "https://www.olx.ph/all-results?q=" + req.query.q.replace(/ /g, "+")
    axios.get(url)
        .then(response => {
            res.send(response.data)
        })
        .catch(err => {
            try {
                res.send(url + ": " + err.response.status + ", " + err.response.statusText + ", " + err.response.data)
            } catch {
                res.send(url + ": Something went wrong")
            }
        })
})

app.use((req, res, next) => {
    res.status(404)

    if (req.accepts("html")) {
        res.sendFile(path.join(__dirname + "/dist/index.html"))
        return
    }

    if (req.accepts("json")) {
        res.send({error: "Not found"})
        return
    }

    res.type("txt").send("Not found")
})

var port = process.env.PORT || 3001;
app.listen(port);

console.log('server started '+ port);
