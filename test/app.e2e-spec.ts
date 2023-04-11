import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '@/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (HEALTHCHECK)', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .send({ query: '{ health }' })
      .expect(200)
      .expect((res) => {
        expect(res.body.data.health).toEqual('OK!');
      });
  });
});
