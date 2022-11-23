const express = require('express');
const app = express();
const chalk = require('chalk');
const cors = require('cors');
const jwt =require('jsonwebtoken');
require('../src/config/conexion') 
app.use(cors());
const port =(process.env.port || 3000);
const options = {
  cors: {
    origin: 'http://localhost:4200',
  },
};

const server = require('http').Server(app);
const io = require('socket.io')(server, options);

io.on('connection', function (socket) {

  const handshake = socket.id;

  let { nameRoom } = socket.handshake.query;
  console.log(`${chalk.green(`Nuevo dispositivo: ${handshake}`)} conentado a la ${nameRoom}`);
  socket.join(nameRoom)

  socket.on('evento', (res) => {
    // Emite el mensaje a todos lo miembros de las sala menos a la persona que envia el mensaje   
    socket.to(nameRoom).emit('evento', res);

  })


  socket.on('disconnect', function () {
    console.log('user disconnected');
  });
});
app.use(express.json()) 

app.set('port',port);
app.use('/',require('../rutas')); 
//app.use('/usuarios',require('./rutas/usuarios'));
server.listen(3000, function () {
  console.log('\n')
  console.log(`>> Socket listo y escuchando por el puerto: ${chalk.green('3000')}`)
})



/*const express = require('express');
const app =express();
const chalk = require('chalk');
const cors = require('cors');
require('../src/config/conexion') 

  
const port =(process.env.port || 3000);
app.use(cors());
const options = {
    cors: {
      origin: 'http://localhost:4200',
    },
  };

  const server = require('http').Server(app);
  const io = require('socket.io')(server, options);
const myconnection = require('express-myconnection');
const mysql =require('mysql');


app.get('/', function (req, res) {
    res.send('Hello World!');
  });
  
  io.on('connection', function (socket) { 

    const handshake = socket.id;
  
    let { nameRoom } = socket.handshake.query;
    console.log(`${chalk.green(`Nuevo dispositivo: ${handshake}`)} conentado a la ${nameRoom}`);
    socket.join(nameRoom)
  
    socket.on('evento', (res) => {
      // Emite el mensaje a todos lo miembros de las sala menos a la persona que envia el mensaje   
      socket.to(nameRoom).emit('evento', res);
  
    })
  
  
    socket.on('disconnect', function () {
      console.log('user disconnected');
    });
  });

//app.use(express.json()) 

app.set('port',port);
//app.use('/',require('../rutas')); 
//app.use('/api',require('../rutas')); 





app.listen(app.get('port'),(err)=>{
    if(err){
        console.log("Error al iniciar servidor",err)
    }
    console.log('Escuchando en puerto',app.get('port'));
});  */