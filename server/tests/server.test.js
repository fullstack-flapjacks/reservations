const request = require('supertest');
const app = require('../app');
describe('Server side tests', () => {
  test('It should respond with 200 for a GET request', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
  test('It should respond with 404 for an invalid endpoint', async () => {
    const response = await request(app).get('/a');
    expect(response.statusCode).toBe(404);
  });
  test('GET r/rest_id/reservations should respond with an array ', async () => {
    const response = await request(app).get('/r/5/reservations');
    expect(Array.isArray(response.body)).toBe(true);
  });
   test('GET r/rest_id/reservations should contain at least 100 reservations ', async () => {
    const response = await request(app).get('/r/5/reservations');
    expect(response.body.length).toBeGreaterThanOrEqual(100);
  });
  test('GET r/rest_id/reservations should contain Day, Hour, Minute Properties ', async () => {
    const response = await request(app).get('/r/7/reservations');
    const reservation = response.body[0];
    expect(reservation).toHaveProperty('day');
    expect(reservation).toHaveProperty('hour');
    expect(reservation).toHaveProperty('minute');
  });

  test('GET r/rest_id/bookings should respond with an array ', async () => {
    const response = await request(app).get('/r/10/bookings');
    expect(Array.isArray(response.body)).toBe(true);
  });
  test('GET r/rest_id/bookings should contain day and bookigns_count properties ', async () => {
    const response = await request(app).get('/r/12/bookings');
    const booking = response.body[0];
    expect(booking).toHaveProperty('day');
    expect(booking).toHaveProperty('bookings_count');
  });

})