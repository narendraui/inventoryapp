var configuration=require('./app/config/config');
var mongod=require('./app/config/mongodb');
mongod();
var app=require('./app/config/express')();

app.listen(configuration.port);
console.log('Server initialised');