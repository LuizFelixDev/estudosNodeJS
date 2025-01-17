const fs = require('fs');

// Caminho do arquivo
const caminhoArquivo = './mensagem.txt';

// Ler o arquivo
fs.readFile(caminhoArquivo, 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
    }
    console.log('Conteúdo do arquivo:');
    console.log(data);
});