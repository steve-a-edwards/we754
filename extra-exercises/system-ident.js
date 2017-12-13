// JSON output from XML document, extracting nodes using XPath function.
// This demonstrates GatewayScript (ECMA) xpath function (introduced firmware 7.2).
// Author: Steve Edwards, Escala Ltd.
// Date  : 2015-11-17.
// Note  : this code is for demonstration purposes only, not production - level.

var transform = require('transform');
var sm = require ('service-metadata');
// Read the service variable 'var://service/system/ident', an XML structure,
// gives access to DataPower device-name (see form at bottom of this file): 
var system_ident = XML.parse(sm.getVar ('var://service/system/ident'));
var options = { 'expression': 'identification/device-name/text()',
	            'xmldom': system_ident};           
transform.xpath(options, function(err, xmlNodeList) {
	if (err) {session.out.write(err);}
	else {
		//  xmlNodeList = 'MA72'
		var option = { omitXmlDeclaration: true } ;
		var device_name = XML.stringify(option, xmlNodeList);
		// "MA72"
		session.output.write(device_name);
	}
});

/* var://service/system/ident ~
<identification
	xmlns:dp="http://www.datapower.com/schemas/management"
	xmlns:env="http://schemas.xmlsoap.org/soap/envelope/"
	build="262935"
	timestamp="Tue Nov 17 17:20:02 2015">
	<product-id>5725</product-id>
	<product>IDG</product>
	<display-product>IDG</display-product>
	<model>IBM DataPower Gateway</model>
	<display-model>IBM DataPower Gateway</display-model>
	<device-name></device-name>
	<serial-number>0000000</serial-number>
	<firmware-version>IDG.7.2.0.0</firmware-version>
	<display-firmware-version>IDG.7.2.0.0</display-firmware-version>
	<firmware-build>262935</firmware-build>
	<firmware-timestamp>2015/06/10 10:22:14</firmware-timestamp>
	<current-date>2015-11-17</current-date>
	<current-time>17:20:02 GMT</current-time>
	<reset-date>2015-11-11</reset-date>
	<reset-time>03:23:06 GMT</reset-time>
	<login-message/>
	<custom-ui-file/>
</identification>

curl http://192.168.1.72:8082/system-ident
*/





