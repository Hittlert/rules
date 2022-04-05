var text = $response.body;
var res = text.replaceAll("\"disableType\":1", "\"disableType\":0")
$done({body: res}); 
