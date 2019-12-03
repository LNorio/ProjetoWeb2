const supertest = require('supertest');
const assert = require('assert');
const app = require('../index');


describe("GET /prod", () => {
  it("status code 200 list products", (done) => {
    supertest(app)
      .get("/prod")
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) done(err);
        done();
      });
  }).timeout(4000);

  // it("status code 404 list products", (done) => {
  //   supertest(app)
  //     .get("/prod")
  //     .expect('Content-Type', /json/)
  //     .expect(404)
  //     .end(function(err, res){
  //       if (err) done(err);
  //       done();
  //     });
  // }).timeout(4000);
});

describe("POST /prod", () => {
  it("status code 200 post prod", (done) =>{
    supertest(app)
      .post("/prod")
      .send({name: "teste", price: "12"})
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) done(err);
        done();
      });
  }).timeout(4000);
})

describe("POST /prod", ()=>{
  it("status code 500 post prod", (done) =>{
    supertest(app)
      .post("/prod")
      .send({name: "teste"})
      .expect('Content-Type', /json/)
      .expect(500)
      .end(function (err, res) {
        if (err) done(err);
        done();
      });
  }).timeout(4000);
})
