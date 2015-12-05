var mongoose = require('mongoose'),
    Feed = mongoose.model('Feed');

// ERROR HANDLING
var getErrorMessage = function(err) {
    if (err.errors) {
        for (var errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].message;
        }
    }
    else {
        return 'Unknown server error';
    }
};

// CHECK AUTHORIZATION
exports.hasAuthorization = function(req, res, next) {
    if (req.feed.creator.id !== req.user.id) {
        return res.status(403).send({
            message: 'User is not authorized'
        });
    }
    next();
};

// CREATE
exports.create = function(req, res) {
    var feed = new Feed(req.body);

    //this is the authenticated Passport user
    feed.creator = req.user;

    feed.save(function(err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        }
        else {
            res.json(feed);
        }
    });
};

//LIST/READ
exports.list = function(req, res) {
    Feed.find().sort('-created').populate('creator', 'firstName   lastName fullName').exec(function(err, feeds) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        }
        else {
            res.json(feeds);
        }
    });
};

//FIND BY ID
exports.feedByID = function(req, res, next, id) {
    Feed.findById(id).populate('creator', 'firstName lastName fullName').exec(function(err, feed) {
        if (err) return next(err);
        if (!feed) return next(new Error('Failed to load post ' + id));

        req.feed = feed;
        next();
    });
};

//READ
exports.read = function(req, res) {
    res.json(req.feed);
};

//UPDATE
exports.update = function(req, res) {
    var feed = req.feed;

    //makeupdates to title and content
    feed.title = req.body.title;
    feed.content = req.body.content;

    //call save on the Mongoose model
    feed.save(function(err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        }
        else {
            res.json(feed);
        }
    });
};

//DELETE
exports.delete = function(req, res) {
    var feed = req.feed;

    feed.remove(function(err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        }
        else {
            res.json(feed);
        }
    });
};
