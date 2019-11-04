const fs = require('fs');

const printFile = function(err, data) {
    if (err) throw err;
    console.log(data.toString());
};

const create = function(name, description, minimum) {
    fs.readFile('/etc/passwd', printFile);
};

const update = function(id, name, description, minimum) {
    console.log("Updating =>", id, name, description, minimum);
};

const remove = function(id) {
    console.log("Deleting =>", id);
};

const get = function(id) {
    console.log("Getting =>", id);
};

exports.create = create;
exports.update = update;
exports.remove = remove;
exports.get = get;  

