const User=require('../schemas/user');
// file system module to perform file operations
const fs = require('fs');
var jsonData ='{"persons":[{"name":"John","city":"New York"},{"name":"Phil","city":"Ohio"}]}';
        // parse json
        var jsonObj = JSON.parse(jsonData);
        console.log(jsonObj);
        // stringify JSON Object
        var jsonContent = JSON.stringify(jsonObj);
        console.log(jsonContent);
 
//         fs.writeFile("C:/Users/praty/Desktop/blog_data.json", jsonContent, 'utf8', function (err) {
//             if (err) {
//                 console.log("An error occured while writing JSON Object to File.");
//                 return console.log(err);
//     }       
//         console.log("JSON file has been saved.");
//         return;
// });
module.exports.print = async function(req, res){
    fs.writeFile("C:/Users/praty/Desktop/blog_data.txt", jsonContent, 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
}       
    console.log("JSON file has been saved.");
    return;
});
}