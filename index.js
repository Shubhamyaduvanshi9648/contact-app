import express from 'express';
const app = express();
app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));



app.get('/',(req,res)=>{
    res.render('home');
})
app.get('/show-contact',(req,res)=>{
    res.render('show-contact');
})
app.get('/add-contact',(req,res)=>{
    res.render('add-contact');
})
app.post('/add-contact',(req,res)=>{

})
app.get('/update-contact',(req,res)=>{
    res.render('update-contact');
})
app.post('/add-contact',(req,res)=>{})
app.get('/update-contact',(req,res)=>{})
const port=3000;
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})