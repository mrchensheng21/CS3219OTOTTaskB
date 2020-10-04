import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';
import contactModel from '../contactModel'

const { update } = require('../contactModel');

//configuring chai
chai.use(chaiHttp);
chai.should();


let dummyContact = {
    name: "John Doe",
    gender: "male",
    email: "johndoe@gmail.com",
    phone: "91118111"
}

describe("Contact Test", () => {
    let contactList = {};
    after((done) => {
        contactModel.remove({}, (err) => {
            done();
        });
    });
    describe("POST", () => {
        it('should post a contact', (done) => {
            chai.request(app)
                .post('/api/contacts')
                .send(dummyContact)
                .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('New contact created!')
                res.body.should.have.property('data');
                res.body.data.should.have.property('name').eql('John Doe');
                res.body.data.should.have.property('gender').eql('male');
                res.body.data.should.have.property('email').eql('johndoe@gmail.com');
                res.body.data.should.have.property('phone').eql('91118111');
                contactList= res.body.data;
                done();
            });
        });
    });
    describe("GET", () => {
        it('it should not get contacts', (done) => {
            chai.request(app)
                .get('/api/contacts')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('data');
                    res.body.data.length.should.be.eql(1);
                    done();
                })
        });
        it('it should get contact', (done) => {
            const contactID = contactList._id;
            chai.request(app)
                .get('/api/contacts/' + contactID)
                .end((err, res) => {
                    res.should.have.a.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.a.property('data');
                    res.body.data.should.have.property('_id').eql(contactID);
                    res.body.data.should.have.property('name').eql('John Doe');
                    res.body.data.should.have.property('gender').eql('male');
                    res.body.data.should.have.property('email').eql('johndoe@gmail.com');
                    res.body.data.should.have.property('phone').eql('91118111');
                    done();
                })
        })
    });
})
