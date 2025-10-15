import type { IncomingMessage, ServerResponse } from 'node:http';
import { parse } from 'node:url';
import { handleHealthCheck } from './routes/health.js';
import { handleApiRoutes } from './routes/api.js';

export async function router(req: IncomingMessage, res: ServerResponse): Promise<void> {
  const parsedUrl = parse(req.url || '', true);
  const pathname = parsedUrl.pathname || '/';
  const method = req.method || 'GET';

  // Health check endpoint
  if (pathname === '/health' && method === 'GET') {
    return handleHealthCheck(req, res);
  }

  // API routes
  if (pathname.startsWith('/api/')) {
    return handleApiRoutes(req, res, pathname, method);
  }

  // 404 - Not Found
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ 
    error: 'Not Found',
    path: pathname 
  }));
}
