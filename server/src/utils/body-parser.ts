import type { IncomingMessage } from 'node:http';

export function parseBody(req: IncomingMessage): Promise<any> {
  return new Promise((resolve, reject) => {
    let body = '';
    
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    
    req.on('end', () => {
      try {
        if (body.length === 0) {
          resolve({});
          return;
        }
        
        const contentType = req.headers['content-type'] || '';
        
        if (contentType.includes('application/json')) {
          resolve(JSON.parse(body));
        } else if (contentType.includes('application/x-www-form-urlencoded')) {
          const params = new URLSearchParams(body);
          const result: Record<string, string> = {};
          params.forEach((value, key) => {
            result[key] = value;
          });
          resolve(result);
        } else {
          resolve(body);
        }
      } catch (error) {
        reject(new Error('Invalid request body format'));
      }
    });
    
    req.on('error', (error) => {
      reject(error);
    });
  });
}
