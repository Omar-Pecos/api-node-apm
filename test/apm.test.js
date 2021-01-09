const request = require('supertest')
const app = require('../src/app')

describe('Apm Endpoints',() =>{
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

        done();
    })
})
