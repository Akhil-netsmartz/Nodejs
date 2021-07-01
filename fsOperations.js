var http = require('http')
var fs = require('fs');

//Read File , Create Server
http.createServer(function(req,res){
  fs.readFile("mynewfile1.txt",function(err,data){
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.write(data)

    return res.end();
  })
}).listen(8080);

//Create file
fs.appendFile('mynewfile1.txt', 'Append in file', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

fs.appendFile('mynewfile2.txt', 'Write file', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

//Update file
fs.writeFile('mynewfile1.txt', 'Replaced in file', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});

//Delete file
fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});

//Rename file
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});
