var fs = require('fs');
var sync_job = {};

function Sync(config_file_path) {
    let that = this;
    
    fs.readFile(config_file_path, 'utf8', function(err, data) {
        that.config = JSON.parse(data);
        console.log(data);
    })
}



module.exports = Sync;
