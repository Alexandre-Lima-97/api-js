import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/alunoModel';
import User from '../models/userModel';
import Foto from '../models/photoModel';

const models = [Aluno, User, Foto];

const connection = new Sequelize(databaseConfig);
models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
