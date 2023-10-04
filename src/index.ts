import http from 'http';

const port:string = process.env.PING_LISTEN_PORT?? '3000';

const server:http.Server = http.createServer((req, res) => {
    if (req.url === '/ping'&& req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify( req.headers));
    }else{
        res.writeHead(404);
        res.end();
    }

});

server.listen(port,() => console.log(`Server running at http://localhost:${port}`));