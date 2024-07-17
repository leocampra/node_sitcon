import { Sequelize } from "sequelize";
import databaseConfig from '../config/database';
import Paciente from '../models/Paciente';
import Procedimento from "../models/Procedimento";
const models = [Paciente, Procedimento];

const connection = new Sequelize(databaseConfig);

models.forEach(model=>model.init(connection));