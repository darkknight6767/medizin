const express=require('express');
const app=express();
app.use(express.static('public'));
app.get('/index.html',(req,res)=>{
        res.sendFile(__dirname+'/index.html');
});

app.get('/healthbot.html',(req,res)=>{
    res.sendFile(__dirname+'/healthbot.html');
});

app.get('/about.html',(req,res)=>{
    res.sendFile(__dirname+'/about.html');
});


app.get('/contact.html',(req,res)=>{
    res.sendFile(__dirname+'/contact.html');
});

app.get('/privacy%20policy.html',(req,res)=>{
    res.sendFile(__dirname+'/privacy policy.html');
});

app.get('/services.html',(req,res)=>{
    res.sendFile(__dirname+'/services.html');
});
app.get('/single.html',(req,res)=>{
    res.sendFile(__dirname+'/single.html');
});

app.get('/gallery.html',(req,res)=>{
    res.sendFile(__dirname+'/gallery.html');
});

app.get('/login.html',(req,res)=>{
    res.sendFile(__dirname+'/login.html');
});

app.get('/register.html',(req,res)=>{
    res.sendFile(__dirname+'/register.html');
});


app.listen(3000,()=>{
    console.log("port listening at 3000");
});