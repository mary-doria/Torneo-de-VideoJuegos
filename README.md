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
```bash
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
```





## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
# Torneo-de-VideoJuegos
