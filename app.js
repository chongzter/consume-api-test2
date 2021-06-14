var http = require('http');

function getJSON(options, cb) {
    http.request(options, function(res){
        var body = '';
    
        res.on('data', function(chunk){
            body += chunk;
        });
    
        res.on('end', function(){
            var result = JSON.parse(body);
            cb(null, result);
        });
        res.on('error', cb);
    })
    .on('error', cb)
    .end();
}

var options = {
    host: 'sonplaceholder.typicode.com',
    port: 80,
    path: '/todos/1',
    method: 'GET'
};

getJSON(options, function(err, result){
    if(err){
        return console.log('Error whle trying to get data: ', err);
    }
    console.log(result);
});
