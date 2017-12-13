// DataPower service-metadata example: Client IP and port.
// This demonstrates GatewayScript (ECMA) service variable information.
// Author: Steve Edwards, Escala Ltd.
// Date  : 2014-09-30.
// Note  : this code is for demonstration purposes only, not production - level.

var sm = require ('service-metadata');

var client_service_address_JSON = {};

// Read the client-service-address as a string using the URL notation
// result is of form: 
var client_service_address = sm.getVar ('var://service/client-service-address');
var client_ip = client_service_address.split(":")[0];
var client_port = client_service_address.split(":")[1];

client_service_address_JSON.ip = client_ip;
client_service_address_JSON.port = client_port;

session.output.write(client_service_address_JSON);

/* Sample output:
{
    "ip": "192.168.1.112",
    "port": "49318"
}
*/