const express=require('express');//se llama a express
const router=express.Router();//se puede crear multiples rutas
router.get('/',(req,res)=>{//cuando te pidan algo: ('/'), configurar servidor para que llame el index//se cambia app por router
    //res.sendFile(path.join(__dirname+'/views/index.html'));//se llama a index.html
    res.render('index.html',{title:'JAVIER INC'});//para hacer pasar index por el motor de ejs y pase a html//motor de plantilla ejs se puede ejecutar javascript en html 
});
router.get('/contact',(req,res)=>{
    res.render('contact.html',{title:'Contactenos'});
});
module.exports=router;//se exporta las rutas de routes/index.js