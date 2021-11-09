const { expect, should } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const db = require('../DB/db');
const app = require('../server');

chai.should()
chai.use(chaiHttp);

describe('Test to Account Rout', () =>{
    const userTest = (email, password) => {
        const newUser = {
            email,
            password,
        };
        return newUser
    };

    

    describe('Test to Register Path', () => {
        it('Name test:email error (.com\.co), return status 404', (done) => {
            chai.request(app)
                .post('/account/signup')
                .send(userTest('test@gmail.go','Testing1234#'))
                .end((err,response) => {
                    response.should.have.status(404);
                    response.text.should.be.an('string');
                    expect(response.text).to.equal(`Email is wrong, it should have '@' and '.com' or '.co' `);
                    done();                  
                })
        });
        it('Name test:email error (@), return status 404', (done) => {
            chai.request(app)
                .post('/account/signup')
                .send(userTest('testgmail.com','Testing1234#'))
                .end((err,response) => {
                    response.should.have.status(404);
                    response.text.should.be.an('string');
                    expect(response.text).to.equal(`Email is wrong, it should have '@' and '.com' or '.co' `);
                    done();                  
                })
        });
        it('Name test: password error (10 charters), return status 404', (done) => {
            chai.request(app)
                .post('/account/signup')
                .send(userTest('test@gmail.com','Te#'))
                .end((err,response) => {
                    response.should.have.status(404);
                    response.text.should.be.an('string');
                    expect(response.text).to.equal("Password is wrong, it should have contains at least 10 characters, one lowercase letter, one uppercase letter and specials characters");
                    done();                  
                })
        });
        it('Name test: password error (lowecase letter), return status 404', (done) => {
            chai.request(app)
                .post('/account/signup')
                .send(userTest('test@gmail.com','TESTING1234#'))
                .end((err,response) => {
                    response.should.have.status(404);
                    response.text.should.be.an('string');
                    expect(response.text).to.equal("Password is wrong, it should have contains at least 10 characters, one lowercase letter, one uppercase letter and specials characters");
                    done();                  
                })
        });
        it('Name test: password error (uppercase letter), return status 404', (done) => {
            chai.request(app)
                .post('/account/signup')
                .send(userTest('test@gmail.com','testing1234#'))
                .end((err,response) => {
                    response.should.have.status(404);
                    response.text.should.be.an('string');
                    expect(response.text).to.equal("Password is wrong, it should have contains at least 10 characters, one lowercase letter, one uppercase letter and specials characters");
                    done();                  
                })
        });
        it('Name test: password error (specials characters), return status 404', (done) => {
            chai.request(app)
                .post('/account/signup')
                .send(userTest('test@gmail.com','Testing'))
                .end((err,response) => {
                    response.should.have.status(404);
                    response.text.should.be.an('string');
                    expect(response.text).to.equal("Password is wrong, it should have contains at least 10 characters, one lowercase letter, one uppercase letter and specials characters");
                    done();                  
                })
        });
        it('Name test: successful signup, return status 200', (done) => {
            chai.request(app)
                .post('/account/signup')
                .send(userTest('test@gmail.com','Testing1234#'))
                .end((err,response) => {
                    response.should.have.status(200);
                    response.should.be.an('object');                 
                    done();
                })
        });
        it('Name test: email already exist, return status 404', (done) => {
            chai.request(app)
                .post('/account/signup')
                .send(userTest('test@gmail.com','Testing1234#'))
                .end((err,response) => {
                    response.should.have.status(404);
                    response.text.should.be.an('string');
                    expect(response.text).to.equal(`Email already exists`)                
                    done();
                })
        });
    });

    describe('Test to Login Path', () => {

        it('Name test: login (user does not exist), return status 404', (done) => {
            chai.request(app)
                .post('/account/login')
                .send(userTest('testNotFound@gmail.com','Testing1234#'))
                .end((err,response) => {
                    response.should.have.status(404);
                    response.text.should.be.an('string');
                    expect(response.text).to.equal('User does not exist')                
                    done();
                })
        });
        it('Name test: login (Unauthorized), return status 401', (done) => {
            chai.request(app)
                .post('/account/login')
                .send(userTest('test@gmail.com','testing1234'))
                .end((err,response) => {
                    response.should.have.status(401);
                    response.text.should.be.an('string');
                    expect(response.text).to.equal('Unauthorized')                
                    done();
                })
        });
        it('Name test: successful login, return status 200', (done) => {
            chai.request(app)
                .post('/account/login')
                .send(userTest('test@gmail.com','Testing1234#'))
                .end((err,response) => {
                    response.should.have.status(200);
                    expect(JSON.parse(response.text).token).to.be.a('string');              
                    done();
                })
        });

    });

    after (async () =>{
        await db.Users.destroy({ 
            where: { 
                email: 'test@gmail.com' 
            }
        });
    });
});