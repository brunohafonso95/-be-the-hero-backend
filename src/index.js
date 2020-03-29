require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env.development',
});

const app = require('./app');

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
    console.log(`server listeing on port ${PORT}`);
});
