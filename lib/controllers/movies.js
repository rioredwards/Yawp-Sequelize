const { Router } = require('express');
const db = require('../models');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const data = await db.Movies.findAll();
      res.json(data);
    } catch (e) {
      next(e);
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const movie = await db.Movies.findByPk(req.params.id, {
        include: db.Genre,
      });
      if (!movie) next();
      res.json(movie);
    } catch (e) {
      next(e);
    }
  });
