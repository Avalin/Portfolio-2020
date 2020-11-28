const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000
const app = express();
const router = express.Router();

if(app.get("env") === "production")
{
    const enforce = require('express-sslify');
    app.use(enforce.HTTPS({ trustProtoHeader: true }));
}
app.use('/', router);
app.use("/public", express.static(path.join(__dirname, '/public')));

router.get("/",function(req,res){
    res.sendFile(__dirname + "/views/" + "index.html");
});

router.get("/index-dk.html",function(req,res){
    res.sendFile(__dirname + "/views/" + "index-dk.html");
});
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))