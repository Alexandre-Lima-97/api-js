"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _alunoModel = require('../models/alunoModel'); var _alunoModel2 = _interopRequireDefault(_alunoModel);
var _photoModel = require('../models/photoModel'); var _photoModel2 = _interopRequireDefault(_photoModel);

class AlunoController {
  async index(req, res) {
    const alunos = await _alunoModel2.default.findAll({
      attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
      order: [['id', 'DESC'], [_photoModel2.default, 'id', 'DESC']],
      include: {
        model: _photoModel2.default,
        attributes: ['url', 'filelname'],
      },
    });
    res.json(alunos);
  }

  // ASC -  crescente
  // DESC - decrescente

  async store(req, res) {
    try {
      const aluno = await _alunoModel2.default.create(req.body);

      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }

      const aluno = await _alunoModel2.default.findByPk(id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [_photoModel2.default, 'id', 'DESC']],
        include: {
          model: _photoModel2.default,
          attributes: ['url', 'filelname'],
        },
      });

      if (!aluno) {
        return res.status(400).json({
          errors: ["Aluno don't existis"],
        });
      }

      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }

      const aluno = await _alunoModel2.default.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ["Aluno don't existis"],
        });
      }
      await aluno.destroy();
      return res.json({ delete: true });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }

      const aluno = await _alunoModel2.default.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ["Aluno don't existis"],
        });
      }

      const novoAluno = await aluno.update(req.body);

      return res.json(novoAluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new AlunoController();
