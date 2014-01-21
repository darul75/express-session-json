# Express-session-json [![NPM version](https://badge.fury.io/js/express-session-json.png)](http://badge.fury.io/js/express-session-json) [![Build Status](https://travis-ci.org/darul75/express-session-json.png?branch=master)](https://travis-ci.org/darul75/express-session-json) [![Total views](https://sourcegraph.com/api/repos/github.com/darul75/express-session-json/counters/views.png)](https://sourcegraph.com/github.com/darul75/express-session-json)

Simple JSON file session store for Express (Connect I guess)

## Why ?

Because we may need it for simple cases.

## Install

~~~
npm install express-session-json
~~~

## Usage

```javascript
var express = require('express'),
    MongoJson = require('express-session-json');

var app = module.exports = express();

app.configure(function(){    
    app.use(express.cookieParser('your secret here'));
    app.use(express.session({ store: new MongoJson() }));
    ...
});
```

## Options

- **filename** : filename, default 'express-sessions.json'

## License

The MIT License (MIT)

Copyright (c) 2013 Julien Valéry

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
