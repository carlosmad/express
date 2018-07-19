/*const http = require('http');

http.createServer((req,res) => {
    res.end('hello');
}).listen(3000);*/

const express = require('express');
const morgan = require('morgan');
const app = express();

//settings
app.set('appName', 'Mi primera app');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//middlewares
app.use(morgan('dev'));

//rutas
app.get('/', (req, res) => {
    res.render('index.ejs');
});
app.get('/login', (req,res) => {
    res.end('login');
});
app.get('*', (req,res) => {
    res.end('404');
});
app.listen(3000, () => {
    console.log("servidor funcionando")
    console.log("Nombre de la app: ",app.get('appName'));
});