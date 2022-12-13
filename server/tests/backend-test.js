const assert = require('assert');
const request = require('request');

describe('User management system', () => {
  // Test 1: Create user
  it('should be able to create a user', (done) => {
    request.post({
      url: 'http://localhost:3001/users',
      form: {
        username: 'testuser',
        password: 'testpassword'
      }
    }, (err, res, body) => {
      assert.equal(res.statusCode, 200);
      done();
    });
  });

  // Test 2: Log in
  it('should be able to log in with a valid username and password', (done) => {
    request.post({
      url: 'http://localhost:3001/login',
      form: {
        username: 'testuser',
        password: 'testpassword'
      }
    }, (err, res, body) => {
      assert.equal(res.statusCode, 200);
      done();
    });
  });

  // Test 3: Delete user
  it('should be able to delete a user', (done) => {
    request.delete({
      url: 'http://localhost:3001/users/testuser'
    }, (err, res, body) => {
      assert.equal(res.statusCode, 200);
      done();
    });
  });
});