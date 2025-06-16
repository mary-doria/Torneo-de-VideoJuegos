import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { json } from 'express';
import { metricsMiddleware } from './metrics.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Documentación Swagger
  const config = new DocumentBuilder()
    .setTitle('API Torneos de Videojuegos')
    .setDescription('CRUD para gestionar torneos de videojuegos, gratuitos y pagos')
    .setVersion('1.0')
    .addTag('Torneos')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Middleware de métricas
  app.use(metricsMiddleware); // ✅ REGISTRA el middleware

  app.use(json());

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
