const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/profissionalatende', require('./routes/profissionalatende'));
app.use('/paciente', require('./routes/paciente'));
app.use('/procedimento', require('./routes/procedimento'));
app.use('/tiposolicitacao', require('./routes/tiposolicitacao'));
app.use('/solicitacao', require('./routes/solicitacao'));
app.listen(process.env.PORT || 3000);
