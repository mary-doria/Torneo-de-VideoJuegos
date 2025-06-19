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
├── auth/                          # Módulo de autenticación (JWT, estrategias, guardias)
├── tournaments/                   # Módulo de torneos
│   ├── dto/                       # DTOs con validaciones para creación y actualización
│   │   ├── create-tournament.dto.ts
│   │   └── update-tournament.dto.ts
│   ├── tournament.entity.ts       # Entidad del torneo
│   ├── tournaments.controller.ts  # Controlador de torneos
│   ├── tournaments.module.ts      # Módulo de torneos
│   └── tournaments.service.ts     # Lógica del negocio
├── users/                         # Módulo de usuarios
│   ├── entity.ts
│   ├── user.entity.ts             # Entidad del usuario
│   ├── users.module.ts            # Módulo de usuarios
│   └── users.service.ts           # Servicio de usuarios
├── metrics.controller.ts          # Endpoint /metrics para Prometheus
├── metrics.middleware.ts          # Middleware para medir duración de peticiones
├── metrics.module.ts              # Módulo de métricas
├── metrics.registry.ts            # Registro custom Prometheus
├── metrics.service.ts             # Servicio para métricas custom
├── app.controller.ts              # Controlador principal
├── app.module.ts                  # Módulo raíz de la aplicación
├── app.service.ts                 # Servicio principal
└── main.ts                        # Bootstrap y configuración global
```

## 📁 Resultados Prometheus

### 🔹 `http_request_duration_seconds_bucket`

Esta métrica corresponde a un **histograma de duración de peticiones HTTP**, que permite conocer **cuánto tiempo tardan las peticiones en completarse**, agrupadas en rangos o "buckets" (`le`: less than or equal).

Por ejemplo: `le="0.1"` agrupa todas las peticiones que se completaron en 100 milisegundos o menos.

Esta información es útil para:
- Evaluar el rendimiento por endpoint.
- Detectar cuellos de botella.
- Calcular percentiles (p95, p99).

<br/>

<img width="900" alt="Prometheus_1" src="https://github.com/user-attachments/assets/ae7a04b4-ce8a-45ff-a1b5-08ec55d7eadb" />

---

### 🔹 `tournament_created_total`

Esta es una **métrica personalizada tipo `Counter`**, que contabiliza cuántos torneos han sido creados a lo largo del tiempo en la aplicación. 

Este contador ayuda a:
- Monitorear acciones clave del negocio.
- Verificar la funcionalidad de endpoints específicos.
- Construir dashboards funcionales.

<br/>

<img width="954" alt="Prometheus_2" src="https://github.com/user-attachments/assets/6c466f63-6350-4f27-8105-f8cd6571ca97" />

---

### 🔹 `http_request_duration_seconds_count`

Esta métrica representa el **número total de peticiones HTTP** realizadas por método, ruta y código de estado. Es parte del histograma y permite tener un conteo exacto de llamadas a cada endpoint.

Es útil para:
- Auditar el tráfico HTTP.
- Identificar endpoints más utilizados.
- Analizar el comportamiento de los usuarios y detectar errores (por códigos 4xx/5xx).

<br/>

<img width="948" alt="Prometheus_3" src="https://github.com/user-attachments/assets/e4157819-8cff-41cf-9c88-fc00b142c743" />

## 📈 Visualización en Grafana

Se configuraron paneles en **Grafana** para visualizar las métricas más relevantes recolectadas por Prometheus desde la API NestJS.

---

### 🔹 Panel: `http_request_duration_seconds_bucket`

Este panel muestra la evolución de las **peticiones HTTP agrupadas por duración**. Se puede observar cómo los diferentes "buckets" (`le=0.1`, `le=0.3`, `le=0.5`, etc.) van acumulando el número de peticiones a lo largo del tiempo.

Cada línea representa un bucket diferente, permitiendo identificar si hay un aumento en la cantidad de peticiones lentas (útil para monitoreo de latencia y rendimiento de endpoints).

<br/>
<img width="802" alt="Grafana_1" src="https://github.com/user-attachments/assets/52282a86-5530-413a-bfd5-08b6acf526f7" />


---

### 🔹 Panel: `tournament_created_total`

Este panel gráfico representa la métrica personalizada `tournament_created_total`, que **cuenta cuántos torneos se han creado** en la aplicación.

El comportamiento en el tiempo muestra cómo este contador se incrementa conforme se crean nuevos torneos. La curva ascendente indica la actividad del sistema en cuanto a creación de entidades clave del negocio.

<br/>
<img width="793" alt="Grafana_2" src="https://github.com/user-attachments/assets/5f543dd7-c7b1-42b6-9d92-ac5afd5440df" />

# Torneo-de-VideoJuegos
