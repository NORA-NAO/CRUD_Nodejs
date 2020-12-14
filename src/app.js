const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql= require('mysql');
const conexion = require('express-myconnection');
const app = express();
const bodyparser = require('body-parser');
//rutas

const rutacustomer = require('./rutas/customer');


app.set('port', process.env.PORT || 8083);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//mysql
app.use(morgan('dev'));
app.use(conexion(mysql, {
	host: 'localhost',
	user: 'root',
	password: 'Lechedefresa',
	port: 3307,
	database: 'CRUD'
}, 'single'));

 
app.use(bodyparser.urlencoded({extended: false}));

//rutas
app.use('/', rutacustomer);

app.use(express.static(path.join(__dirname, 'public')));

app.listen( app.get('port'),() =>{
	console.log('Server en puerto 8083');
});