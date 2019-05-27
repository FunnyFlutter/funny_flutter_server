const express = require('express');
const router = require('../src/router');
const app = express();
const port = process.env.port || 8989;

app.listen(port);
app.use(express.json());
router(app);

console.log(`Funny Flutter API server started on: http://localhost:${port}`);