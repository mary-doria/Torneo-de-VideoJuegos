<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# 🎮 Torneo de Videojuegos API

API RESTful construida con **NestJS**, diseñada para crear y gestionar torneos de videojuegos. Soporta autenticación, gestión de usuarios, creación de torneos, y monitoreo con métricas Prometheus.

---

## 🚀 Funcionalidades principales

- ✅ Registro y autenticación de usuarios (JWT)
- 🏆 CRUD de torneos
- 📊 Métricas de rendimiento con Prometheus
- ✅ Validaciones robustas con `class-validator`
- 📅 Validación de fechas y límites de participantes

---

## 📦 Tecnologías usadas

- **NestJS**
- **PostgreSQL** con **TypeORM**
- **Passport + JWT**
- **Prometheus** (`prom-client`, `@willsoto/nestjs-prometheus`)
- **class-validator** y **class-transformer**

---

## 📁 Estructura del proyecto
src/
├── auth/                  # Módulo de autenticación
├── users/                 # Módulo de usuarios
├── tournaments/           # Módulo de torneos
│   └── dto/               # DTOs con validaciones
├── metrics.service.ts     # Servicio Prometheus
├── metrics.controller.ts  # Controlador para exponer /metrics
├── metrics.registry.ts    # Registro custom Prometheus
├── app.module.ts          # Módulo principal
└── main.ts                # Bootstrap y configuración global




## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
# Torneo-de-VideoJuegos
