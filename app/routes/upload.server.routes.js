var upload = require('../controllers/upload.server.controller');

module.exports = function(app) {
    app.route('/upload/image')
    .post(upload.postImage);

   
};
