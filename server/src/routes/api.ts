import type { IncomingMessage, ServerResponse } from 'node:http';
import { parseBody } from '../utils/body-parser.js';

export async function handleApiRoutes(
  req: IncomingMessage, 
  res: ServerResponse, 
  pathname: string, 
  method: string
): Promise<void> {
  
  // Example: GET /api/users
  if (pathname === '/api/users' && method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ 
      users: [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' }
      ]
    }));
    return;
  }

  // Example: POST /api/users
  if (pathname === '/api/users' && method === 'POST') {
    try {
      const body = await parseBody(req);
      
      // Here you would typically save to database
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ 
        message: 'User created',
        data: body
      }));
    } catch (error) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ 
        error: 'Bad Request',
        message: error instanceof Error ? error.message : 'Invalid request body'
      }));
    }
    return;
  }

  // Example: GET /api/users/:id
  const userIdMatch = pathname.match(/^\/api\/users\/(\d+)$/);
  if (userIdMatch && method === 'GET') {
    const userId = userIdMatch[1];
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ 
      user: { id: parseInt(userId), name: 'Sample User' }
    }));
    return;
  }

  // No matching route
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ 
    error: 'API endpoint not found',
    path: pathname 
  }));
}
