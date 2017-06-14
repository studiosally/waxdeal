var fs = require('fs');

var htmlHeader = fs.readFileSync(__dirname + '/templates/header.html', 'utf8');
var htmlLoginModal = fs.readFileSync(__dirname + '/templates/login.html', 'utf8');
var htmlRecordModal = fs.readFileSync(__dirname + '/templates/recordmodal.html', 'utf8');
var htmlfooter = fs.readFileSync(__dirname + '/templates/footer.html', 'utf8');

function runAtBegin($templateCache) {
  $templateCache.put('header.html', htmlHeader);
  $templateCache.put('login.html', htmlLoginModal);
  $templateCache.put('recordmodal.html', htmlRecordModal);
  $templateCache.put('footer.html', htmlfooter);
}

module.exports = runAtBegin


