import { Request, Response, NextFunction } from 'express';
import { Histogram } from 'prom-client';
import { registry } from './metrics.registry';

const httpRequestDurationSeconds = new Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duración de las solicitudes HTTP en segundos',
  labelNames: ['method', 'route', 'status_code'],
  buckets: [0.1, 0.3, 0.5, 1, 1.5, 2, 5, 10],
  registers: [registry], // 👈 REGISTRA en el mismo Registry
});

export function metricsMiddleware(req: Request, res: Response, next: NextFunction) {
  const end = httpRequestDurationSeconds.startTimer();

  res.on('finish', () => {
    const route = req.route?.path || req.path || req.url;
    end({
      method: req.method,
      route,
      status_code: res.statusCode,
    });
  });

  next();
}
