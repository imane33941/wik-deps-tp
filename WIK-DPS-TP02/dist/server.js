import http from 'http';
import os from 'os';
const PORT = process.env.PING_LISTEN_PORT || 3000;
const server = http.createServer((req, res) => {
    console.log(`[${os.hostname()}]`);
    if (req.url === '/ping' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(req.headers));
    }
    else {
        res.writeHead(404);
        res.end('Not Found');
    }
});
server.listen(PORT, () => {
    console.log(`Serveur démarré sur ${PORT}`);
});
