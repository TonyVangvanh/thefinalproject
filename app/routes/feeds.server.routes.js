var users = require('../../app/controllers/users.server.controller'),
   feeds = require('../../app/controllers/feeds.server.controller');

module.exports = function(app) {
    app.route('/api/feeds')
        .get(feeds.list)
        .post(users.requiresLogin, feeds.create);

    app.route('/api/feeds/:feedId')
        .get(feeds.read)
        .put(users.requiresLogin, feeds.hasAuthorization,feeds.update)
        .delete(users.requiresLogin, feeds.hasAuthorization,feeds.delete);

    app.param('feedId', feeds.feedByID);
};