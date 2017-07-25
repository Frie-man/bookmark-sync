var fs = require('fs');
const Sync = require('./src/sync.js');

var filesDir = './text';

var config = __dirname + '/config.json';

fs.readFile(config, 'utf8', function(err, data) {
    var config = JSON.parse(data);
    for (var index in config["browsers"]) {
        (function(browser) {
            var browser_config_path = __dirname + '/' + browser + '.config.json';
            fs.exists(browser_config_path, function(exists) {
                if (exists) {
                    let sync = Sync(browser_config_path);
                }
            })
        })(config["browsers"][index])
    }
})
