const http = require('http');
const fs = require('fs');
const porta = process.env.PORT || 3000;

const server = http.createServer((req,res)=>{
    fs.appendFile('teste.txt', 'Curso de Node - CFB cursos', (err)=>{
        if(err)throw err
        console.log('Arquivo criado')
    })
})

server.listen(porta || 3000,()=>{console.log('Servidor rodando!')})