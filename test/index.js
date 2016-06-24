var fs = require('fs');
var path = require('path');
var http = require('http');

http.createServer(function (req, res) {
    if (req.url === 'favicon.ico') return;

    var filename = req.url.replace('/', '').replace('src/', '../src/');
    var realPath = path.resolve(__dirname, filename);
    var extension = path.extname(realPath);
    var mimeType = mimeTypes[extension] || 'text/plain';

    fs.exists(realPath, function(exists){
        if (!exists){
            res.writeHead(404, {
                'Content-Type': mimeType
            });

            res.end();
        } else {
            var file = fs.createReadStream(realPath);

            res.writeHead(200, {
                'Content-Type': mimeType
            });
            file.on('data', res.write.bind(res));
            file.on('close', res.end.bind(res));
            file.on('error', function(err){
                res.writeHead(500, {
                    'Content-Type': mimeType
                });

                res.end();
            });
        }
    });
})
.listen(6100);

console.log('Server running at http://localhost:6100/');

var mimeTypes = {
    '.txt': 'text/plain',
    '.html': 'text/html',
    '.css': 'text/css',
    '.xml': 'application/xml',
    '.json': 'application/json',
    '.js': 'application/javascript',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.png': 'image/png',
    '.svg': 'image/svg+xml'
};