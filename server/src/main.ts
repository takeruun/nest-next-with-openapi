import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as fs from 'fs';
import { dump } from 'js-yaml';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Swagger拡張の有効化
  const config = new DocumentBuilder()
    .setTitle('API description')
    .setVersion('1.0')
    .addServer('/')
    .addCookieAuth() // swaggerのauthorizeを有効化
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // YAML
  fs.writeFileSync('./openapi/openapi.yaml', dump(document, {}));

  await app.listen(3010);
}
bootstrap();
