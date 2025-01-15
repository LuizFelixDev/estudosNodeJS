const http = require('http'); // Importando HTTP

http.createServer((requisicao, resposta) => {
    resposta.writeHead(200, {
        "Content-Type": "text/plain"
    });
    resposta.write('CFB Cursos\n');
    resposta.end();                  //Criei meu primeiro servidor ;)
}).listen(12829);