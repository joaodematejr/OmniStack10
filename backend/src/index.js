const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebsocket } = require('./websocket')


//MÉTODOS HTTP: GET/POST/PUT/DELETE

//TIPOS DE PARÂMETROS:

//QUERY PARAMS: req.query(FITROS, ORDENAÇÃO, PAGINAÇÃO,...)
//ROUTE PARAMS: request.params(Identificar um recurso na alteração ou remoção)
//BODY: request.body (DADOS PARA CRIAÇÃO OU ALTERAÇÃO DE UM REGISTRO)

const app = express();
const server = http.Server(app);

setupWebsocket(server);

//MONGODB (NÃO-RELACIONAL)
mongoose.connect('mongodb+srv://joaodematejr:k63ABBbdGK9MEcuc@cluster0-oh4t9.mongodb.net/omniStack10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors())
app.use(express.json());
app.use(routes);
server.listen(9000);

