var dbconfig = require('../mothergoose/mongoose-config');
var controller = new (require('../controllers'))(dbconfig);


app.get('/media', controller.index);
app.get('/media/:id', controller.find);
app.post('/media', controller.insert);
app.put('/media/:id', controller.update);
app.delete('/wines/:id', controller.delete);