var express = require('express'),
	app = express();


app.use('/',express.static(__dirname+'/'))

app.get('/',(req,res)=>{
	res.sendFile(__dirname + "/client/index.html")
})


app.listen(process.env.PORT||8080)
