var fs = require('fs'),
    util = require('util');

module.exports = function(session) {
    var JsonStore = function(options) {
        options = options || {};
        session.Store.call(this, options);

        var filename = options.filename ? options.filename : 'express-sessions.json';
        this._filename = __dirname + '/' + filename;
        console.log(this._filename)
        var self = this;
        if (!fs.existsSync(this._filename)) {
            fs.writeFileSync(this._filename, '{}');
            self._sessions = {};
        } else {
            fs.readFile(this._filename, function(err, data) {
                self._sessions = JSON.parse(data);
            });
        }
    };

    util.inherits(JsonStore, session.Store);

    JsonStore.prototype.set = function(sid, sess, fn) {
        var self = this;
        // find one
        sess._sessionid = sid;
        this._sessions[sid] = sess;
        fs.writeFile(this._filename, JSON.stringify(this._sessions), function(err) {});
        fn(null, sess);
    };

    JsonStore.prototype.get = function(sid, fn) {
        if (!this._sessions || !this._sessions[sid]) {
            fn(null, null);
        } else {
            fn(null, this._sessions[sid]);
        }
    };

    JsonStore.prototype.destroy = function(sid, fn) {
        if (!this._sessions || !this._sessions[sid])
            return;
        delete this._sessions[sid];

        // no big matter if have failed
        fs.writeFile(this._filename, JSON.stringify(this._sessions), function(err) {});

        return;
    };

    JsonStore.prototype.length = function(fn) {
        if (!this._sessions || !this._sessions[sid])
            return 0;
        var i = 0;
        for (var x in this._sessions)
            if (this._sessions.hasOwnProperty(x))
                i++;
        return i;
    };

    JsonStore.prototype.all = function(fn) {
        var t = [];
        for (var x in this._sessions)
            t.push(this._sessions[x]);
        fn(null, t);
    };

    JsonStore.prototype.clear = function(fn) {
        this._sessions = {};

        // no big matter if have failed
        fs.writeFile(this._filename, JSON.stringify(this._sessions), function(err) {});

        fn(null, null);
    };

    return JsonStore;
};
