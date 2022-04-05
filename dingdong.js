var text = $response.body;
var res = rext.replaceAll("\"disableType\":1", "\"disableType\":0")
$done({body: res}); 
