
//importar o express
const express = require('express');

//iniciar o express
const app = express();

//nome da pasta no dist que será feito o build
const appName = 'projeto-lila-front';

//local onde o build ira gerar os arquivos
//dirname busca a raiz no heroku
const outputPath = `${__dirname}/dist/${appName}`;

//seta o diretorio de build para servir o conteudo Angular
app.use(express.static(outputPath));
//direcionar qualquer requisição para o index.html
app.get('/*',(req,res) => {
    res.sendFile(`${outputPath}/index.html`)
});
//ouvir a porta que o heroku disponibilizar
app.listen(process.env.PORT);
