http = require('http');
soap = require('./soap');

var server = null;
var hostname = '127.0.0.1';
var port = 8088;
var baseUrl = 'http://' + hostname + ':' + port;

// server = http.createServer(function (req, res) {
//   res.statusCode = 401;
//   res.write(JSON.stringify({tempResponse: 'temp'}), 'utf8');
//   res.end();
// }).listen(port, hostname);

soap.createClient(__dirname + '/../test/wsdl/default_namespace.wsdl', {
  endpoint: baseUrl + '/nonexist'
}, function (err, client) {
  console.log('cleint=' + client, err);
  client.MyOperation({}, function (err, result) {
    console.log('ok', err, result);
    // assert.ok(err);
    // assert.ok(err.response);
    // assert.ok(err.body);
    // done();
  });
}, baseUrl);
