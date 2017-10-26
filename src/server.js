const express = require('express');
const app = express();

const STATIC_ROOT = process.argv[2] || __dirname + '/../public';
const PORT = process.argv[3] || 80;

// console.log(`Serving STATIC_ROOT=${STATIC_ROOT}`);
// console.log(`Serving PORT=${PORT}`);

app.use(express.static(STATIC_ROOT));

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});