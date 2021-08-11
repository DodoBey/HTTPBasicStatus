var http = require('http');
var os = require('os');
var process = require('process');
var checkDiskSpace = require('check-disk-space').default;

let disk = []
checkDiskSpace('C:/').then((diskSpace) => {
    disk = diskSpace
})



http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    switch (req.url){
        case '/api/arch':
            res.write(process.arch);
            break;
        case '/api/cpu':
            res.write(JSON.stringify(os.cpus()));
            break;
        case '/api/platform':
            res.write(os.platform());
            break;
        case '/api/type':
            res.write(os.type());
            break;
        case '/api/node':
            res.write(process.argv[0]);
            break;
        case '/api/file':
            res.write(process.argv[1]);
            break;
        case '/api/up':
            res.write(JSON.stringify(os.uptime()));
            break;
        case '/api/env':
            res.write(JSON.stringify(process.env));
            break;
        case '/api/memory':
            res.write(JSON.stringify(process.memoryUsage()));
            break;
        case '/api/version':
            res.write(process.version);
            break;
        case '/api/hdd':
            res.write(JSON.stringify(disk))
            break;
        default :
            res.write('Please enter the url that you want to go')
    }
    res.end();
}).listen(3333);

