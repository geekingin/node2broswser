var childProcess = require('child_process');

var operator;

if (process.platform === 'win32') {
    operator = 'start "%ProgramFiles%\Internet Explorer\iexplore.exe"';
} else if (process.platform === 'darwin') {
    operator = 'open';
} else if (process.platform === 'linux') {
    operator = 'xdg-open';
}

childProcess.exec(operator + 'http://www.baidu.com')

module.exports = {
    open: function(uri) {

        childProcess.exec(operator + ' ' + uri)
    }
}
