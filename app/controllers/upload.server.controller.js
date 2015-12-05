var uuid = require('node-uuid'),
multiparty = require('multiparty'),
fs = require('fs');

var form = new multiparty.Form();
form.parse(req, function(err, fields, files) {
    var file = files.file[0];
    var contentType = file.headers['content-type'];
    var tmpPath = file.path;
    var extIndex = tmpPath.lastIndexOf('.');
    var extension = (extIndex < 0) ? '' : tmpPath.substr(extIndex);
    // uuid is for generating unique filenames.
    var fileName = uuid.v4() + extension;
    var destPath = appRoot +'/../public/images/profile_images/' + fileName;

    if (contentType !== 'image/png' && contentType !== 'image/jpeg') {
        fs.unlink(tmpPath);
        return res.status(400).send('Unsupported file type.');
    }

    var is = fs.createReadStream(tmpPath);
    var os = fs.createWriteStream(destPath);

    if(is.pipe(os)) {
        fs.unlink(tmpPath, function (err) {
            if (err) {
                console.log(err);
            }
        });
        return res.json(destPath);
    }else
        return res.json('File not uploaded');
});