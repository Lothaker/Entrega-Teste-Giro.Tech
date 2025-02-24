const app = require('./app');

const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT;

app.listen(3333, () => console.log('Server is running on port 3333!'));