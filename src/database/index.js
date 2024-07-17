import { Sequelize } from "sequelize";
import databaseConfig from '../config/database';
import Paciente from '../models/Paciente';

const models = [Paciente];

const connection = new Sequelize(databaseConfig);

models.forEach(model=>model.init(connection));