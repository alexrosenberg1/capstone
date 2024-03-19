const express = require('express');
const app = express();
const config = require('./config');
const car_routes = require('./routes/car_routes');
const cors = require('cors');

app.use(cors());
app.use('/car', car_routes);

//Test DB Connection
config.authenticate().then(() => {
    console.log('Database is connected')
}).catch((err) => {
    console.log(err);
});

//app.get('/', function(req, res){
//   res.send('Hello World');
//});

const PORT = 4000;
app.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}`);
});