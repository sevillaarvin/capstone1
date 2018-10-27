var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');

app = express();
app.use(serveStatic(__dirname + "/dist"));

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
