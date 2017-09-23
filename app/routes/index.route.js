// create new file ./app/routes/index.route.js
import index from '../controllers/index.controller';
const path = '/api/index';

module.exports = (app) => {
    app.get('/', index.index);
    app.get('/help', index.help);
};