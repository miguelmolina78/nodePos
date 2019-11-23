
const HTTP = require('http');
const server = HTTP.createServer((req,res) => {
    res.writeHead(200, { 'Content-Type': 'application/json'});
    res.end(JSON.stringify({
        'message': 'Desenvolvimento Web Rest in NODE'
    }))
});

const port = 3000

server.listen(port, (err) =>{
    if (err) throw new Error (err);

    console.log('Runnig at: localhost:%s', port);
});
