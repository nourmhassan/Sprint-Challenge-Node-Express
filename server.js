const express = require("express");
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const actionRouter = require('./actions/actionRouter.js');
const projectRouter = require('./projects/projectRouter.js');


const server = express();


server.get('/', function(req, res) {
    res.json({ api: 'Running...' });
});
  


//Middleware

server.use(express.json());
server.use(morgan('dev'));
server.use(helmet());
server.use(cors());
server.use('/api/actions', actionRouter);
server.use('/api/projects', projectRouter);




const port = 5000;
server.listen(port, () => console.log("API Running on port 5000"));