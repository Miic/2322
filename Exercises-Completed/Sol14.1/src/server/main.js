let fs = require('fs');
let express = require('express');
let app = express();

import React from 'react';
import { renderToString }  from 'react-dom/server';
import { RoutingContext, match } from 'react-router';
import createLocation from 'history/lib/createLocation';

import routes from '../routes/Routes';

let indexFileContent = require('./server.html');

function _populateTemplate(reactDOMServerString) {
    return eval("`" + indexFileContent + "`");
}

app.use(express.static('public'));

app.get("/*", _handler);

function _handler(req, res) {
    console.log(req.url);
    const location = createLocation(req.url);
    match({routes, location}, (err, redirectLocation, renderProps) => {
        if (err) return res.status(500).end('Internal server error');
        if (redirectLocation) return res.status(304).redirect(redirectLocation);
        if (!renderProps) return res.status(404).end('Not found.');

        const matchedComponent = (
            <RoutingContext {...renderProps} />
        );
        const componentHTML = renderToString(matchedComponent);
        const populatedHtml = _populateTemplate(componentHTML);
        res.end(populatedHtml);
    });
}

app.listen(process.env.PORT, function () {
    console.log('Reaction Tracker server running on port: ' + process.env.PORT);
})