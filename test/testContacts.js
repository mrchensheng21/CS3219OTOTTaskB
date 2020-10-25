let chai = require('chai')
let chaiHttp = require('chai-http')
let app = require('../index');
let contactModel = require('../contactModel');

const { update } = require('../contactModel');

//configuring chai
chai.use(chaiHttp);
let should = chai.should();


let dummyContact = {
    name: "John Doe",
    gender: "male",
    email: "johndoe@gmail.com",
    phone: "91118111"
}

describe("Contact Test", () => {
    let contactList = {};
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
        }).timeout(8000);
    });
    describe("GET", () => {
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
    describe("UPDATE", () => {
        it('It should update the contact with the correct contactid', (done) => {
            const contactID = contactList._id;
            const updateData = {
                name : "Mary Jane",
                email : "maryjane@gmail.com",
                gender : "Female",
                phone : "92228222",
            }
            chai.request(app)
                .put('/api/contacts/' + contactID)
                .send(updateData)
                .end((err, res) => {
                    res.should.have.a.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.a.property('data');
                    res.body.data.should.have.property('_id').eql(contactID);
                    res.body.data.should.have.property('name').eql('Mary Jane');
                    res.body.data.should.have.property('email').eql('maryjane@gmail.com');
                    res.body.data.should.have.property('gender').eql('Female');
                    res.body.data.should.have.property('phone').eql('92228222');
                    done();
                })
        })
    }).timeout(8000);
    describe("DELTE", () => {
        it('it should delete an existing contact with correct contact id', (done) => {
            const contactID = contactList._id;
            chai.request(app)
                .delete('/api/contacts/' + contactID)
                .end((err, res) => {
                    res.should.have.a.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('status').eql('success');
                    res.body.should.have.property('message').eql('Contact deleted');
                    done();
                })
        })

    });
})
