const assert = require('assert');
const axios = require('axios');

var uname = "mochaTest";
var pword = "mochaTest";

describe('POST and DELETE requests', () => {
    it('Should succesfully create new user login as the user and finally delete user.', (done) => {
        // create a new resource

        axios.post('http://localhost:3001/users', {
            username: uname,
            password: pword,
        })
            .then(function (response) {
                //console.log(response);
                assert.equal(response.status, 200);
                assert.equal(response.body.username, 'mochaTest');
                assert.equal(response.body.password, 'mochaTest');
            })
            .catch(function (error) {
                console.log(error);
            });

        axios.post('http://localhost:3001/login', {
            username: uname,
            password: pword,
        })
            .then(function (response) {
                //console.log(response);
                assert.equal(response.status, 200);
                assert.notEqual(response.body, 'false')
            })
            .catch(function (error) {
                console.log(error);
            });

            axios.delete(`http://localhost:3001/users/${uname}`)
                .then(function (response) {
                    //console.log(response);
                    assert.equal(response.status, 200);
                })
                .catch(function (error) {
                    console.log(error);
                });
                done();
            });
        });