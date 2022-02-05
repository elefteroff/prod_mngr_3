const PMController = require('../controllers/pm.controller');

module.exports = (app) => {
    app.get('/api', PMController.index);
    app.post('/api/pm', PMController.createPM);
    app.get('/api/pms', PMController.getAllPMs);
    app.get('/api/pms/:myCoolID', PMController.getPM);
    app.put('/api/pms/:id', PMController.updateOnePM);
    app.delete('/api/pms/:id', PMController.deleteOnePM);
}