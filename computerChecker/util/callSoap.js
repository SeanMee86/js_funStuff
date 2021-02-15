const http = require('http');
const parseString = require('xml2js').parseString;

module.exports = function callSoap(res, xml) {
    const options = {
        host: 'localhost',
        path: '/ws',
        //since we are listening on a custom port, we need to specify it by hand
        port: '8080',
        //This is what changes the request to a POST request
        method: 'POST'
    };

    const callback = function(response) {
        var str = ''
        response.on('data', function (chunk) {
            str += chunk;
        });

        response.on('end', function () {
            parseString(str, (err, result) => {
                const datakey = Object.keys(result['SOAP-ENV:Envelope']['SOAP-ENV:Body'][0]);
                const dataArray = result['SOAP-ENV:Envelope']['SOAP-ENV:Body'][0][datakey];
                const data = dataArray[0];
                const finalKey = Object.keys(data)[Object.keys(data).length - 1];
                res.send(data[finalKey]);
            })
        });
    }

    const request = http.request(options, callback);
    request.write(xml);
    request.end();
}
