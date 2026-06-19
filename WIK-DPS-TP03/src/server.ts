import http from 'http';
import os from 'os'

const PORT = process.env.PING_LISTEN_PORT || 3000;

const server = http.createServer((req, res) => {

  console.log(`[${os.hostname()}] Requête reçue: ${req.url}`);

  if (req.url === '/ping' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      hostname: os.hostname(),
      headers: req.headers
    }));
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`[${os.hostname()}] Serveur démarré sur le port ${PORT}`);
});