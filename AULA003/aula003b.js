const http = require('http');
const url = require('url');
const porta = 3000;
const host = '127.0.0.1';

const servidor = http.createServer((req, resp)=> { // Criando servidor
    resp.writeHead(200, {'content-type':'text/html'});
    resp.write(req.url);
    const p = url.parse(req.url,true).query;
    resp.write('</br>'+p.nome)
    resp.write('</br>'+ p.curso);
    resp.end();
})

servidor.listen(porta,host,()=>{console.log('Servidor rodando')});

