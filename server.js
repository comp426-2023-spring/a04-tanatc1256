#!/usr/bin/env node 

import minimist from 'minimist';
import express from 'express';
import {rps, rpsls} from './lib/rpsls.js';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const args = minimist(process.argv.slice(2));

const port = args.port || 5000;

app.get('/app/', (req, res) => {
	res.status(200);
	res.send('200 OK');
});

app.get('*', function(req, res) {
	res.status(404);
	res.send('404 NOT FOUND');
});

app.get('/app/rps/', (req, res) => {
	res.status(200);
	res.send(rps());
});

app.get('/app/rpsls/', (req, res) => {
	res.status(200);
	res.send(rpsls());
});

app.listen(port, () => {
	console.log('Server listen on port ' + port);
});
