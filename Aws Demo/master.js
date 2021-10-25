// var os = require('os');
// if (os.platform() == 'win32') {  
//     if (os.arch() == 'ia32') {
//         var chilkat = require('@chilkat/ck-node11-win-ia32');
//     } else {
//         var chilkat = require('@chilkat/ck-node11-win64'); 
//     }
// } else if (os.platform() == 'linux') {
//     if (os.arch() == 'arm') {
//         var chilkat = require('@chilkat/ck-node11-arm');
//     } else if (os.arch() == 'x86') {
//         var chilkat = require('@chilkat/ck-node11-linux32');
//     } else {
//         var chilkat = require('@chilkat/ck-node11-linux64');
//     }
// } else if (os.platform() == 'darwin') {
//     var chilkat = require('@chilkat/ck-node11-macosx');
// }

// function chilkatExample() {

//     var rest = new chilkat.Rest();
//     var success;

//     //  URL:
//     var bTls = false;
//     var port = 80;
//     var bAutoReconnect = true;
//     success = rest.Connect("",port,bTls,bAutoReconnect);
//     if (success !== true) {
//         console.log("ConnectFailReason: " + rest.ConnectFailReason);
//         console.log(rest.LastErrorText);
//         return;
//     }

//     //  Note: The above code does not need to be repeatedly called for each REST request.
//     //  The rest object can be setup once, and then many requests can be sent.  Chilkat will automatically
//     //  reconnect within a FullRequest* method as needed.  It is only the very first connection that is explicitly
//     //  made via the Connect method.

//     var sbResponseBody = new chilkat.StringBuilder();
//     success = rest.FullRequestNoBodySb("GET","/",sbResponseBody);
//     if (success !== true) {
//         console.log(rest.LastErrorText);
//         return;
//     }

//     var respStatusCode = rest.ResponseStatusCode;
//     console.log("response status code = " + respStatusCode);
//     if (respStatusCode >= 400) {
//         console.log("Response Status Code = " + respStatusCode);
//         console.log("Response Header:");
//         console.log(rest.ResponseHeader);
//         console.log("Response Body:");
//         console.log(sbResponseBody.GetAsString());
//         return;
//     }


// }

// chilkatExample();