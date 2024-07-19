// server/index.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const schoolsRouter = require('./routes/schools');
const cors = require('cors');  

const app = express();
const port = 5000;
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/schoolImages', express.static(path.join(__dirname, 'schoolImages')));
app.use('/api', schoolsRouter);

app.get('/', (req, res) => res.send('API Running'));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
