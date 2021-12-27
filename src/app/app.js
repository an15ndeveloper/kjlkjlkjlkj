const express = require('express');
const app = express();
const port_number = process.env.PORT || 8000;
const router = '192.168.1.12';
const hostname = '127.0.0.1';
const path = require('path');
const multer = require('multer');
// create custom locations 

const public = path.join(__dirname,'../../public');
const database = '../db/db'
// app imp  requiremenrt
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(public)); //public folder here
app.set('view engine','pug') //template engine here


// create custom module 
console.log(`${public}/upload`)
const storage = multer.diskStorage({
    destination:`${public}/upload/vc_card_qrcode`  ,
    filename:(req,file,cb)=>{
        cb(null ,`qrcode${path.extname(file.originalname)}`)
    }
})
// app rout
app.get('',(req,res)=>{
    res.render('apply.pug');
    // res.render('')
})
app.get('/index',(req,res)=>{
    res.render('');
})
app.post('/create/download',multer({storage}).single('scaner'),async (req,res)=>{
    // res.send('done');
    try{
        
        const body = req.body;
        console.log(req.body.name)
        res.render('',{name :body.name,age:body.age,gender:body.gender,vname:body.vName,vby:body.vBy,vat : body.vAt,uhid:body.uhid,dofd:`${body.dFirst}(batch ${body.bFirst})`,dosd:`${body.dSec}(batch ${body.bSec})`,scaner:`../../upload/vc_card_qrcode/${req.file.filename}`,cer_id : body.certifcateId,velifled : body.velifled})
        console.log(req.file)
    }catch(e){
        console.log('somethong wrong',e)
        res.send(e)
    }
})



//app listen 

app.listen(port_number,hostname,()=>{
    console.log(`http://${hostname}:${port_number}/`);
})