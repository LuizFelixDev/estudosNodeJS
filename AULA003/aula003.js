const http = require('http');
const porta = 3000;
const host = '127.0.0.1';

const servidor = http.createServer((req, resp)=> { // Criando servidor
    resp.writeHead(200, {'content-type':'text/html'});
    if(req.url =='/'){
        resp.write('<h1>Seja Bem-vindo</h1>');
    }else if(req.url == '/canal'){                
        resp.write('<h1>CFB cursos</h1>');
    }else if(req.url=='/falar'){
        resp.write('<h1>Quero ser perdoado por Deus</h1>');
    }else if(req.url == '/curso'){
        resp.write('<h1>Curso de node.js</h1>')
    }
    resp.end();
})

servidor.listen(porta,host,()=>{console.log('Servidor rodando')});

