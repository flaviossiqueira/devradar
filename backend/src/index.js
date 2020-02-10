const express = require('express');
const mongooose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongooose.connect('mongodb+srv://flavio:showshow@cluster0-lpsrb.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}); 

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);