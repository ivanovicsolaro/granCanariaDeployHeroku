const express = require('express');
const path = require('path');

const app = express();

app.use(require('prerender-node').set('prerenderToken', 'ZLWgTXPUJcUG66UNA2k2'));

app.use(express.static(__dirname+'/dist/webastridpropiedades'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/webastridpropiedades/index.html'));
});

app.listen(process.env.PORT || 8080);
