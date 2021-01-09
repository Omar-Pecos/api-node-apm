const request = require('supertest')
const app = require('../src/app')

let apmId = null;

describe('Apm Routes',() =>{
    it('Should create a new Apm', async (done) =>{
        const res = await request(app)
            .post('/api/v1/apm')
            .send({
                name : 'test_apm',
                command : "test",
                desc : 'test_apm_desc',
                url : 'https://www.youtube.com/watch?v=N6UwHIpGOEI',
            })
        
        expect(res.statusCode).toBe(201);
        expect(res.body.status).toBe('success');

        apmId = res.body.data.id;

        done();
    })

    it('Should return an array of Apms', async (done) =>{
        const res = await request(app)
            .get('/api/v1/apm')

        expect(res.body.status).toBe('success');
        expect(res.body.data.length).toBeGreaterThan(0);
        done();
    })

    it('Should return an Apm by Id',async (done) =>{
        const res = await request(app)
            .get('/api/v1/apm/' + apmId)
        
        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe('success');

        done();
    })

    it('Should return 404 finding Apm by Id',async (done) =>{
        const res = await request(app)
            .get('/api/v1/apm/' + 999)
        
        expect(res.statusCode).toBe(404);
        expect(res.body.status).toBe('error');

        done();
    })

    it('Should update a Apm', async (done) =>{
        const res = await request(app)
            .put('/api/v1/apm/' + apmId)
            .send({
                name : 'new_test_apm',
                command : 'new_test'
            })

        expect(res.statusCode).toBe(200);
        expect(res.body.data.name).toBe('new_test_apm');
        
        done();
    })
})
