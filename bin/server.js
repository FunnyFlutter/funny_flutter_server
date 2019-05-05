#!/usr/bin/env node
const express = require('express');
const app = express();
const port = process.env.port || 8989;
app.listen(port);
console.log('Funny Flutter API server started on: ' + port);