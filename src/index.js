//nodemon hace que cada vez que realice un cambio el servidor se reinicia automaticamente
const express=require('express');//se llama a express
const app=express();//se configura a express como app que es el servidor
const path=require('path');//para requerir index no importa el S.O
//settings
app.set('port',3000);// se configura para definir el puerto en forma general en 3000, sirve mejor desde app porque siempre se llama a esta variable
app.set('views',path.join(__dirname+'/views'));//para llamar a index.ejs
app.engine('html',require('ejs').renderFile);//renderizar usando html ya no ejs pero igual con motor de ejs
app.set('view engine','ejs');
//middlewares

//routes
app.use(require('./routes/'));//se importa routes desde routes/index.js a index.js principal
//static files
app.use(express.static(path.join(__dirname,'/public')));//se puede acceder desde el navegador a la carpeta public
//listening the server
app.listen(app.get('port'),()=>{//el servidor escuhca el puerto 3000//app.get para llamar al puerto
    console.log('Server on port',app.get('port'));
});