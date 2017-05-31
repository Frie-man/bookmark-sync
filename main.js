var fs = require('fs');

var filesDir = './text';

var config = __dirname + '/config.json';

fs.readFile(config, 'utf8', function(err, data) {
    var config = JSON.parse(data);
    for (var index in config["browser"]) {
        (function(browser) {
            var browser_config_path = __dirname + '/' + browser + '.config.json';
            fs.exists(browser_config_path, function(exists) {
                if (exists) {
                    console.log(browser_config_path);
                    //var $sync = require(browser_config_path);
                }
            })
        })(config["browser"][index])
    }
})
