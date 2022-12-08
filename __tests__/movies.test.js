const request = require('supertest');
const app = require('../lib/app');
const db = require('../lib/models');

describe('movie routes', () => {
  beforeEach(async () => {
    await db.sequelize.sync({ force: true });
    try {
      await db.Movie.bulkCreate([
        {
          title: 'TestMovie1',
          description: 'A test movie!',
          image: 'No image available!',
          releaseYear: 2000,
          genre_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'TestMovie2',
          description: 'A test movie!',
          image: 'No image available!',
          releaseYear: 2001,
          genre_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
    } catch (e) {
      console.log(e);
    }
  });
  afterAll(async () => {
    await db.sequelize.close();
  });
  it('#GET /api/v1/movies should return a list of movies', async () => {
    const resp = await request(app).get('/api/v1/movies');
    expect(resp.status).toBe(200);
    expect(resp.body.length).toBe(2);
    expect(resp.body.toMatchInlineSnapshot());
  });

  it('#GET /movie/:id should return the movie detail', async () => {
    const resp = await request(app).get('/api/v1/movie/1');
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual({
      title: 'TestMovie1',
      description: 'A test movie!',
      image: 'No image available!',
      releaseYear: 2000,
      genre_id: 5,
      createdAt: expect.any(String),
      updatedAt: expect.any(String),
    });
  });
});
