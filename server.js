const express = require ("express");
const escapeHtml = require("escape-html");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended:true}));

let comments = [];
app.get("/",(req,res)=>{
    let commentList = comments.map(c=>`<p>${c}</p>`).join("");
        res.send(`
            <h2>Cadastro de vírus</h2>
            <form method="POST">
                <input type ="text" name="comment" placeholder="digite um Virus">
                <button type ="submit"> instalar virus</button>
            </form>
             ${commentList}   
            `);
});

app.post("/",(req,res)=>{
    comments.push(escapeHtml(req.body.comment));
    res.redirect("/");
});

app.listen( PORT,()=>console.log(`servidor rodando bolsinha em http://localhost:${PORT}`));

//
