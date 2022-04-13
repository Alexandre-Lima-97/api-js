"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);
var _alunoModel = require('../models/alunoModel'); var _alunoModel2 = _interopRequireDefault(_alunoModel);
var _userModel = require('../models/userModel'); var _userModel2 = _interopRequireDefault(_userModel);
var _photoModel = require('../models/photoModel'); var _photoModel2 = _interopRequireDefault(_photoModel);

const models = [_alunoModel2.default, _userModel2.default, _photoModel2.default];

const connection = new (0, _sequelize2.default)(_database2.default);
models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
