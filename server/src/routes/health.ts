import type { IncomingMessage, ServerResponse } from 'node:http';

export function handleHealthCheck(req: IncomingMessage, res: ServerResponse): void {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ 
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  }));
}
