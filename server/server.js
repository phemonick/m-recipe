import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import api from './routes/api'

// Instance of the express app
const app = express();

//Request logger
app.use(morgan('dev'));

// Parsing body data
app.use(bodyParser.json({ type: 'application/json' }))
app.use(bodyParser.urlencoded({ extended: true }));

const router = express.Router();

api(router);
app.use('/api', api);

app.get('/',  (req, res) => {
    res.status(200).send({
        message: 'Welcome to more recipe api',
    });
});


const port = process.env.PORT || 7000;

app.listen(port);

console.log(`Find me on http://localhost:${port}`);

